# backend.tf
# Remote state backend — values supplied via -backend-config flag
# No hardcoded values here!
#
# Init commands:
#   Dev:        terraform init -backend-config=backend-configs/dev.hcl
#   Production: terraform init -backend-config=backend-configs/production.hcl

terraform {
  backend "s3" {}
}
