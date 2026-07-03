variable "name_prefix" { type = string }
variable "common_tags" {
  description = "Common tags applied to all resources"
  type        = map(string)
  default     = {}
}
