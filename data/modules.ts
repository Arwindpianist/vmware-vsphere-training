export interface Prerequisites {
  hardware: string[]
  software: string[]
  setup: string[]
}

export interface Topic {
  id: number
  title: string
  details: string[]
  steps?: {
    title: string
    description: string
    commands?: string[]
    notes?: string[]
  }[]
  examples?: {
    title: string
    description: string
    code?: string
    output?: string
  }[]
  exercises?: {
    title: string
    objective: string
    tasks: string[]
    validation: string[]
  }[]
  tips?: string[]
}

export interface Module {
  id: number
  title: string
  summary: string
  topics: Topic[]
  prerequisites?: string[]
}

export interface Day {
  id: number
  title: string
  modules: Module[]
}

export const prerequisites: Prerequisites = {
  hardware: [
    'Intel Core i5 or AMD Ryzen 5 processor (or better)',
    '16GB RAM minimum (32GB recommended)',
    '100GB free disk space',
    'Network adapter (wired or wireless)',
    'USB ports for lab materials'
  ],
  software: [
    'Windows 10/11 Professional (64-bit)',
    'Latest Windows updates installed',
    'Antivirus software (temporarily disabled during labs)',
    'Administrator access to your machine',
    'Web browser (Chrome, Firefox, or Edge)'
  ],
  setup: [
    'Disable Windows Hyper-V feature',
    'Enable virtualization in BIOS/UEFI',
    'Install Windows Subsystem for Linux (WSL2)',
    'Install Git for Windows',
    'Install Visual Studio Code'
  ]
}

