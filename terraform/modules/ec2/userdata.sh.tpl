#!/bin/bash
# userdata.sh.tpl
# EC2 bootstrap script — loaded via templatefile() in ec2/main.tf
# Template variables: ${name_prefix}, ${deploy_path}, ${enable_cloudwatch}
set -ex

# ── System update ─────────────────────────────────────────────
dnf update -y

# ── Docker ────────────────────────────────────────────────────
dnf install -y docker
systemctl enable docker
systemctl start docker
usermod -aG docker ec2-user

# ── Docker Compose V2 ─────────────────────────────────────────
COMPOSE_VERSION=$(curl -s https://api.github.com/repos/docker/compose/releases/latest \
  | grep tag_name | cut -d '"' -f 4)
curl -SL "https://github.com/docker/compose/releases/download/$${COMPOSE_VERSION}/docker-compose-linux-x86_64" \
  -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose

# ── AWS CLI v2 ────────────────────────────────────────────────
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o /tmp/awscliv2.zip
dnf install -y unzip
unzip -q /tmp/awscliv2.zip -d /tmp
/tmp/aws/install
rm -rf /tmp/awscliv2.zip /tmp/aws

# ── CloudWatch Agent ──────────────────────────────────────────
%{ if enable_cloudwatch }
dnf install -y amazon-cloudwatch-agent

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
            "file_path": "/var/log/docker",
            "log_group_name": "/aws/ec2/${name_prefix}",
            "log_stream_name": "docker"
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

# ── Deployment directory ──────────────────────────────────────
mkdir -p ${deploy_path}
chown ec2-user:ec2-user ${deploy_path}

# ── Verify installations ──────────────────────────────────────
docker --version
docker-compose --version
aws --version

echo "✅ Bootstrap complete — ${name_prefix} — $(date)"
