#!/bin/bash
# userdata.sh.tpl
# EC2 bootstrap script - loaded via templatefile() in ec2/main.tf
# Template variables: ${name_prefix}, ${deploy_path}, ${enable_cloudwatch}, ${environment}
# OS: Ubuntu 22.04/24.04 LTS
set -ex

# System update
apt-get update -y
apt-get upgrade -y

# Docker
apt-get install -y docker.io
systemctl enable docker
systemctl start docker
usermod -aG docker ubuntu

# Docker Compose V2 - via snap
snap install docker

# AWS CLI v2
apt-get install -y awscli

# CloudWatch Agent
%{ if enable_cloudwatch }
wget -q https://s3.amazonaws.com/amazoncloudwatch-agent/ubuntu/amd64/latest/amazon-cloudwatch-agent.deb -O /tmp/amazon-cloudwatch-agent.deb
dpkg -i /tmp/amazon-cloudwatch-agent.deb
rm /tmp/amazon-cloudwatch-agent.deb

cat > /opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json << 'CWCONFIG'
{
  "agent": {
    "metrics_collection_interval": 60,
    "run_as_user": "cwagent"
  },
  "metrics": {
    "metrics_collected": {
      "disk": {
        "measurement": ["disk_used_percent"],
        "resources": ["/"],
        "ignore_file_system_types": ["sysfs", "devtmpfs"]
      },
      "mem": {
        "measurement": ["mem_used_percent"]
      },
      "cpu": {
        "measurement": ["cpu_usage_idle", "cpu_usage_user", "cpu_usage_system"],
        "totalcpu": true
      }
    },
    "append_dimensions": {
      "InstanceId": "$${aws:InstanceId}",
      "Environment": "${environment}"
    }
  },
  "logs": {
    "logs_collected": {
      "files": {
        "collect_list": [
          {
            "file_path": "/var/log/cloud-init-output.log",
            "log_group_name": "/aws/ec2/${name_prefix}",
            "log_stream_name": "cloud-init"
          },
          {
            "file_path": "/var/log/syslog",
            "log_group_name": "/aws/ec2/${name_prefix}",
            "log_stream_name": "syslog"
          }
        ]
      }
    }
  }
}
CWCONFIG

systemctl enable amazon-cloudwatch-agent
systemctl start amazon-cloudwatch-agent
%{ endif }

# Deployment directory
mkdir -p ${deploy_path}
chown ubuntu:ubuntu ${deploy_path}

# Verify installations
docker --version
docker-compose --version
aws --version

echo "Bootstrap complete - ${name_prefix} - $(date)"
