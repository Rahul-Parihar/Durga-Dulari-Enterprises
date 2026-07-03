variable "name_prefix" { type = string }
variable "vpc_id" { type = string }
variable "allowed_ssh_cidr" { type = string }
variable "app_port" { type = number }
variable "app_allowed_cidr" {
  type        = string
  default     = "0.0.0.0/0"
  description = "CIDR allowed to access app port. Set to VPC CIDR if behind reverse proxy."
}
variable "common_tags" {
  description = "Common tags applied to all resources"
  type        = map(string)
  default     = {}
}
