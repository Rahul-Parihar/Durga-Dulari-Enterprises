# modules/keypair/main.tf
# Generates an RSA key pair, saves private key locally
# The public key is registered with AWS for SSH access

resource "tls_private_key" "main" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "aws_key_pair" "main" {
  key_name   = "${var.name_prefix}-keypair"
  public_key = tls_private_key.main.public_key_openssh
  tags       = { Name = "${var.name_prefix}-keypair" }
}

# Save private key to local file — keep this secure!
resource "local_file" "private_key" {
  content         = tls_private_key.main.private_key_pem
  filename        = "${path.root}/${var.name_prefix}-key.pem"
  file_permission = "0400" # owner read-only (like chmod 400)
}
