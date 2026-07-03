region       = "ap-south-1"
project_name = "durga-dulari"
environment  = "production"

vpc_cidr           = "10.0.0.0/16"
public_subnet_cidr = "10.0.1.0/24"
availability_zone  = "ap-south-1a"

ami_id           = "ami-01a00762f46d584a1"
instance_type    = "t3.small"
allowed_ssh_cidr = "103.187.160.0/24"
app_port         = 3000

github_org        = "Rahul-Parihar"
github_repository = "Durga-Dulari-Enterprises"
github_branch     = "main"

ecr_image_retention_count = 10
enable_cloudwatch         = true
enable_alb                = false
enable_route53            = false
domain_name               = ""