# provider.tf
# AWS provider configuration
# Uses default credential chain: env vars, ~/.aws, EC2 instance role

provider "aws" {
  region = var.region

  # Apply default tags to ALL resources — no need to repeat in each resource
  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "Terraform"
      Developer   = "Anand"
      Repository  = "Durga-Dulari-Enterprises"
    }
  }
}
