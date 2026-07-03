# modules/github-oidc/main.tf
# GitHub Actions OIDC — passwordless AWS authentication
#
# How it works:
# 1. GitHub Actions requests a JWT token from GitHub's OIDC provider
# 2. AWS verifies the token against the registered OIDC provider
# 3. AWS issues temporary credentials scoped to this IAM role
# 4. No long-lived secrets stored in GitHub — maximum security

# Register GitHub's OIDC provider with AWS
resource "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"

  # GitHub's OIDC audience
  client_id_list = ["sts.amazonaws.com"]

  # GitHub's OIDC thumbprint (official, stable value)
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1",
  "1c58a3a8518e8759bf075b76b750d4f2df264fcd"]

  tags = { Name = "${var.name_prefix}-github-oidc-provider" }
}

# Trust policy — ONLY specific repo + branch can assume this role
data "aws_iam_policy_document" "github_assume_role" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    # Restrict to specific repo and branch — least privilege
    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:${var.github_org}/${var.github_repository}:ref:refs/heads/${var.github_branch}"]
    }
  }
}

# GitHub Actions IAM Role
resource "aws_iam_role" "github_actions" {
  name                 = "${var.name_prefix}-github-actions-role"
  assume_role_policy   = data.aws_iam_policy_document.github_assume_role.json
  description = "Role for GitHub Actions OIDC - Rahul-Parihar/Durga-Dulari-Enterprises"
  max_session_duration = 3600 # 1 hour max — minimum needed for deployment

  tags = { Name = "${var.name_prefix}-github-actions-role" }
}

# Least privilege policy for GitHub Actions:
# - ECR: push images, read/delete for lifecycle management
# - Cannot touch EC2, VPC, IAM — only the container registry
data "aws_iam_policy_document" "github_actions" {
  # ECR authentication
  statement {
    effect    = "Allow"
    actions   = ["ecr:GetAuthorizationToken"]
    resources = ["*"]
  }

  # ECR image operations (push, pull, scan results)
  statement {
    effect = "Allow"
    actions = [
      "ecr:BatchCheckLayerAvailability",
      "ecr:CompleteLayerUpload",
      "ecr:GetDownloadUrlForLayer",
      "ecr:InitiateLayerUpload",
      "ecr:PutImage",
      "ecr:UploadLayerPart",
      "ecr:BatchGetImage",
      "ecr:BatchDeleteImage", # for deleting vulnerable images
      "ecr:DescribeImages",
    ]
    resources = [var.ecr_repository]
  }

  # CloudWatch — publish pipeline metrics (optional)
  statement {
    effect    = "Allow"
    actions   = ["cloudwatch:PutMetricData"]
    resources = ["*"]
  }
}

resource "aws_iam_role_policy" "github_actions" {
  name   = "${var.name_prefix}-github-actions-policy"
  role   = aws_iam_role.github_actions.id
  policy = data.aws_iam_policy_document.github_actions.json
}