export const days: Day[] = [
  {
    id: 1,
    title: "Introduction to VMware vSphere",
    modules: [
      {
        id: 1,
        title: "vSphere Architecture Overview",
        summary: "Learn about the core components and architecture of VMware vSphere, including ESXi, vCenter Server, and the virtualization layer.",
        topics: [
          {
            id: 1,
            title: "vSphere Components and Architecture",
            details: [
              "ESXi: The bare-metal hypervisor that runs directly on physical servers, providing the virtualization layer",
              "vCenter Server: Centralized management platform that enables efficient management of multiple ESXi hosts",
              "vSphere Client: Modern HTML5-based web interface for managing vSphere environments",
              "Virtual Machines: Encapsulated computing environments that run operating systems and applications",
              "vSphere Distributed Switch: Advanced networking feature for consistent network configuration across hosts",
              "vSphere Storage: Flexible storage options including VMFS, NFS, and vSAN",
              "vSphere Clusters: Groups of ESXi hosts that share resources and enable features like HA and DRS"
            ],
            steps: [
              {
                title: "Understanding ESXi Architecture",
                description: "Explore the key components of ESXi and how they work together",
                notes: [
                  "VMkernel: The operating system that runs on ESXi hosts",
                  "Virtual Machine Monitor (VMM): Manages virtual machine execution",
                  "Resource Management: Handles CPU, memory, and I/O allocation",
                  "Device Drivers: Provides hardware abstraction for virtual machines"
                ]
              },
              {
                title: "vCenter Server Components",
                description: "Learn about the various components that make up vCenter Server",
                notes: [
                  "vCenter Server Appliance (VCSA): Pre-configured Linux-based virtual appliance",
                  "Platform Services Controller: Handles authentication and licensing",
                  "vCenter Server Database: Stores configuration and performance data",
                  "vCenter Server Services: Core services for management and automation"
                ]
              }
            ],
            examples: [
              {
                title: "Basic vSphere Architecture",
                description: "A typical vSphere deployment consists of:",
                code: `
Physical Server
├── ESXi Host
│   ├── VMkernel
│   ├── Virtual Machines
│   │   ├── VM1 (Windows Server)
│   │   ├── VM2 (Linux)
│   │   └── VM3 (vCenter Server)
│   └── Management Interface
└── Storage & Network
    ├── SAN/NAS Storage
    └── Network Switches`
              }
            ],
            exercises: [
              {
                title: "Exploring vSphere Components",
                objective: "Identify and understand the key components of a vSphere environment",
                tasks: [
                  "Access the vSphere Client and log in with administrator credentials",
                  "Navigate to the Hosts and Clusters view",
                  "Identify the ESXi hosts in your environment",
                  "Examine the virtual machines running on each host",
                  "Review the storage and network configurations",
                  "Check the vCenter Server status and services",
                  "Document the component relationships in your environment"
                ],
                validation: [
                  "Successfully logged into vSphere Client",
                  "Identified all ESXi hosts in the environment",
                  "Listed all virtual machines and their resource allocations",
                  "Mapped the storage and network configurations",
                  "Verified vCenter Server services are running",
                  "Created a component relationship diagram"
                ]
              },
              {
                title: "vSphere Architecture Documentation",
                objective: "Create comprehensive documentation of your vSphere environment",
                tasks: [
                  "Document the physical infrastructure (servers, storage, network)",
                  "Map the virtual infrastructure (hosts, clusters, resource pools)",
                  "List all virtual machines and their configurations",
                  "Document the storage architecture (datastores, LUNs, NFS)",
                  "Map the network architecture (vSwitches, port groups, VLANs)",
                  "Document the management infrastructure (vCenter, PSC, SSO)",
                  "Create a high-level architecture diagram"
                ],
                validation: [
                  "Completed physical infrastructure documentation",
                  "Created virtual infrastructure map",
                  "Documented all VM configurations",
                  "Mapped storage architecture",
                  "Documented network architecture",
                  "Created management infrastructure documentation",
                  "Produced architecture diagram"
                ]
              }
            ]
          },
          {
            id: 2,
            title: "Virtualization Concepts and Benefits",
            details: [
              "Hardware Virtualization: Technology that enables multiple virtual machines to run on a single physical server",
              "Resource Sharing: Efficient utilization of physical resources across multiple virtual machines",
              "Isolation: Each virtual machine operates independently with its own resources and operating system",
              "Encapsulation: Virtual machines are stored as files, making them portable and easy to manage",
              "Hardware Independence: Virtual machines can run on any compatible physical hardware",
              "High Availability: Features like vSphere HA and Fault Tolerance ensure business continuity",
              "Resource Optimization: DRS and Storage DRS automatically balance workloads across the infrastructure"
            ],
            steps: [
              {
                title: "Understanding Resource Virtualization",
                description: "Learn how physical resources are virtualized and shared",
                notes: [
                  "CPU Virtualization: Intel VT-x and AMD-V technologies enable efficient CPU virtualization",
                  "Memory Virtualization: Memory ballooning and transparent page sharing optimize memory usage",
                  "Storage Virtualization: Virtual disks and datastores abstract physical storage",
                  "Network Virtualization: Virtual switches and port groups provide network connectivity"
                ]
              },
              {
                title: "Virtual Machine Components",
                description: "Explore the key components of a virtual machine",
                notes: [
                  "Virtual Hardware: CPU, memory, network adapters, and storage controllers",
                  "Configuration Files: .vmx (configuration) and .vmdk (virtual disk) files",
                  "Guest OS: Operating system installed in the virtual machine",
                  "VMware Tools: Utilities that enhance virtual machine performance and management"
                ]
              }
            ],
            examples: [
              {
                title: "Resource Sharing Example",
                description: "How resources are shared in a virtualized environment:",
                code: `
Physical Server (32 CPU cores, 256GB RAM)
├── VM1: 8 vCPUs, 32GB RAM (Production Database)
├── VM2: 4 vCPUs, 16GB RAM (Application Server)
├── VM3: 4 vCPUs, 16GB RAM (Web Server)
└── VM4: 2 vCPUs, 8GB RAM (Development Server)

Total Allocated: 18 vCPUs, 72GB RAM
Available for Overcommitment: 14 vCPUs, 184GB RAM`
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "vSphere Installation and Configuration",
        summary: "Step-by-step guide to installing and configuring vSphere components, including ESXi and vCenter Server.",
        topics: [
          {
            id: 1,
            title: "ESXi Installation and Setup",
            details: [
              "Hardware Requirements: CPU, memory, network, and storage requirements for ESXi",
              "Installation Methods: Interactive installation, scripted installation, and auto-deployment",
              "Initial Configuration: Network, storage, and security settings",
              "Security Hardening: Implementing security best practices and lockdown mode",
              "Update Management: Installing patches and updates using vSphere Update Manager",
              "Performance Tuning: Optimizing ESXi host performance for specific workloads",
              "Monitoring and Maintenance: Using health checks and performance monitoring tools"
            ],
            steps: [
              {
                title: "ESXi Installation Process",
                description: "Step-by-step guide to installing ESXi",
                notes: [
                  "Download ESXi ISO from VMware Customer Connect",
                  "Create bootable USB or mount ISO on server",
                  "Boot from installation media",
                  "Follow installation wizard",
                  "Configure root password",
                  "Configure management network",
                  "Complete installation and reboot"
                ],
                commands: [
                  "# Check hardware compatibility",
                  "esxcli hardware compatibility check",
                  "",
                  "# Configure management network",
                  "esxcli network ip interface set -i vmk0 -e true",
                  "esxcli network ip interface ipv4 set -i vmk0 -t static -g 192.168.1.1 -n 255.255.255.0 -I 192.168.1.100",
                  "",
                  "# Enable SSH access",
                  "vim-cmd hostsvc/enable_ssh",
                  "vim-cmd hostsvc/start_ssh"
                ]
              },
              {
                title: "Post-Installation Configuration",
                description: "Essential configuration steps after ESXi installation",
                notes: [
                  "Configure DNS and NTP settings",
                  "Set up storage connections",
                  "Configure virtual switches",
                  "Enable required services",
                  "Apply security hardening",
                  "Configure backup solution",
                  "Set up monitoring"
                ],
                commands: [
                  "# Configure NTP",
                  "esxcli system ntp set -s time.vmware.com",
                  "esxcli system ntp set -e true",
                  "",
                  "# Configure DNS",
                  "esxcli network ip dns server add -s 8.8.8.8",
                  "esxcli network ip dns server add -s 8.8.4.4",
                  "",
                  "# Enable lockdown mode",
                  "vim-cmd hostsvc/enable_lockdown_mode"
                ]
              }
            ],
            examples: [
              {
                title: "ESXi Host Configuration",
                description: "Typical ESXi host configuration:",
                code: `
ESXi Host Configuration
├── Management Network
│   ├── IP: 192.168.1.100
│   ├── Netmask: 255.255.255.0
│   └── Gateway: 192.168.1.1
├── Storage
│   ├── Local Storage: 2TB RAID 10
│   └── SAN Storage: 10TB LUNs
├── Virtual Switches
│   ├── vSwitch0 (Management)
│   ├── vSwitch1 (VM Network)
│   └── vSwitch2 (Storage)
└── Security
    ├── Lockdown Mode: Enabled
    ├── SSH: Disabled
    └── Firewall: Restricted`
              }
            ]
          },
          {
            id: 2,
            title: "vCenter Server Deployment",
            details: [
              "Deployment Options: Windows-based or vCenter Server Appliance (VCSA)",
              "System Requirements: Hardware and software requirements for vCenter Server",
              "Database Configuration: External or embedded database setup",
              "Network Configuration: IP addressing and DNS settings",
              "Security Configuration: SSL certificates and authentication",
              "High Availability: vCenter Server High Availability setup",
              "Backup and Recovery: vCenter Server backup and restore procedures"
            ],
            steps: [
              {
                title: "VCSA Deployment Process",
                description: "Step-by-step guide to deploying vCenter Server Appliance",
                notes: [
                  "Download VCSA ISO from VMware Customer Connect",
                  "Mount ISO and run installer",
                  "Select deployment type (Tiny, Small, Medium, Large)",
                  "Configure network settings",
                  "Set up SSO domain",
                  "Configure database",
                  "Complete deployment"
                ],
                commands: [
                  "# Check VCSA status",
                  "service-control --status --all",
                  "",
                  "# Configure NTP",
                  "/opt/vmware/share/vami/vami_set_timezone UTC",
                  "/opt/vmware/share/vami/vami_set_ntp time.vmware.com",
                  "",
                  "# Enable SSH access",
                  "shell.set --enabled true"
                ]
              },
              {
                title: "Post-Deployment Configuration",
                description: "Essential configuration steps after vCenter Server deployment",
                notes: [
                  "Configure backup solution",
                  "Set up SSL certificates",
                  "Configure email notifications",
                  "Set up monitoring",
                  "Configure roles and permissions",
                  "Enable required services",
                  "Configure high availability"
                ],
                commands: [
                  "# Configure backup",
                  "/opt/vmware/appliance/bin/backup.sh --file=/storage/backup/vcsa-backup.tar",
                  "",
                  "# Configure SSL certificates",
                  "/usr/lib/vmware-vmafd/bin/vecs-cli entry list --store MACHINE_SSL_CERT",
                  "",
                  "# Configure email notifications",
                  "/opt/vmware/appliance/bin/set-smtp-server --server smtp.company.com --port 25"
                ]
              }
            ],
            examples: [
              {
                title: "vCenter Server Architecture",
                description: "Typical vCenter Server deployment:",
                code: `
vCenter Server Deployment
├── Platform Services Controller
│   ├── SSO Domain
│   ├── Certificate Management
│   └── Licensing Service
├── vCenter Server
│   ├── Management Services
│   ├── Database
│   └── Backup
└── External Services
    ├── DNS Server
    ├── NTP Server
    └── SMTP Server`
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Virtual Machine Management",
    modules: [
      {
        id: 1,
        title: "Creating and Managing VMs",
        summary: "Learn how to create, configure, and manage virtual machines in vSphere, including best practices and advanced features.",
        topics: [
          {
            id: 1,
            title: "Virtual Machine Creation and Configuration",
            details: [
              "VM Creation Methods: Using vSphere Client, templates, or automation tools",
              "Virtual Hardware: CPU, memory, storage, and network configuration",
              "Guest OS Installation: Supported operating systems and installation methods",
              "VM Customization: Using customization specifications for automated deployment",
              "Resource Allocation: CPU, memory, and storage resource management",
              "Advanced Features: vMotion, Storage vMotion, and Fault Tolerance",
              "Performance Optimization: Tools and techniques for optimal VM performance"
            ],
            steps: [
              {
                title: "Creating a New Virtual Machine",
                description: "Step-by-step process for creating a new VM",
                notes: [
                  "Select appropriate VM version",
                  "Configure virtual hardware",
                  "Select storage location",
                  "Configure network settings",
                  "Install guest OS",
                  "Install VMware Tools",
                  "Apply customization"
                ],
                commands: [
                  "# Create VM using PowerCLI",
                  "New-VM -Name 'WebServer' -VMHost 'esxi01' -Datastore 'datastore1' -MemoryGB 4 -NumCpu 2 -DiskGB 100 -NetworkName 'VM Network'",
                  "",
                  "# Configure VM settings",
                  "Get-VM 'WebServer' | Set-VM -MemoryGB 8 -NumCpu 4",
                  "Get-VM 'WebServer' | Get-NetworkAdapter | Set-NetworkAdapter -NetworkName 'Production' -Type Vmxnet3",
                  "",
                  "# Add virtual disk",
                  "New-HardDisk -VM 'WebServer' -CapacityGB 50 -StorageFormat Thin"
                ]
              },
              {
                title: "VM Customization",
                description: "Customizing VM settings for specific requirements",
                notes: [
                  "Create customization specification",
                  "Configure network settings",
                  "Set computer name",
                  "Configure domain join",
                  "Set administrator password",
                  "Configure time zone",
                  "Apply customization"
                ],
                commands: [
                  "# Create customization spec",
                  "New-OSCustomizationSpec -Name 'Windows2019' -OSType Windows -Type Persistent",
                  "Get-OSCustomizationSpec 'Windows2019' | Set-OSCustomizationNicMapping -IpMode UseStaticIP -IpAddress '192.168.1.100' -SubnetMask '255.255.255.0' -DefaultGateway '192.168.1.1' -Dns '8.8.8.8'",
                  "",
                  "# Apply customization",
                  "Get-VM 'WebServer' | Set-VM -OSCustomizationSpec 'Windows2019'"
                ]
              }
            ],
            examples: [
              {
                title: "Virtual Machine Configuration",
                description: "Typical VM configuration for a web server:",
                code: `
Web Server VM Configuration
├── Hardware
│   ├── CPU: 4 vCPUs
│   ├── Memory: 8GB
│   └── Disks
│       ├── System: 100GB (Thin)
│       └── Data: 50GB (Thin)
├── Network
│   ├── Adapter: VMXNET3
│   └── Port Group: Production
├── Guest OS
│   ├── Windows Server 2019
│   └── VMware Tools: Latest
└── Features
    ├── vMotion: Enabled
    ├── Fault Tolerance: Disabled
    └── DRS: Enabled`
              }
            ]
          },
          {
            id: 2,
            title: "VM Operations and Management",
            details: [
              "Power Operations: Starting, stopping, and suspending VMs",
              "Snapshots: Creating and managing VM snapshots",
              "Resource Management: Monitoring and adjusting VM resources",
              "VM Migration: Using vMotion and Storage vMotion",
              "Backup and Recovery: VM backup strategies and restore procedures",
              "Performance Monitoring: Tools and techniques for monitoring VM performance",
              "Troubleshooting: Common issues and resolution procedures"
            ],
            steps: [
              {
                title: "VM Snapshot Management",
                description: "Managing VM snapshots effectively",
                notes: [
                  "Create snapshot before major changes",
                  "Document snapshot purpose",
                  "Monitor snapshot size",
                  "Delete snapshots when no longer needed",
                  "Consolidate snapshots regularly",
                  "Use snapshot manager for management",
                  "Consider impact on performance"
                ],
                commands: [
                  "# Create snapshot",
                  "New-Snapshot -VM 'WebServer' -Name 'Before Update' -Description 'Snapshot before applying Windows updates'",
                  "",
                  "# List snapshots",
                  "Get-Snapshot -VM 'WebServer'",
                  "",
                  "# Remove snapshot",
                  "Remove-Snapshot -Snapshot (Get-Snapshot -VM 'WebServer' -Name 'Before Update') -RemoveChildren",
                  "",
                  "# Consolidate snapshots",
                  "Get-VM 'WebServer' | Consolidate-VMDisks"
                ]
              },
              {
                title: "VM Migration",
                description: "Migrating VMs between hosts and storage",
                notes: [
                  "Verify compatibility",
                  "Check resource availability",
                  "Plan maintenance window",
                  "Execute migration",
                  "Verify VM status",
                  "Update documentation",
                  "Monitor performance"
                ],
                commands: [
                  "# Perform vMotion",
                  "Move-VM -VM 'WebServer' -Destination (Get-VMHost 'esxi02')",
                  "",
                  "# Perform Storage vMotion",
                  "Move-VM -VM 'WebServer' -Datastore (Get-Datastore 'datastore2')",
                  "",
                  "# Perform combined migration",
                  "Move-VM -VM 'WebServer' -Destination (Get-VMHost 'esxi02') -Datastore (Get-Datastore 'datastore2')"
                ]
              }
            ],
            examples: [
              {
                title: "VM Snapshot Hierarchy",
                description: "Typical snapshot structure:",
                code: `
VM Snapshots
├── Base VM State
├── Snapshot 1 (Before Update)
│   ├── Snapshot 1.1 (Before Security Patch)
│   └── Snapshot 1.2 (After Security Patch)
└── Snapshot 2 (Before Application Update)
    └── Snapshot 2.1 (After Application Update)`
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Virtual Machine Templates",
        summary: "Master the creation and management of VM templates for efficient deployment, including customization and version control.",
        topics: [
          {
            id: 1,
            title: "Template Management",
            details: [
              "Template Creation: Converting VMs to templates and managing template versions",
              "Template Customization: Using customization specifications for automated deployment",
              "Template Storage: Organizing and managing template storage",
              "Template Updates: Maintaining and updating templates",
              "Template Deployment: Deploying VMs from templates",
              "Template Security: Implementing security best practices",
              "Template Documentation: Maintaining template documentation and version history"
            ],
            steps: [
              {
                title: "Creating and Managing Templates",
                description: "Process for creating and maintaining templates",
                notes: [
                  "Prepare source VM",
                  "Install and update OS",
                  "Install applications",
                  "Configure settings",
                  "Convert to template",
                  "Create customization spec",
                  "Document template"
                ],
                commands: [
                  "# Convert VM to template",
                  "Set-VM -VM 'Windows2019' -ToTemplate",
                  "",
                  "# Convert template back to VM",
                  "Set-Template -Template 'Windows2019' -ToVM",
                  "",
                  "# Deploy from template",
                  "New-VM -Name 'NewServer' -Template 'Windows2019' -VMHost 'esxi01' -Datastore 'datastore1' -OSCustomizationSpec 'Windows2019'",
                  "",
                  "# Clone template",
                  "New-Template -Name 'Windows2019-v2' -Template 'Windows2019' -VMHost 'esxi01' -Datastore 'datastore1'"
                ]
              },
              {
                title: "Template Version Control",
                description: "Managing template versions and updates",
                notes: [
                  "Create version naming convention",
                  "Document changes per version",
                  "Maintain version history",
                  "Test new versions",
                  "Update deployment procedures",
                  "Archive old versions",
                  "Update documentation"
                ],
                commands: [
                  "# List templates",
                  "Get-Template | Select-Object Name, Version, LastModified",
                  "",
                  "# Update template",
                  "Set-Template -Template 'Windows2019' -ToVM",
                  "Update-Template -VM 'Windows2019' -Name 'Windows2019-v2'",
                  "Set-VM -VM 'Windows2019-v2' -ToTemplate",
                  "",
                  "# Remove old template",
                  "Remove-Template -Template 'Windows2019' -DeletePermanently"
                ]
              }
            ],
            examples: [
              {
                title: "Template Version Structure",
                description: "Typical template versioning:",
                code: `
Template Versions
├── Windows2019
│   ├── v1.0 (Base)
│   ├── v1.1 (Security Updates)
│   └── v1.2 (Application Updates)
├── Windows2019-SQL
│   ├── v1.0 (Base + SQL)
│   └── v1.1 (SQL Updates)
└── Windows2019-IIS
    ├── v1.0 (Base + IIS)
    └── v1.1 (IIS Updates)`
              }
            ]
          },
          {
            id: 2,
            title: "Guest OS Customization",
            details: [
              "Customization Specifications: Creating and managing customization specs",
              "Sysprep Integration: Using Sysprep for Windows customization",
              "Linux Customization: Customizing Linux guest operating systems",
              "Network Configuration: IP addressing and network settings",
              "Domain Join: Automated domain joining for Windows VMs",
              "Security Settings: Implementing security policies during customization",
              "Application Deployment: Automated application installation"
            ],
            steps: [
              {
                title: "Windows Customization",
                description: "Customizing Windows guest operating systems",
                notes: [
                  "Prepare Sysprep files",
                  "Create customization spec",
                  "Configure network settings",
                  "Set domain join options",
                  "Configure security settings",
                  "Add application deployment",
                  "Test customization"
                ],
                commands: [
                  "# Create Windows customization spec",
                  "New-OSCustomizationSpec -Name 'Windows2019' -OSType Windows -Type Persistent",
                  "",
                  "# Configure network settings",
                  "Get-OSCustomizationSpec 'Windows2019' | Set-OSCustomizationNicMapping -IpMode UseStaticIP -IpAddress '192.168.1.100' -SubnetMask '255.255.255.0' -DefaultGateway '192.168.1.1' -Dns '8.8.8.8'",
                  "",
                  "# Configure domain join",
                  "Get-OSCustomizationSpec 'Windows2019' | Set-OSCustomizationDomain -Domain 'company.local' -DomainUsername 'administrator' -DomainPassword 'password'",
                  "",
                  "# Apply customization",
                  "Get-VM 'NewServer' | Set-VM -OSCustomizationSpec 'Windows2019'"
                ]
              },
              {
                title: "Linux Customization",
                description: "Customizing Linux guest operating systems",
                notes: [
                  "Create customization spec",
                  "Configure network settings",
                  "Set hostname",
                  "Configure timezone",
                  "Set root password",
                  "Add SSH keys",
                  "Configure first boot script"
                ],
                commands: [
                  "# Create Linux customization spec",
                  "New-OSCustomizationSpec -Name 'RHEL8' -OSType Linux -Type Persistent",
                  "",
                  "# Configure network settings",
                  "Get-OSCustomizationSpec 'RHEL8' | Set-OSCustomizationNicMapping -IpMode UseStaticIP -IpAddress '192.168.1.101' -SubnetMask '255.255.255.0' -DefaultGateway '192.168.1.1' -Dns '8.8.8.8'",
                  "",
                  "# Configure hostname",
                  "Get-OSCustomizationSpec 'RHEL8' | Set-OSCustomizationHostName -HostName 'webserver01'",
                  "",
                  "# Apply customization",
                  "Get-VM 'NewLinuxServer' | Set-VM -OSCustomizationSpec 'RHEL8'"
                ]
              }
            ],
            examples: [
              {
                title: "Customization Specification",
                description: "Typical customization spec structure:",
                code: `
Windows Customization Spec
├── General
│   ├── Name: Windows2019
│   └── Type: Persistent
├── Network
│   ├── IP Mode: Static
│   ├── IP Address: 192.168.1.100
│   └── DNS: 8.8.8.8
├── Domain
│   ├── Join Domain: company.local
│   └── OU: Servers/Web
└── Security
    ├── Password: ********
    └── Encryption: Enabled`
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Storage and Networking",
    modules: [
      {
        id: 1,
        title: "vSphere Storage",
        summary: "Master storage management in vSphere environments, including VMFS, NFS, vSAN, and storage policies.",
        topics: [
          {
            id: 1,
            title: "Storage Concepts and Types",
            details: [
              "VMFS (Virtual Machine File System): High-performance clustered file system for virtual machines",
              "NFS (Network File System): Network-based storage for virtual machines",
              "vSAN (Virtual SAN): Software-defined storage solution integrated with vSphere",
              "Raw Device Mapping (RDM): Direct access to physical storage devices",
              "Storage Policies: Define storage requirements and capabilities",
              "Storage DRS: Automated storage load balancing and initial placement",
              "Storage I/O Control: Quality of service for storage resources"
            ],
            steps: [
              {
                title: "Storage Architecture Planning",
                description: "Plan and design your storage architecture",
                notes: [
                  "Assess storage requirements and performance needs",
                  "Choose appropriate storage types for different workloads",
                  "Plan for redundancy and high availability",
                  "Consider scalability and future growth",
                  "Design storage policies and profiles",
                  "Plan for backup and disaster recovery",
                  "Document storage architecture"
                ]
              },
              {
                title: "Storage Performance Optimization",
                description: "Optimize storage performance for your environment",
                notes: [
                  "Use appropriate storage types for different workloads",
                  "Implement storage policies and profiles",
                  "Configure multipathing for redundancy and performance",
                  "Monitor storage performance metrics",
                  "Use storage DRS for load balancing",
                  "Implement storage I/O control",
                  "Regular performance tuning and optimization"
                ]
              }
            ],
            tips: [
              "Always use multipathing for critical storage connections",
              "Implement storage DRS for better resource utilization",
              "Monitor storage latency and IOPS regularly",
              "Use storage policies to enforce performance requirements",
              "Consider vSAN for simplified storage management",
              "Regularly review and update storage capacity",
              "Document storage architecture and changes"
            ]
          },
          {
            id: 2,
            title: "Storage Configuration and Management",
            details: [
              "Datastore Management: Creating, expanding, and managing VMFS and NFS datastores",
              "Storage Policies: Creating and managing storage policies for different workloads",
              "Multipathing: Configuring and managing storage multipathing for redundancy",
              "Storage DRS: Setting up and managing automated storage load balancing",
              "Storage I/O Control: Implementing quality of service for storage resources",
              "Storage Monitoring: Tools and techniques for monitoring storage performance",
              "Storage Maintenance: Regular maintenance tasks and best practices"
            ],
            steps: [
              {
                title: "VMFS Datastore Management",
                description: "Manage VMFS datastores effectively",
                notes: [
                  "Create new VMFS datastores",
                  "Expand existing datastores",
                  "Manage datastore clusters",
                  "Configure storage DRS",
                  "Monitor datastore usage",
                  "Perform maintenance tasks",
                  "Document datastore configuration"
                ],
                commands: [
                  "# Create new VMFS datastore",
                  "New-Datastore -VMHost 'esxi01' -Name 'datastore1' -Path '/vmfs/devices/disks/naa.xxx' -FileSystem VMFS5",
                  "",
                  "# Expand VMFS datastore",
                  "Get-Datastore 'datastore1' | Expand-Datastore -CapacityGB 100",
                  "",
                  "# Create datastore cluster",
                  "New-DatastoreCluster -Name 'Tier1_Storage' -Location (Get-Datacenter 'DC1')",
                  "",
                  "# Add datastore to cluster",
                  "Add-Datastore -Datastore 'datastore1' -DatastoreCluster 'Tier1_Storage'"
                ]
              },
              {
                title: "Storage Policy Management",
                description: "Create and manage storage policies",
                notes: [
                  "Define storage requirements",
                  "Create storage policies",
                  "Apply policies to VMs",
                  "Monitor policy compliance",
                  "Update policies as needed",
                  "Document policy configuration",
                  "Regular policy review"
                ],
                commands: [
                  "# Create storage policy",
                  "New-SpbmStoragePolicy -Name 'Gold_Policy' -Description 'High Performance Storage'",
                  "",
                  "# Apply policy to VM",
                  "Get-VM 'WebServer' | Set-VM -StoragePolicy (Get-SpbmStoragePolicy 'Gold_Policy')",
                  "",
                  "# Check policy compliance",
                  "Get-SpbmCompliance -Entity (Get-VM 'WebServer')"
                ]
              }
            ],
            examples: [
              {
                title: "Storage Policy Configuration",
                description: "Example storage policy configuration:",
                code: `
Storage Policy: Gold_Policy
├── Performance
│   ├── IOPS Limit: 10000
│   └── Latency: < 1ms
├── Availability
│   ├── RAID Level: RAID 10
│   └── Replication: Enabled
├── Data Services
│   ├── Encryption: Enabled
│   └── Compression: Enabled
└── Tags
    ├── Environment: Production
    └── SLA: 99.99%`
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "vSphere Networking",
        summary: "Configure and manage virtual networking in vSphere, including standard and distributed virtual switches.",
        topics: [
          {
            id: 1,
            title: "Virtual Networking Concepts",
            details: [
              "Virtual Switches: Standard and distributed virtual switches for network connectivity",
              "Port Groups: Logical groupings of ports with common configuration",
              "VLANs: Virtual LAN configuration for network segmentation",
              "NIC Teaming: Load balancing and failover for network adapters",
              "Network I/O Control: Quality of service for network resources",
              "Network Security: Security policies and features for virtual networks",
              "Network Monitoring: Tools and techniques for monitoring network performance"
            ],
            steps: [
              {
                title: "Network Architecture Design",
                description: "Design a robust virtual network architecture",
                notes: [
                  "Plan network segmentation",
                  "Design VLAN structure",
                  "Configure port groups",
                  "Set up NIC teaming",
                  "Implement security policies",
                  "Plan for redundancy",
                  "Document network design"
                ]
              },
              {
                title: "Network Security Implementation",
                description: "Implement security in virtual networks",
                notes: [
                  "Configure port security",
                  "Set up VLANs",
                  "Implement traffic filtering",
                  "Configure MAC address changes",
                  "Set up forged transmits",
                  "Implement promiscuous mode",
                  "Document security policies"
                ]
              }
            ],
            tips: [
              "Use distributed virtual switches for large environments",
              "Implement proper VLAN segmentation",
              "Configure NIC teaming for redundancy",
              "Monitor network performance regularly",
              "Document network changes",
              "Use network I/O control for critical workloads",
              "Regular security audits"
            ]
          },
          {
            id: 2,
            title: "Advanced Networking Features",
            details: [
              "Distributed Virtual Switches: Advanced networking features for large environments",
              "Network Virtualization: NSX integration for advanced networking capabilities",
              "Network Monitoring: Advanced monitoring and troubleshooting tools",
              "Network Security: Advanced security features and policies",
              "Network Performance: Optimization techniques and best practices",
              "Network Automation: Automated network configuration and management",
              "Network Documentation: Best practices for network documentation"
            ],
            steps: [
              {
                title: "Distributed Virtual Switch Configuration",
                description: "Configure and manage distributed virtual switches",
                notes: [
                  "Create distributed virtual switch",
                  "Configure uplink port groups",
                  "Set up port groups",
                  "Configure VLANs",
                  "Implement security policies",
                  "Set up monitoring",
                  "Document configuration"
                ],
                commands: [
                  "# Create distributed virtual switch",
                  "New-VDSwitch -Name 'DVS01' -Location (Get-Datacenter 'DC1') -NumUplinkPorts 4",
                  "",
                  "# Add hosts to DVS",
                  "Add-VDSwitchVMHost -VDSwitch 'DVS01' -VMHost 'esxi01'",
                  "",
                  "# Create port group",
                  "New-VDPortgroup -Name 'Production' -VDSwitch 'DVS01' -VlanId 200",
                  "",
                  "# Configure security policy",
                  "Get-VDPortgroup 'Production' | Set-VDSecurityPolicy -AllowPromiscuous $false -ForgedTransmits $false -MacChanges $false"
                ]
              },
              {
                title: "Network Performance Optimization",
                description: "Optimize network performance",
                notes: [
                  "Configure network I/O control",
                  "Optimize NIC teaming",
                  "Implement traffic shaping",
                  "Monitor network performance",
                  "Tune buffer settings",
                  "Update network drivers",
                  "Document optimizations"
                ],
                commands: [
                  "# Configure network I/O control",
                  "Get-VDSwitch 'DVS01' | Set-VDNetworkResourcePool -Name 'Management' -Shares 100 -LimitMbps 1000",
                  "",
                  "# Configure traffic shaping",
                  "Get-VDPortgroup 'Production' | Set-VDTrafficShapingPolicy -Enabled $true -AverageBandwidth 1000 -PeakBandwidth 2000 -BurstSize 100",
                  "",
                  "# Monitor network performance",
                  "Get-VDPortgroup 'Production' | Get-VDPort | Get-Stat -Stat rx_bytes,tx_bytes -IntervalSecs 5"
                ]
              }
            ],
            examples: [
              {
                title: "Distributed Virtual Switch Configuration",
                description: "Example DVS configuration:",
                code: `
Distributed Virtual Switch: DVS01
├── Uplink Ports
│   ├── Uplink1: vmnic0
│   ├── Uplink2: vmnic1
│   ├── Uplink3: vmnic2
│   └── Uplink4: vmnic3
├── Port Groups
│   ├── Management
│   │   ├── VLAN: 100
│   │   └── Security: Restricted
│   ├── Production
│   │   ├── VLAN: 200
│   │   └── Security: Standard
│   └── Storage
│       ├── VLAN: 300
│       └── Security: Restricted
└── Policies
    ├── Security
    ├── Traffic Shaping
    └── Teaming and Failover`
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "vSAN Design and Operations",
        summary: "Comprehensive guide to designing, deploying, and managing vSAN clusters, including storage policies, performance tuning, and troubleshooting.",
        topics: [
          {
            id: 1,
            title: "vSAN Architecture and Components",
            details: [
              "Clustered storage built into ESXi hosts",
              "Disk groups with cache and capacity tiers (hybrid or all-flash)",
              "Object-based storage and witness components",
              "Deduplication, compression, and erasure coding",
              "Fault domains and stretched-cluster considerations",
              "vSAN networking requirements (10 GbE minimum, dedicated VLAN)"
            ],
            steps: [
              {
                title: "Designing a vSAN Cluster",
                description: "Plan hardware, network, and storage policies before enablement.",
                notes: [
                  "Use vSAN ReadyNodes for predictable performance and support.",
                  "Size the cache tier to 10 % of the usable capacity for all-flash.",
                  "Create at least one disk group per host (1 × cache, 4–7 × capacity).",
                  "Plan fault domains to map to racks or chassis.",
                  "Reserve witness resources for stretched clusters.",
                  "Document design choices and validation results."
                ]
              }
            ],
            tips: [
              "Use the VMware vSAN Sizer and TCO Calculator during planning.",
              "Keep firmware consistent across all hosts to avoid resync storms.",
              "Enable proactive rebalancing to distribute components evenly.",
              "Monitor resync traffic after policy or capacity changes."
            ]
          },
          {
            id: 2,
            title: "vSAN Operations and Monitoring",
            details: [
              "Using Skyline Health & Performance Service",
              "Capacity dashboards and reclaiming space",
              "Handling disk/deduplication failures and resync states",
              "Upgrade workflows with vSphere Lifecycle Manager",
              "CLI tools: esxcli vsan, RVC commands"
            ],
            exercises: [
              {
                title: "Simulate Disk Failure and Recovery",
                objective: "Validate vSAN resilience and remediation procedures.",
                tasks: [
                  "Identify a capacity disk and place it in maintenance mode with 'Ensure accessibility'.",
                  "Observe component resync and capacity redistribution.",
                  "Replace the failed disk and trigger a proactive rebalance.",
                  "Verify object compliance and health status turns green."
                ],
                validation: [
                  "All objects compliant after remediation.",
                  "vSAN Health reports no critical alerts."
                ]
              }
            ],
            tips: [
              "Schedule regular health checks and capacity trend reviews.",
              "Use 'Object Repair Timer' to control automatic rebuild timing.",
              "Keep at least 25 % free capacity for rebuild operations."
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Network Automation with PowerCLI & NSX",
        summary: "Automate vSphere networking tasks using PowerCLI and gain an administrator's overview of VMware NSX Data Center.",
        topics: [
          {
            id: 1,
            title: "PowerCLI Networking Automation",
            details: [
              "Connecting to multiple vCenters in script-blocks",
              "Bulk port-group creation and standardisation",
              "Automated VLAN assignment from CSV input",
              "Export / import vSwitch configuration for DR",
              "Change tracking and reporting"
            ],
            steps: [
              {
                title: "Batch Port-Group Provisioning",
                description: "Create 50 VLAN backed port-groups with one command.",
                commands: [
                  "$vlans = Import-Csv vlans.csv",
                  "foreach ($row in $vlans) {",
                  "  New-VirtualPortGroup -VirtualSwitch (Get-VirtualSwitch -VMHost esxi01 -Name vSwitch0) -Name $row.Name -VLanId $row.VLAN",
                  "}"
                ],
                notes: [
                  "Always use ‑WhatIf during initial test runs.",
                  "Log actions to a transcript for audit purposes."
                ]
              }
            ],
            tips: [
              "Store credentials securely in Windows Credential Manager.",
              "Version-control your scripts in Git and tag tested releases."
            ]
          },
          {
            id: 2,
            title: "NSX Primer for vSphere Admins",
            details: [
              "NSX Manager, Policy UI and API",
              "Transport Zones, TEP and VLAN/VXLAN encapsulation",
              "Logical segments and Tier-0/Tier-1 gateways",
              "Distributed Firewall for micro-segmentation",
              "Traceflow, Port-Mirroring and Live Traffic Analysis"
            ],
            steps: [
              {
                title: "NSX Deployment High-level Steps",
                description: "From OVA deployment to first logical segment.",
                notes: [
                  "Deploy NSX Manager OVA and perform initial configuration.",
                  "Register NSX with vCenter and compute managers.",
                  "Create IP pools for TEP addresses.",
                  "Convert vDS to NVDS or create N-VDS.",
                  "Create a segment and attach a test VM."
                ]
              }
            ],
            tips: [
              "Start with application-centric micro-segmentation projects for quick ROI.",
              "Leverage Traceflow to visualise packet path during troubleshooting.",
              "Use NSX Upgrade Evaluator before upgrading production."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Advanced vSphere Features",
    modules: [
      {
        id: 1,
        title: "High Availability and DRS",
        summary: "Implement and manage high availability and resource optimization in vSphere environments.",
        topics: [
          {
            id: 1,
            title: "vSphere High Availability",
            details: [
              "HA Architecture: Components and operation of vSphere HA",
              "HA Configuration: Setting up and configuring HA clusters",
              "Admission Control: Managing resource availability and failover capacity",
              "HA Monitoring: Monitoring and managing HA events",
              "HA Troubleshooting: Common issues and resolution procedures",
              "HA Best Practices: Implementation and maintenance best practices",
              "HA Documentation: Documentation requirements and procedures"
            ],
            steps: [
              {
                title: "HA Cluster Configuration",
                description: "Configure and manage HA clusters",
                notes: [
                  "Enable HA on cluster",
                  "Configure admission control",
                  "Set up monitoring",
                  "Configure VM restart priority",
                  "Set up host monitoring",
                  "Configure datastore heartbeating",
                  "Test HA functionality"
                ]
              }
            ],
            tips: [
              "Always test HA failover scenarios",
              "Monitor HA events regularly",
              "Configure appropriate VM restart priorities",
              "Use admission control for resource management",
              "Document HA configuration",
              "Regular HA testing",
              "Monitor cluster resources"
            ]
          },
          {
            id: 2,
            title: "Distributed Resource Scheduler",
            details: [
              "DRS Architecture: Components and operation of DRS",
              "DRS Configuration: Setting up and configuring DRS clusters",
              "Resource Pools: Managing resource allocation and sharing",
              "DRS Rules: Creating and managing DRS rules",
              "DRS Monitoring: Monitoring and managing DRS operations",
              "DRS Troubleshooting: Common issues and resolution procedures",
              "DRS Best Practices: Implementation and maintenance best practices"
            ],
            steps: [
              {
                title: "DRS Cluster Configuration",
                description: "Configure and manage DRS clusters",
                notes: [
                  "Enable DRS on cluster",
                  "Configure automation level",
                  "Set up resource pools",
                  "Create DRS rules",
                  "Configure migration threshold",
                  "Set up monitoring",
                  "Test DRS functionality"
                ],
                commands: [
                  "# Enable DRS on cluster",
                  "Get-Cluster 'Cluster01' | Set-Cluster -DrsEnabled $true",
                  "",
                  "# Configure automation level",
                  "Get-Cluster 'Cluster01' | Set-Cluster -DrsAutomationLevel FullyAutomated",
                  "",
                  "# Create resource pool",
                  "New-ResourcePool -Name 'Production' -Location (Get-Cluster 'Cluster01') -CpuExpandableReservation $true -MemExpandableReservation $true",
                  "",
                  "# Create DRS rule",
                  "New-DrsRule -Cluster 'Cluster01' -Name 'KeepTogether' -Enabled $true -KeepTogether $true -VM (Get-VM 'WebServer','AppServer')"
                ]
              },
              {
                title: "DRS Monitoring and Optimization",
                description: "Monitor and optimize DRS operations",
                notes: [
                  "Monitor DRS recommendations",
                  "Check resource usage",
                  "Review DRS rules",
                  "Optimize resource pools",
                  "Adjust automation level",
                  "Monitor migration history",
                  "Document DRS status"
                ],
                commands: [
                  "# Check DRS recommendations",
                  "Get-Cluster 'Cluster01' | Get-DrsRecommendation",
                  "",
                  "# Monitor resource usage",
                  "Get-Cluster 'Cluster01' | Get-ResourcePool | Get-Stat -Stat cpu.usage.average,mem.usage.average -IntervalSecs 5",
                  "",
                  "# Check DRS rules",
                  "Get-Cluster 'Cluster01' | Get-DrsRule"
                ]
              }
            ],
            examples: [
              {
                title: "DRS Cluster Configuration",
                description: "Typical DRS cluster configuration:",
                code: `
DRS Cluster: Cluster01
├── Settings
│   ├── Automation Level: Fully Automated
│   ├── Migration Threshold: 3
│   └── Predictive DRS: Enabled
├── Resource Pools
│   ├── Production
│   │   ├── CPU: 8 vCPUs
│   │   └── Memory: 32GB
│   ├── Development
│   │   ├── CPU: 4 vCPUs
│   │   └── Memory: 16GB
│   └── Test
│       ├── CPU: 2 vCPUs
│       └── Memory: 8GB
└── DRS Rules
    ├── KeepTogether: WebServer, AppServer
    ├── Separate: DB1, DB2
    └── VM-Host: WebServer -> esxi01`
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "vSphere Security",
        summary: "Implement comprehensive security measures in vSphere environments, including hardening, encryption, and access control.",
        topics: [
          {
            id: 1,
            title: "Security Hardening",
            details: [
              "Security Profiles: Implementing security profiles and lockdown mode",
              "Certificate Management: Managing SSL certificates and trust",
              "Access Control: Implementing role-based access control",
              "Security Compliance: Meeting compliance requirements",
              "Security Monitoring: Monitoring security events and alerts",
              "Security Updates: Managing security patches and updates",
              "Security Documentation: Maintaining security documentation"
            ],
            steps: [
              {
                title: "Security Hardening Implementation",
                description: "Implement security hardening measures",
                notes: [
                  "Apply security profiles",
                  "Configure lockdown mode",
                  "Manage certificates",
                  "Set up access control",
                  "Implement compliance checks",
                  "Configure monitoring",
                  "Document security measures"
                ]
              }
            ],
            tips: [
              "Regular security audits",
              "Keep certificates up to date",
              "Implement least privilege access",
              "Monitor security events",
              "Regular security updates",
              "Document security policies",
              "Regular compliance checks"
            ]
          },
          {
            id: 2,
            title: "Advanced Security Features",
            details: [
              "vSphere Encryption: Implementing encryption for VMs and storage",
              "Secure Boot: Configuring secure boot for ESXi hosts",
              "TPM: Trusted Platform Module configuration",
              "Network Security: Advanced network security features",
              "Security Monitoring: Advanced security monitoring tools",
              "Security Automation: Automated security management",
              "Security Documentation: Advanced security documentation"
            ],
            steps: [
              {
                title: "Encryption Implementation",
                description: "Implement encryption features",
                notes: [
                  "Set up KMS",
                  "Configure encryption policies",
                  "Enable VM encryption",
                  "Encrypt storage",
                  "Manage keys",
                  "Monitor encryption",
                  "Document encryption"
                ],
                commands: [
                  "# Configure KMS",
                  "Set-VMHostKmsServer -VMHost 'esxi01' -Server 'kms.company.com' -Port 5696",
                  "",
                  "# Enable VM encryption",
                  "Get-VM 'WebServer' | Set-VM -Encrypt $true",
                  "",
                  "# Create encryption policy",
                  "New-SpbmStoragePolicy -Name 'Encrypted_Policy' -Description 'Encrypted Storage Policy'",
                  "",
                  "# Apply encryption policy",
                  "Get-VM 'WebServer' | Set-VM -StoragePolicy (Get-SpbmStoragePolicy 'Encrypted_Policy')"
                ]
              },
              {
                title: "Security Feature Management",
                description: "Manage advanced security features",
                notes: [
                  "Configure secure boot",
                  "Set up TPM",
                  "Implement network security",
                  "Configure monitoring",
                  "Set up automation",
                  "Review security logs",
                  "Document security features"
                ],
                commands: [
                  "# Configure secure boot",
                  "Get-VMHost 'esxi01' | Set-VMHostSecureBoot -Enabled $true",
                  "",
                  "# Check TPM status",
                  "Get-VMHost 'esxi01' | Get-VMHostTpm",
                  "",
                  "# Configure network security",
                  "Get-VDSwitch 'DVS01' | Set-VDSecurityPolicy -AllowPromiscuous $false -ForgedTransmits $false -MacChanges $false"
                ]
              }
            ],
            examples: [
              {
                title: "Advanced Security Configuration",
                description: "Advanced security features configuration:",
                code: `
Advanced Security
├── Encryption
│   ├── KMS Server: kms.company.com
│   ├── VM Encryption: Enabled
│   └── Storage Encryption: Enabled
├── Secure Boot
│   ├── Status: Enabled
│   └── Keys: VMware Keys
├── TPM
│   ├── Status: Enabled
│   └── Version: 2.0
└── Network Security
    ├── Port Security
    ├── Traffic Filtering
    └── MAC Address Changes`
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: "Performance Monitoring & Optimization",
        summary: "Learn to monitor, analyse, and optimise CPU, memory, storage, and network performance in vSphere.",
        topics: [
          {
            id: 1,
            title: "vSphere Performance Tools",
            details: [
              "vCenter Performance Charts and Advanced Metrics",
              "esxtop & resxtop for real-time host statistics",
              "vSAN Observer and vscsiStats",
              "vRealize Operations Manager dashboards",
              "Alarms, Alerts, and Event forwarding to Log Insight"
            ],
            steps: [
              {
                title: "Analyse Host CPU Contention with esxtop",
                description: "Identify %RDY spikes and co-stop issues.",
                commands: [
                  "esxtop",
                  "Press c → Look at %RDY and %CSTP columns",
                  "Press V to sort VMs by CPU ready time"
                ],
                notes: [
                  "%RDY > 10 usually indicates CPU contention.",
                  "Reduce vCPU count or enable DRS to migrate workload."
                ]
              }
            ],
            tips: [
              "Use colour high-lights in esxtop (press V and f) for easier reading.",
              "Enable hyper-threading sharing = None for latency sensitive VMs."
            ]
          },
          {
            id: 2,
            title: "Capacity & Rightsizing",
            details: [
              "Understand allocation vs usage",
              "Use vROps Capacity Reclamation reports",
              "Thin provisioning and storage over-commitment",
              "VM Tools for guest metrics",
              "Advanced CPU & Memory reservations"
            ],
            exercises: [
              {
                title: "Rightsize an Over-Provisioned VM",
                objective: "Reduce resource wastage without impacting performance.",
                tasks: [
                  "Identify a VM with low CPU utilisation (<10%)",
                  "Hot-remove half of its vCPUs",
                  "Monitor performance counters for 24 hours",
                  "Document results"
                ],
                validation: [
                  "vCPU ready time decreased",
                  "No application performance degradation"
                ]
              }
            ],
            tips: [
              "Rightsize during maintenance windows.",
              "Document changes for audit."
            ]
          }
        ]
      },
      {
        id: 4,
        title: "Backup & Disaster Recovery",
        summary: "Design resilient backup strategies and implement disaster recovery solutions using VMware native and third-party tools.",
        topics: [
          {
            id: 1,
            title: "Backup Strategies & Tools",
            details: [
              "VMware Data Protection vs third-party solutions (Veeam, Cohesity, etc.)",
              "Image level vs guest level backups",
              "Change Block Tracking (CBT) mechanism",
              "Backup windows and performance considerations",
              "Off-site and air-gapped backups"
            ],
            steps: [
              {
                title: "Create Image-Level Backup Job (Veeam example)",
                description: "Configure backup proxy, repository, and schedule.",
                notes: [
                  "Enable CBT for incremental backups",
                  "Configure application-aware processing for VSS",
                  "Use synthetic full backups to reduce I/O",
                  "Test restores regularly"
                ]
              }
            ],
            tips: [
              "Follow the 3-2-1 rule (3 copies, 2 media, 1 off-site).",
              "Encrypt backups at rest and in transit.",
              "Test restore capability quarterly."
            ]
          },
          {
            id: 2,
            title: "Site Recovery Manager (SRM) & Replication",
            details: [
              "vSphere Replication architecture and RPO considerations",
              "SRM protection groups and recovery plans",
              "Array-based replication vs vSphere Replication",
              "Automated failover and failback workflows",
              "Network mapping and IP customisation",
              "Planned migration vs disaster recovery"
            ],
            exercises: [
              {
                title: "Configure a Test Recovery Plan",
                objective: "Validate SRM recovery steps without impacting production.",
                tasks: [
                  "Create a protection group for tier-1 VMs",
                  "Build a recovery plan and run a test failover",
                  "Validate application accessibility in isolated network",
                  "Run cleanup task after test",
                  "Review SRM history reports"
                ],
                validation: [
                  "Test failover completed without errors",
                  "Applications accessible during test",
                  "SRM reports archived"
                ]
              }
            ],
            tips: [
              "Keep recovery plans updated after infrastructure changes.",
              "Use bulk IP customization rules for large environments.",
              "Automate SRM tests via PowerCLI."
            ]
          }
        ]
      }
    ]
  }
] 