variable "name_prefix" { type = string }
variable "environment" { type = string }
variable "ami_id" { type = string }
variable "instance_type" { type = string }
variable "subnet_id" { type = string }
variable "security_group_ids" { type = list(string) }
variable "iam_instance_profile" { type = string }
variable "key_name" { type = string }
variable "deploy_path" {
  type    = string
  default = "/opt/durga-dulari"
}
variable "enable_cloudwatch" {
  type    = bool
  default = true
}

variable "common_tags" {
  description = "Common tags applied to all resources"
  type        = map(string)
  default     = {}
}
