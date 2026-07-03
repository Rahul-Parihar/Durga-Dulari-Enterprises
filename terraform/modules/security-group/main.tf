# modules/security-group/main.tf
# Firewall rules for EC2 instance
# Note: port 3000 is exposed directly here for simplicity.
# For production internet-facing apps, consider:
#   - putting Nginx/Caddy reverse proxy on ports 80/443
#   - restricting port 3000 to VPC CIDR only

resource "aws_security_group" "ec2" {
  name        = "${var.name_prefix}-ec2-sg"
  description = "Security group for ${var.name_prefix} EC2 instance"
  vpc_id      = var.vpc_id

  # ── Inbound ─────────────────────────────────────────────
  # SSH — restricted to configured CIDR (your IP only in production)
  ingress {
    description = "SSH from configured CIDR"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = [var.allowed_ssh_cidr]
  }

  # HTTP — public access (for reverse proxy or direct access)
  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # HTTPS — public access
  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Application port — restrict source via variable
  # Set app_allowed_cidr to VPC CIDR if using a reverse proxy
  ingress {
    description = "Application port (Next.js)"
    from_port   = var.app_port
    to_port     = var.app_port
    protocol    = "tcp"
    cidr_blocks = [var.app_allowed_cidr]
  }

  # ── Outbound ─────────────────────────────────────────────
  egress {
    description = "All outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = { Name = "${var.name_prefix}-ec2-sg" }

  lifecycle {
    create_before_destroy = true
  }
}
