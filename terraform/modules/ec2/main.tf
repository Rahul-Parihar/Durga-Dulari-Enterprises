# modules/ec2/main.tf
# EC2 instance — user data loaded from external template file

resource "aws_instance" "main" {
  ami                    = var.ami_id
  instance_type          = var.instance_type
  subnet_id              = var.subnet_id
  vpc_security_group_ids = var.security_group_ids
  iam_instance_profile   = var.iam_instance_profile
  key_name               = var.key_name

  # Load user data from template file — clean separation of concerns
  user_data = templatefile("${path.module}/userdata.sh.tpl", {
    name_prefix       = var.name_prefix
    deploy_path       = var.deploy_path
    enable_cloudwatch = var.enable_cloudwatch
    environment       = var.environment
  })

  user_data_replace_on_change = false

  # Root volume — 20GB encrypted gp3
  root_block_device {
    volume_type           = "gp3"
    volume_size           = 20
    encrypted             = true
    delete_on_termination = true
    tags                  = { Name = "${var.name_prefix}-root-volume" }
  }

  # IMDSv2 — prevents SSRF attacks from stealing instance credentials
  metadata_options {
    http_endpoint               = "enabled"
    http_tokens                 = "required"
    http_put_response_hop_limit = 1
  }

  tags = { Name = "${var.name_prefix}-ec2" }

  lifecycle {
    ignore_changes = [ami] # don't replace instance when AMI updates
  }
}
