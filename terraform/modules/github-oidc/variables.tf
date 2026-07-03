variable "name_prefix" { type = string }
variable "github_org" { type = string }
variable "github_repository" { type = string }
variable "github_branch" { type = string }
variable "account_id" { type = string }
variable "region" { type = string }
variable "ecr_repository" { type = string }
variable "common_tags" {
  description = "Common tags applied to all resources"
  type        = map(string)
  default     = {}
}
