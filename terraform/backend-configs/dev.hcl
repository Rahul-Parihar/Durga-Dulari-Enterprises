# backend-configs/dev.hcl
# Usage: terraform init -backend-config=backend-configs/dev.hcl
# Each environment has its own state file — no shared state risk

bucket         = "durga-dulari-terraform-state-dev"
key            = "dev/terraform.tfstate"
region         = "ap-south-1"
encrypt        = true
dynamodb_table = "terraform-state-lock"
