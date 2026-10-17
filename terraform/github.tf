# github.tf
# GitHub repository settings managed via Terraform

provider "github" {
  owner = var.github_org
  token = var.github_token
}

# Branch protection for main
resource "github_branch_protection" "main" {
  repository_id = var.github_repository
  pattern       = "main"

  enforce_admins = true

  required_pull_request_reviews {
    required_approving_review_count = 0
    dismiss_stale_reviews           = true
  }

  required_status_checks {
    strict   = true
    contexts = ["Lint & Test"]
  }

  allows_force_pushes = false
  allows_deletions    = false
}


# GitHub Actions secrets
resource "github_actions_secret" "resend_api_key" {
  repository  = var.github_repository
  secret_name = "RESEND_API_KEY"
  value       = var.resend_api_key
}

resource "github_actions_secret" "resend_from_email" {
  repository  = var.github_repository
  secret_name = "RESEND_FROM_EMAIL"
  value       = var.resend_from_email
}

resource "github_actions_secret" "contact_notification_email" {
  repository  = var.github_repository
  secret_name = "CONTACT_NOTIFICATION_EMAIL"
  value       = var.contact_notification_email
}

