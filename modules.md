# ✅ VMware vSphere Training Modules

## 🟦 Module 1: Course Introduction
- **Introductions and course logistics**  
  → Set expectations, introduce trainers and participants, overview of the 4-day schedule.  
- **Course objectives**  
  → Discuss what participants will learn, lab goals, and how they'll apply these skills in real-world environments.

---

## 🟦 Module 2: vSphere and Virtualization Overview
- **Explain basic virtualization concepts**  
  → Teach the difference between physical and virtual machines; concepts like hypervisors and abstraction.
- **Describe how vSphere fits in the software-defined data center and the cloud infrastructure**  
  → Discuss the role of vSphere in modern IT, data centers, and hybrid cloud.
- **Recognize the user interfaces for accessing vSphere**  
  → Overview of DCUI, VMware Host Client, vSphere Web Client.
- **Explain how vSphere interacts with CPUs, memory, networks, storage, and GPUs**  
  → Introduce how vSphere manages and allocates hardware resources.

---

## 🟦 Module 3: Installing and Configuring ESXi
- **Install an ESXi host**  
  → Guide on installing ESXi 8.0 on a physical or virtual system.
- **Recognize ESXi user account best practices**  
  → Discuss root access, password policies, and adding secure users.
- **Configure the ESXi host settings using the DCUI and VMware Host Client**  
  → Walkthrough initial configuration tasks, such as IP, hostname, DNS.

---

## 🟩 Module 4: Deploying and Configuring vCenter
- **Recognize ESXi hosts communication with vCenter**  
  → Explain the centralized management architecture.
- **Deploy vCenter Server Appliance**  
  → Hands-on lab on VCSA deployment and setup.
- **Configure vCenter settings**  
  → Time, DNS, backup, and certificate options.
- **Use the vSphere Client to add and manage license keys**  
  → Enter and manage evaluation or full license keys.
- **Create and organize vCenter inventory objects**  
  → Add datacenters, clusters, folders, resource pools.
- **Recognize the rules for applying vCenter permissions**  
  → Teach role-based access control (RBAC) and user/group mapping.
- **View vCenter logs and events**  
  → Use log files and events for auditing and troubleshooting.

---

## 🟩 Module 5: Configuring vSphere Networking
- **Configure and view standard switch configurations**  
  → Hands-on: create and assign vSwitches and port groups.
- **Configure and view distributed switch configurations**  
  → Introduction to vDS (vSphere Distributed Switch), setup via vCenter.
- **Recognize the difference between standard switches and distributed switches**  
  → Teach advantages, limitations, and use cases of both.
- **Explain how to set networking policies on standard and distributed switches**  
  → MAC address, promiscuous mode, traffic shaping.

---

## 🟧 Module 6: Configuring vSphere Storage
- **Recognize vSphere storage technologies**  
  → VMFS, NFS, iSCSI, vSAN — high-level overview.
- **Identify types of vSphere datastores**  
  → Hands-on: explore local and shared storage types.
- **Describe Fibre Channel components and addressing**  
  → Theory only, unless hardware is available.
- **Describe iSCSI components and addressing**  
  → Concepts of initiators, targets, IQNs.
- **Configure iSCSI storage on ESXi**  
  → Connect to software iSCSI target (e.g., FreeNAS).
- **Create and manage VMFS datastores**  
  → Partition disk and create a usable datastore.
- **Configure and manage NFS datastores**  
  → Mount NFS shares to ESXi host(s).

---

## 🟧 Module 7: Deploying Virtual Machines
- **Create and provision VMs**  
  → Deploy Windows/Linux VMs from ISO.
- **Explain the importance of VMware Tools**  
  → Show how Tools enable better performance and features.
- **Identify the files that make up a VM**  
  → VMDK, VMX, NVRAM, log files, snapshot files.
- **Recognize the components of a VM**  
  → vCPU, RAM, NICs, disks, PCI devices.
- **Navigate the vSphere Client and examine VM settings and options**  
  → Practical session using vSphere Web Client.
- **Modify VMs by dynamically increasing resources**  
  → Hot-add CPU/RAM if hardware allows.
- **Create VM templates and deploy VMs from the Clone VMs**  
  → Hands-on with templates and full/linked clones.
- **Create customization specifications for guest operating systems**  
  → Automate IP, hostname, domain settings during VM deployment.
- **Create local, published, and subscribed content libraries**  
  → Distribute VM templates and ISOs efficiently.
- **Deploy VMs from content libraries**  
  → Use stored templates or OVFs.
- **Manage multiple versions of VM templates in content libraries**  
  → Rollback, version control and tracking template changes.

---

## 🟥 Module 8: Managing Virtual Machines
- **Recognize the types of VM migrations**  
  → Explain vMotion, Storage vMotion, cross vCenter vMotion.
- **Migrate VMs using vSphere vMotion**  
  → Live migration without downtime.
- **Describe the role of Enhanced vMotion Compatibility (EVC)**  
  → Ensure vMotion compatibility across CPU generations.
- **Migrate VMs using vSphere Storage vMotion**  
  → Move VM disks between datastores.
- **Take a snapshot of a VM**  
  → Demonstrate snapshot creation and labeling.
- **Manage, consolidate, and delete snapshots**  
  → Understand snapshot tree and safe deletion.
- **Describe CPU and memory concepts in virtualization**  
  → vCPU to pCPU ratio, memory overcommitment, ballooning.

---

## 🟥 Module 9: Deploying and Configuring vSphere Clusters
- **Create a vSphere cluster with DRS and HA**  
  → Enable cluster-wide settings and add hosts.
- **View information about a vSphere cluster**  
  → Use Cluster Summary and Monitoring tabs.
- **Explain how DRS determines VM placement**  
  → Resource distribution and automation levels.
- **Recognize use cases for DRS settings**  
  → Performance tuning, balancing, maintenance mode.
- **Monitor a DRS cluster**  
  → Watch how VMs are moved automatically.
- **Describe how HA responds to failures**  
  → Host crash vs. VM crash – restart policies.
- **Configure network redundancy for HA**  
  → Best practices for NIC teaming and failover.
- **Recognize vSphere HA design considerations**  
  → Heartbeat datastores, isolation response.
- **Configure vSphere Fault Tolerance (FT)**  
  → Protect mission-critical VMs with real-time mirroring (theory/demonstration only if supported).

---

## 🟥 Module 10: Managing the vSphere Lifecycle
- **Enable vSphere Lifecycle Manager in a cluster**  
  → Centralize patching and updates.
- **Use vCenter Update Planner**  
  → Plan upgrades with prechecks.
- **Run upgrade prechecks and interoperability reports**  
  → Validate vCenter upgrades against ESXi versions.
- **Understand vSphere Lifecycle Manager (vLCM) features**  
  → Lifecycle management via image or baseline.
- **Differentiate managing hosts with baselines vs. images**  
  → Introduce declarative image-based management.
- **Update hosts using baselines**  
  → Apply patches, extensions.
- **Validate ESXi host compliance with cluster image**  
  → Remediate non-compliant hosts.
- **Upgrade VMware Tools and VM Hardware**  
  → Lab demo on updating VM compatibility.

---
