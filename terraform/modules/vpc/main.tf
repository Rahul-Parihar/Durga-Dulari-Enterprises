# modules/vpc/main.tf
# Creates a simple public VPC for the application
# For production at scale, consider private subnets + NAT Gateway

# VPC — isolated network for all resources
resource "aws_vpc" "main" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true # allows EC2 to get DNS names
  enable_dns_support   = true

  tags = { Name = "${var.name_prefix}-vpc" }
}

# Internet Gateway — allows VPC to reach the internet
resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id
  tags   = { Name = "${var.name_prefix}-igw" }
}

# Public Subnet — EC2 instances live here
resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = var.public_subnet_cidr
  availability_zone       = var.availability_zone
  map_public_ip_on_launch = true # EC2 gets public IP automatically

  tags = { Name = "${var.name_prefix}-public-subnet" }
}

# Route Table — rules for how traffic leaves the subnet
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id

  # Default route: all traffic goes to internet gateway
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }

  tags = { Name = "${var.name_prefix}-public-rt" }
}

# Route Table Association — connects subnet to route table
resource "aws_route_table_association" "public" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public.id
}
