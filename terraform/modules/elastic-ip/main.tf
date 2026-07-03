# modules/elastic-ip/main.tf
# Elastic IP — static public IP that survives EC2 stop/start
# Without EIP, EC2 gets a new IP every restart — breaking DNS and deployments

resource "aws_eip" "main" {
  instance = var.instance_id
  domain   = "vpc"
  tags     = { Name = "${var.name_prefix}-eip" }

  # EIP must be released before VPC can be destroyed
  depends_on = []
}
