# environments/dev.tfvars
# Usage: terraform plan -var-file=environments/dev.tfvars
# Dev environment — smaller, cheaper, relaxed settings

region       = "ap-south-1"
project_name = "durga-dulari"
environment  = "dev"

vpc_cidr           = "10.1.0.0/16"
public_subnet_cidr = "10.1.1.0/24"
availability_zone  = "ap-south-1a"

instance_type    = "t3.micro"  # cheaper for dev
allowed_ssh_cidr = "0.0.0.0/0" # relaxed for dev
app_port         = 3000

github_org        = "Rahul-Parihar"
github_repository = "Durga-Dulari-Enterprises"
github_branch     = "develop"

ecr_image_retention_count = 5     # fewer images in dev
enable_cloudwatch         = false # save costs
enable_alb                = false
enable_route53            = false
domain_name               = ""
