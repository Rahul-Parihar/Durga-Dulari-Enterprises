# main.tf
# Root module - orchestrates all child modules

locals {
  name_prefix = "${var.project_name}-${var.environment}"

  common_tags = {
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "Terraform"
    Owner       = var.owner
  }
}

# Fetch latest Ubuntu 24.04 LTS AMI - Canonical official
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd*/ubuntu-*-24.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  filter {
    name   = "state"
    values = ["available"]
  }
}

# Current AWS account ID
data "aws_caller_identity" "current" {}

# Current AWS region
data "aws_region" "current" {}

# Available AZs
data "aws_availability_zones" "available" {
  state = "available"
}

# VPC
module "vpc" {
  source             = "./modules/vpc"
  name_prefix        = local.name_prefix
  vpc_cidr           = var.vpc_cidr
  public_subnet_cidr = var.public_subnet_cidr
  availability_zone  = data.aws_availability_zones.available.names[0]
  common_tags        = local.common_tags
}

# Security Group
module "security_group" {
  source           = "./modules/security-group"
  name_prefix      = local.name_prefix
  vpc_id           = module.vpc.vpc_id
  allowed_ssh_cidr = var.allowed_ssh_cidr
  app_port         = var.app_port
  common_tags      = local.common_tags
}

# ECR
module "ecr" {
  source                = "./modules/ecr"
  name_prefix           = local.name_prefix
  image_retention_count = var.ecr_image_retention_count
  common_tags           = local.common_tags
}

# IAM
module "iam" {
  source         = "./modules/iam"
  name_prefix    = local.name_prefix
  account_id     = data.aws_caller_identity.current.account_id
  region         = data.aws_region.current.name
  ecr_repository = module.ecr.repository_arn
  common_tags    = local.common_tags
}

# GitHub OIDC
module "github_oidc" {
  source            = "./modules/github-oidc"
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
module "keypair" {
  source      = "./modules/keypair"
  name_prefix = local.name_prefix
  common_tags = local.common_tags
}

# EC2 - uses Ubuntu AMI from data source
module "ec2" {
  source               = "./modules/ec2"
  name_prefix          = local.name_prefix
  environment          = var.environment
  ami_id               = data.aws_ami.ubuntu.id
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
module "elastic_ip" {
  source      = "./modules/elastic-ip"
  name_prefix = local.name_prefix
  instance_id = module.ec2.instance_id
  common_tags = local.common_tags
}

# CloudWatch (optional)
module "cloudwatch" {
  count       = var.enable_cloudwatch ? 1 : 0
  source      = "./modules/cloudwatch"
  name_prefix = local.name_prefix
  instance_id = module.ec2.instance_id
  region      = data.aws_region.current.name
  common_tags = local.common_tags
}