# variables.tf
# All configurable inputs with validation — catches mistakes at plan time

# ── Core ────────────────────────────────────────────────────
variable "region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "ap-south-1"

  validation {
    condition     = can(regex("^[a-z]{2}-[a-z]+-[0-9]$", var.region))
    error_message = "Region must be a valid AWS region format (e.g. ap-south-1)."
  }
}

variable "project_name" {
  description = "Project name used in resource naming and tags"
  type        = string
  default     = "durga-dulari"

  validation {
    condition     = can(regex("^[a-z0-9-]+$", var.project_name))
    error_message = "Project name must be lowercase alphanumeric with hyphens only."
  }
}

variable "environment" {
  description = "Deployment environment"
  type        = string

  validation {
    condition     = contains(["dev", "staging", "production"], var.environment)
    error_message = "Environment must be one of: dev, staging, production."
  }
}

# ── Networking ───────────────────────────────────────────────
variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"

  validation {
    condition     = can(cidrhost(var.vpc_cidr, 0))
    error_message = "VPC CIDR must be a valid IPv4 CIDR block."
  }
}

variable "public_subnet_cidr" {
  description = "CIDR block for the public subnet"
  type        = string
  default     = "10.0.1.0/24"

  validation {
    condition     = can(cidrhost(var.public_subnet_cidr, 0))
    error_message = "Subnet CIDR must be a valid IPv4 CIDR block."
  }
}

variable "availability_zone" {
  description = "Availability zone for the public subnet"
  type        = string
  default     = "ap-south-1a"
}

# ── EC2 ─────────────────────────────────────────────────────
variable "ami_id" {
  description = "AMI ID for the EC2 instance"
  type        = string
}
variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.small"

  validation {
    condition     = contains(["t3.micro", "t3.small", "t3.medium", "t3.large"], var.instance_type)
    error_message = "Instance type must be one of: t3.micro, t3.small, t3.medium, t3.large."
  }
}

variable "allowed_ssh_cidr" {
  description = "CIDR allowed to SSH into EC2 — restrict to your IP in production"
  type        = string
  default     = "0.0.0.0/0"

  validation {
    condition     = can(cidrhost(var.allowed_ssh_cidr, 0))
    error_message = "allowed_ssh_cidr must be a valid CIDR block."
  }
}

variable "app_port" {
  description = "Application port exposed on EC2"
  type        = number
  default     = 3000

  validation {
    condition     = var.app_port > 1024 && var.app_port < 65535
    error_message = "App port must be between 1024 and 65535."
  }
}

# ── GitHub OIDC ──────────────────────────────────────────────
variable "github_org" {
  description = "GitHub organisation or username"
  type        = string

  validation {
    condition     = length(var.github_org) > 0
    error_message = "GitHub org cannot be empty."
  }
}

variable "github_repository" {
  description = "GitHub repository name (without org prefix)"
  type        = string

  validation {
    condition     = length(var.github_repository) > 0
    error_message = "GitHub repository cannot be empty."
  }
}

variable "github_branch" {
  description = "Branch allowed to trigger deployments"
  type        = string
  default     = "main"
}

# ── ECR ─────────────────────────────────────────────────────
variable "ecr_image_retention_count" {
  description = "Number of images to retain in ECR"
  type        = number
  default     = 10

  validation {
    condition     = var.ecr_image_retention_count >= 1 && var.ecr_image_retention_count <= 100
    error_message = "Image retention count must be between 1 and 100."
  }
}

# ── Feature flags ────────────────────────────────────────────
variable "enable_alb" {
  description = "Enable Application Load Balancer"
  type        = bool
  default     = false
}

variable "enable_cloudwatch" {
  description = "Enable CloudWatch monitoring"
  type        = bool
  default     = true
}

variable "enable_route53" {
  description = "Enable Route53 DNS and ACM certificate"
  type        = bool
  default     = false
}

variable "domain_name" {
  description = "Domain name (required if enable_route53 = true)"
  type        = string
  default     = ""

  validation {
    condition     = !var.enable_route53 || length(var.domain_name) > 0
    error_message = "domain_name is required when enable_route53 = true."
  }
}

variable "owner" {
  description = "Owner of the infrastructure - used in resource tags"
  type        = string
  default     = "Anand"

  validation {
    condition     = length(var.owner) > 0
    error_message = "Owner cannot be empty."
  }
}
