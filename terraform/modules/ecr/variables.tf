variable "name_prefix" { type = string }
variable "image_retention_count" {
  type    = number
  default = 10
}

variable "common_tags" {
  description = "Common tags applied to all resources"
  type        = map(string)
  default     = {}
}
