# modules/cloudwatch/main.tf
# CloudWatch log group and metric alarms for EC2 monitoring

# Log group — receives Docker container logs and system logs
resource "aws_cloudwatch_log_group" "main" {
  name              = "/aws/ec2/${var.name_prefix}"
  retention_in_days = 30 # auto-delete logs after 30 days

  tags = { Name = "${var.name_prefix}-log-group" }
}

# Alarm: high CPU usage
resource "aws_cloudwatch_metric_alarm" "cpu_high" {
  alarm_name          = "${var.name_prefix}-cpu-high"
  alarm_description   = "EC2 CPU utilization exceeds 80%"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = 120
  statistic           = "Average"
  threshold           = 80
  treat_missing_data  = "notBreaching"

  dimensions = {
    InstanceId = var.instance_id
  }

  tags = { Name = "${var.name_prefix}-cpu-alarm" }
}

# Alarm: low disk space (requires CloudWatch agent on EC2)
resource "aws_cloudwatch_metric_alarm" "disk_low" {
  alarm_name          = "${var.name_prefix}-disk-low"
  alarm_description   = "Disk usage exceeds 85%"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 1
  metric_name         = "disk_used_percent"
  namespace           = "CWAgent"
  period              = 300
  statistic           = "Average"
  threshold           = 85
  treat_missing_data  = "notBreaching"

  dimensions = {
    InstanceId = var.instance_id
    path       = "/"
    fstype     = "xfs"
  }

  tags = { Name = "${var.name_prefix}-disk-alarm" }
}

# Alarm: high memory usage (requires CloudWatch agent on EC2)
resource "aws_cloudwatch_metric_alarm" "memory_high" {
  alarm_name          = "${var.name_prefix}-memory-high"
  alarm_description   = "Memory usage exceeds 85%"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "mem_used_percent"
  namespace           = "CWAgent"
  period              = 120
  statistic           = "Average"
  threshold           = 85
  treat_missing_data  = "notBreaching"

  dimensions = {
    InstanceId = var.instance_id
  }

  tags = { Name = "${var.name_prefix}-memory-alarm" }
}
