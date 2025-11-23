export interface Tool {
  name: string;
  icon: string;
}

export interface SkillCluster {
  id: string;
  title: string;
  tools: Tool[];
}

export const skillClusters: SkillCluster[] = [
  {
    id: 'observability',
    title: 'Observability Stack',
    tools: [
      { name: 'Grafana', icon: '/icons/grafana.svg' },
      { name: 'Prometheus', icon: '/icons/prometheus.svg' },
      { name: 'InfluxDB', icon: '/icons/influxdb.svg' },
      { name: 'ELK', icon: '/icons/elastic.svg' }
    ]
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    tools: [
      { name: 'Golang', icon: '/icons/golang.svg' },
      { name: 'Shell', icon: '/icons/shell.svg' },
      { name: 'Python', icon: '/icons/python.svg' }
    ]
  },
  {
    id: 'automation',
    title: 'Automation & IaC',
    tools: [
      { name: 'GitLab CI/CD', icon: '/icons/gitlab.svg' },
      { name: 'ArgoCD', icon: '/icons/argocd.svg' },
      { name: 'Terraform', icon: '/icons/terraform.svg' },
      { name: 'Ansible', icon: '/icons/ansible.svg' }
    ]
  },
  {
    id: 'systems',
    title: 'Systems & Containerization',
    tools: [
      { name: 'Linux', icon: '/icons/linux.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
      { name: 'Proxmox', icon: '/icons/proxmox.svg' }
    ]
  }
];
