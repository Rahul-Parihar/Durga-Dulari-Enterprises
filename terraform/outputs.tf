# outputs.tf
# All useful values returned after terraform apply

# ── Networking ───────────────────────────────────────────────
output "vpc_id" {
  description = "VPC ID — useful for peering or additional modules"
  value       = module.vpc.vpc_id
}

output "public_subnet_id" {
  description = "Public subnet ID — useful for adding more EC2s or ALB"
  value       = module.vpc.public_subnet_id
}

# ── EC2 ─────────────────────────────────────────────────────
output "instance_id" {
  description = "EC2 instance ID — useful for SSM, CloudWatch, other modules"
  value       = module.ec2.instance_id
}

output "ec2_public_ip" {
  description = "EC2 instance public IP (changes on restart — use elastic_ip instead)"
  value       = module.ec2.public_ip
}

output "elastic_ip" {
  description = "Elastic IP — static, survives restarts. Use this for DNS and SSH"
  value       = module.elastic_ip.address
}

# ── Container Registry ───────────────────────────────────────
output "ecr_repository_url" {
  description = "ECR repository URL — use in docker push and GitHub Actions secrets"
  value       = module.ecr.repository_url
}

# ── Security ─────────────────────────────────────────────────
output "security_group_id" {
  description = "EC2 security group ID — useful for ALB or RDS integration"
  value       = module.security_group.id
}

output "ec2_iam_role_arn" {
  description = "IAM role ARN attached to EC2 instance"
  value       = module.iam.ec2_role_arn
}

output "github_oidc_role_arn" {
  description = "IAM role ARN for GitHub Actions — set as AWS_ROLE_ARN secret in GitHub"
  value       = module.github_oidc.role_arn
}

# ── Convenience ──────────────────────────────────────────────
output "ssh_command" {
  description = "SSH command to connect to EC2"
  value       = "ssh -i ${var.project_name}-${var.environment}-key.pem ec2-user@${module.elastic_ip.address}"
}

output "application_url" {
  description = "Application URL"
  value       = "http://${module.elastic_ip.address}:${var.app_port}"
}

output "cloudwatch_log_group" {
  description = "CloudWatch log group name"
  value       = var.enable_cloudwatch ? module.cloudwatch[0].log_group_name : "CloudWatch disabled"
}
