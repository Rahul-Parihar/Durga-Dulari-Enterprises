# main.tf
# Root module - orchestrates all child modules
# Each module is responsible for one concern (Single Responsibility Principle)

locals {
  name_prefix = "${var.project_name}-${var.environment}"

  # Common tags - passed to every module consistently
  # ManagedBy and Project are stable across teams and environments
  common_tags = {
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "Terraform"
    Owner       = var.owner
  }
}


# Current AWS account ID - used in IAM policy ARN construction
data "aws_caller_identity" "current" {}

# Current AWS region - avoids hardcoding, makes config portable across regions
data "aws_region" "current" {}

# All available AZs - used for subnet placement
# names[0] is used for single-subnet deployments
# Full list available for future multi-AZ expansion
data "aws_availability_zones" "available" {
  state = "available"
}

# VPC
module "vpc" {
  source = "./modules/vpc"

  name_prefix        = local.name_prefix
  vpc_cidr           = var.vpc_cidr
  public_subnet_cidr = var.public_subnet_cidr

  # Use first available AZ for single-subnet deployment
  # For multi-AZ, pass: data.aws_availability_zones.available.names
  availability_zone = data.aws_availability_zones.available.names[0]

  common_tags = local.common_tags
}

# Security Group
# Terraform infers depends on VPC via vpc_id reference
module "security_group" {
  source = "./modules/security-group"

  name_prefix      = local.name_prefix
  vpc_id           = module.vpc.vpc_id
  allowed_ssh_cidr = var.allowed_ssh_cidr
  app_port         = var.app_port
  common_tags      = local.common_tags
}

# ECR
# No dependencies - created in parallel with VPC and security group
module "ecr" {
  source = "./modules/ecr"

  name_prefix           = local.name_prefix
  image_retention_count = var.ecr_image_retention_count
  common_tags           = local.common_tags
}

# IAM
# Terraform infers depends on ECR via ecr_repository reference
module "iam" {
  source = "./modules/iam"

  name_prefix    = local.name_prefix
  account_id     = data.aws_caller_identity.current.account_id
  region         = data.aws_region.current.name
  ecr_repository = module.ecr.repository_arn
  common_tags    = local.common_tags
}

# GitHub OIDC
# Terraform infers depends on ECR via ecr_repository reference
module "github_oidc" {
  source = "./modules/github-oidc"

  name_prefix       = local.name_prefix
  github_org        = var.github_org
  github_repository = var.github_repository
  github_branch     = var.github_branch
  account_id        = data.aws_caller_identity.current.account_id
  region            = data.aws_region.current.name
  ecr_repository    = module.ecr.repository_arn
  common_tags       = local.common_tags
}

# SSH Key Pair
# No dependencies - created in parallel
module "keypair" {
  source = "./modules/keypair"

  name_prefix = local.name_prefix
  common_tags = local.common_tags
}

# EC2
# Terraform infers depends on: IAM, keypair, VPC, security group
module "ec2" {
  source = "./modules/ec2"

  name_prefix          = local.name_prefix
  environment          = var.environment
  ami_id               = var.ami_id
  instance_type        = var.instance_type
  subnet_id            = module.vpc.public_subnet_id
  security_group_ids   = [module.security_group.id]
  iam_instance_profile = module.iam.instance_profile_name
  key_name             = module.keypair.key_name
  deploy_path          = "/opt/durga-dulari"
  enable_cloudwatch    = var.enable_cloudwatch
  common_tags          = local.common_tags
}

# Elastic IP
# Terraform infers depends on EC2 via instance_id reference
module "elastic_ip" {
  source = "./modules/elastic-ip"

  name_prefix = local.name_prefix
  instance_id = module.ec2.instance_id
  common_tags = local.common_tags
}

# CloudWatch (optional)
# count = 0 skips resource creation entirely when disabled
# Terraform infers depends on EC2 via instance_id reference
module "cloudwatch" {
  count  = var.enable_cloudwatch ? 1 : 0
  source = "./modules/cloudwatch"

  name_prefix = local.name_prefix
  instance_id = module.ec2.instance_id
  region      = data.aws_region.current.name
  common_tags = local.common_tags
}
