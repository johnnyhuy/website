'use client'

import { motion } from 'framer-motion'
import {
  Laptop,
  Monitor,
  Server,
  Coffee,
  ChevronRight,
  Code,
  Cpu,
  HardDrive,
  Network,
  Wifi,
  Globe,
  Database,
  Cloud,
  Terminal,
  Activity,
  FileCode,
  GitBranch,
  Hammer,
  FileText,
  Gamepad2,
  Settings,
} from 'lucide-react'
import { FloatingThemeToggle } from '@/components/floating-theme-toggle'
import { Card, CardContent } from '@/components/ui/card'
import TechIcon from '@/components/tech-icon'

export default function UsesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-4xl font-bold">Uses</h1>
        <p className="text-muted-foreground mb-8 text-xl">
          A collection of hardware, software, and tools I use daily, including my homelab setup.
        </p>

        {/* Bento Box Layout */}
        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
          {/* Homelab Overview Card */}
          <Card className="col-span-1 overflow-hidden md:col-span-8">
            <CardContent className="p-4 md:p-6">
              <h2 className="mb-4 flex items-center text-2xl font-bold">
                <Server className="text-accent mr-2 h-5 w-5" />
                Homelab Overview
              </h2>
              <p className="text-muted-foreground mb-6">
                My homelab is built around a Kubernetes cluster running on Proxmox VMs and physical
                servers. It hosts various self-hosted applications and services for development,
                monitoring, and home automation.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="bg-secondary/30 rounded-lg p-4">
                  <div className="mb-2 flex items-center">
                    <Cpu className="text-accent mr-2 h-4 w-4" />
                    <h3 className="font-medium">Compute</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    6 Kubernetes nodes across multiple clusters with Proxmox virtualization
                  </p>
                </div>

                <div className="bg-secondary/30 rounded-lg p-4">
                  <div className="mb-2 flex items-center">
                    <HardDrive className="text-accent mr-2 h-4 w-4" />
                    <h3 className="font-medium">Storage</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    1TB+ distributed storage with Minio S3-compatible object storage
                  </p>
                </div>

                <div className="bg-secondary/30 rounded-lg p-4">
                  <div className="mb-2 flex items-center">
                    <Network className="text-accent mr-2 h-4 w-4" />
                    <h3 className="font-medium">Network</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    BGP routing with multiple subnets and VLANs
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Physical Servers Card */}
          <Card className="col-span-1 overflow-hidden md:col-span-4">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-4 flex items-center text-lg font-medium">
                <HardDrive className="text-accent mr-2 h-4 w-4" />
                Physical Servers
              </h3>
              <div className="space-y-4">
                <div className="border-border rounded-lg border p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium">Nether</h4>
                    <span className="bg-secondary/50 rounded-full px-2 py-1 text-xs">
                      Private IP
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2 text-sm">
                    Proxmox and Kubernetes server in the garage rack
                  </p>
                  <p className="bg-secondary/30 rounded-md p-2 font-mono text-xs">
                    AMD Ryzen 7 5700G, 24GB RAM, B550-A PRO
                  </p>
                </div>
                <div className="border-border rounded-lg border p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium">George</h4>
                    <span className="bg-secondary/50 rounded-full px-2 py-1 text-xs">
                      Private IP
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Raspberry Pi 4 running Kubernetes in the garage rack
                  </p>
                </div>
                <div className="border-border rounded-lg border p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium">Squishy</h4>
                    <span className="bg-secondary/50 rounded-full px-2 py-1 text-xs">
                      Private IP
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Lenovo ThinkCentre M700 Mini running Kubernetes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Homelab Applications */}
          <Card className="col-span-1 overflow-hidden md:col-span-6">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-4 flex items-center text-lg font-medium">
                <Globe className="text-accent mr-2 h-4 w-4" />
                Homelab Applications
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-secondary/30 flex items-center rounded-lg p-3">
                  <div className="bg-secondary mr-3 flex h-8 w-8 items-center justify-center rounded-full">
                    <GitBranch className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">ArgoCD</p>
                    <p className="text-muted-foreground text-xs">GitOps CD for Kubernetes</p>
                  </div>
                </div>
                <div className="bg-secondary/30 flex items-center rounded-lg p-3">
                  <div className="bg-secondary mr-3 flex h-8 w-8 items-center justify-center rounded-full">
                    <Hammer className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Jenkins</p>
                    <p className="text-muted-foreground text-xs">CI/CD automation</p>
                  </div>
                </div>
                <div className="bg-secondary/30 flex items-center rounded-lg p-3">
                  <div className="bg-secondary mr-3 flex h-8 w-8 items-center justify-center rounded-full">
                    <Gamepad2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Minecraft-ATM</p>
                    <p className="text-muted-foreground text-xs">Game server</p>
                  </div>
                </div>
                <div className="bg-secondary/30 flex items-center rounded-lg p-3">
                  <div className="bg-secondary mr-3 flex h-8 w-8 items-center justify-center rounded-full">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Paperless-ngx</p>
                    <p className="text-muted-foreground text-xs">Document management</p>
                  </div>
                </div>
                <div className="bg-secondary/30 flex items-center rounded-lg p-3">
                  <div className="bg-secondary mr-3 flex h-8 w-8 items-center justify-center rounded-full">
                    <Activity className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Monitoring</p>
                    <p className="text-muted-foreground text-xs">Grafana & Prometheus</p>
                  </div>
                </div>
                <div className="bg-secondary/30 flex items-center rounded-lg p-3">
                  <div className="bg-secondary mr-3 flex h-8 w-8 items-center justify-center rounded-full">
                    <Database className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Minio</p>
                    <p className="text-muted-foreground text-xs">S3 object storage</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ansible & Infrastructure */}
          <Card className="col-span-1 overflow-hidden md:col-span-6">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-4 flex items-center text-lg font-medium">
                <Settings className="text-accent mr-2 h-4 w-4" />
                Infrastructure Management
              </h3>
              <div className="space-y-4">
                <div className="border-border rounded-lg border p-3">
                  <div className="mb-2 flex items-center">
                    <FileCode className="text-accent mr-2 h-4 w-4" />
                    <h4 className="font-medium">Ansible</h4>
                  </div>
                  <p className="text-muted-foreground mb-2 text-sm">
                    Infrastructure automation with roles for K3s, Proxmox, Tailscale, and more
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary/50 rounded-full px-2 py-1 text-xs">k3s</span>
                    <span className="bg-secondary/50 rounded-full px-2 py-1 text-xs">proxmox</span>
                    <span className="bg-secondary/50 rounded-full px-2 py-1 text-xs">
                      tailscale
                    </span>
                    <span className="bg-secondary/50 rounded-full px-2 py-1 text-xs">pihole</span>
                  </div>
                </div>
                <div className="border-border rounded-lg border p-3">
                  <div className="mb-2 flex items-center">
                    <Terminal className="text-accent mr-2 h-4 w-4" />
                    <h4 className="font-medium">Terraform</h4>
                  </div>
                  <p className="text-muted-foreground mb-2 text-sm">
                    Infrastructure as code for cloud providers and local services
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary/50 rounded-full px-2 py-1 text-xs">
                      cloudflare
                    </span>
                    <span className="bg-secondary/50 rounded-full px-2 py-1 text-xs">
                      authentik
                    </span>
                    <span className="bg-secondary/50 rounded-full px-2 py-1 text-xs">
                      tailscale
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kubernetes Charts */}
          <Card className="col-span-1 overflow-hidden md:col-span-12">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-4 flex items-center text-lg font-medium">
                <Cloud className="text-accent mr-2 h-4 w-4" />
                Kubernetes Charts
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                <div className="bg-secondary/30 rounded-lg p-3 text-center">
                  <div className="bg-secondary mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full">
                    <Code className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium">Apps</p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3 text-center">
                  <div className="bg-secondary mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full">
                    <GitBranch className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium">ArgoCD</p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3 text-center">
                  <div className="bg-secondary mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full">
                    <Database className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium">Databases</p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3 text-center">
                  <div className="bg-secondary mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full">
                    <Activity className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium">Monitoring</p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3 text-center">
                  <div className="bg-secondary mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full">
                    <Wifi className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium">Ingress</p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3 text-center">
                  <div className="bg-secondary mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full">
                    <HardDrive className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium">Storage</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Network Configuration */}
          <Card className="col-span-1 overflow-hidden md:col-span-6">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-4 flex items-center text-lg font-medium">
                <Network className="text-accent mr-2 h-4 w-4" />
                Network Configuration
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-border border-b">
                      <th className="px-2 py-2 text-left">Name</th>
                      <th className="px-2 py-2 text-left">Lifecycle</th>
                      <th className="px-2 py-2 text-left">Subnet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-border/50 hover:bg-secondary/20 border-b">
                      <td className="px-2 py-2">TUF</td>
                      <td className="px-2 py-2">
                        <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs">
                          Production
                        </span>
                      </td>
                      <td className="px-2 py-2 font-mono text-xs">Private Subnet</td>
                    </tr>
                    <tr className="border-border/50 hover:bg-secondary/20 border-b">
                      <td className="px-2 py-2">K3S Cluster 02</td>
                      <td className="px-2 py-2">
                        <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs">
                          Production
                        </span>
                      </td>
                      <td className="px-2 py-2 font-mono text-xs">Private Subnet</td>
                    </tr>
                    <tr className="border-border/50 hover:bg-secondary/20 border-b">
                      <td className="px-2 py-2">K3S Service 02</td>
                      <td className="px-2 py-2">
                        <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs">
                          Production
                        </span>
                      </td>
                      <td className="px-2 py-2 font-mono text-xs">Private Subnet</td>
                    </tr>
                    <tr className="border-border/50 hover:bg-secondary/20 border-b">
                      <td className="px-2 py-2">VIP 02</td>
                      <td className="px-2 py-2">
                        <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs">
                          Production
                        </span>
                      </td>
                      <td className="px-2 py-2 font-mono text-xs">Private Subnet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Hardware */}
          <Card className="col-span-1 overflow-hidden md:col-span-6">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-4 flex items-center text-lg font-medium">
                <Monitor className="text-accent mr-2 h-4 w-4" />
                Hardware
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-medium">Workstation</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">MacBook Pro 16"</h5>
                        <p className="text-muted-foreground text-sm">M1 Max, 64GB RAM, 2TB SSD</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">Monitors</h5>
                        <p className="text-muted-foreground text-sm">2× Dell UltraSharp 27" 4K</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">Keyboard</h5>
                        <p className="text-muted-foreground text-sm">
                          Keychron K2 with Gateron Brown switches
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Audio</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">Headphones</h5>
                        <p className="text-muted-foreground text-sm">Sony WH-1000XM4</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">Microphone</h5>
                        <p className="text-muted-foreground text-sm">Blue Yeti X</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Software */}
          <Card className="col-span-1 overflow-hidden md:col-span-6">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-4 flex items-center text-lg font-medium">
                <Laptop className="text-accent mr-2 h-4 w-4" />
                Software
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-medium">Development</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">Editor</h5>
                        <p className="text-muted-foreground text-sm">
                          VS Code with GitHub Dark theme
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">Terminal</h5>
                        <p className="text-muted-foreground text-sm">
                          iTerm2 with Oh My Zsh and Powerlevel10k
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">Browser</h5>
                        <p className="text-muted-foreground text-sm">Firefox Developer Edition</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Productivity</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">Task Management</h5>
                        <p className="text-muted-foreground text-sm">Todoist and Linear</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">Notes</h5>
                        <p className="text-muted-foreground text-sm">Notion and Obsidian</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lifestyle */}
          <Card className="col-span-1 overflow-hidden md:col-span-6">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-4 flex items-center text-lg font-medium">
                <Coffee className="text-accent mr-2 h-4 w-4" />
                Lifestyle
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-medium">Coffee Setup</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">Breville Barista Express</h5>
                        <p className="text-muted-foreground text-sm">
                          Semi-automatic espresso machine
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">Fellow Stagg EKG Kettle</h5>
                        <p className="text-muted-foreground text-sm">
                          Electric pour-over kettle with temperature control
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 font-medium">Workspace</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">Fully Jarvis Standing Desk</h5>
                        <p className="text-muted-foreground text-sm">
                          Electric height-adjustable desk
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="text-accent mt-1 mr-2 h-4 w-4" />
                      <div>
                        <h5 className="font-medium">Herman Miller Aeron Chair</h5>
                        <p className="text-muted-foreground text-sm">Ergonomic office chair</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack */}
          <Card className="col-span-1 overflow-hidden md:col-span-12">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-4 flex items-center text-lg font-medium">
                <Code className="text-accent mr-2 h-4 w-4" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {[
                  'TypeScript',
                  'React',
                  'Next.js',
                  'Node.js',
                  'AWS',
                  'Docker',
                  'Kubernetes',
                  'Terraform',
                  'Python',
                  'GraphQL',
                  'PostgreSQL',
                  'MongoDB',
                ].map((tech) => (
                  <motion.div
                    key={tech}
                    whileHover={{ y: -5 }}
                    className="bg-secondary/30 flex flex-col items-center rounded-lg p-4"
                  >
                    <TechIcon name={tech} size="lg" className="mb-2" />
                    <span className="text-sm">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating Theme Toggle */}
      <FloatingThemeToggle position="bottom-right" />
    </div>
  )
}
