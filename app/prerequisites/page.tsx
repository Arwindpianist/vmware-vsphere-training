import React from 'react'

export default function Prerequisites() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 py-20 sm:py-32">
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Course Prerequisites
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Before starting the VMware vSphere training, please ensure you meet the following prerequisites
                to get the most out of the course.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites Content */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="prerequisites-card">
              <h3 className="text-xl font-semibold text-[#068bef]">Technical Requirements</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  Basic understanding of computer networking concepts (TCP/IP, DNS, DHCP)
                </li>
                <li>
                  Familiarity with Windows Server or Linux operating systems
                </li>
                <li>
                  Knowledge of storage concepts (SAN, NAS, iSCSI)
                </li>
                <li>
                  Understanding of basic security concepts
                </li>
              </ul>
            </div>

            <div className="prerequisites-card mt-8">
              <h3 className="text-xl font-semibold text-[#068bef]">Hardware Requirements</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  A computer with at least 16GB RAM (32GB recommended)
                </li>
                <li>
                  Intel VT-x or AMD-V enabled processor
                </li>
                <li>
                  At least 100GB of free disk space
                </li>
                <li>
                  Stable internet connection for accessing course materials
                </li>
              </ul>
            </div>

            <div className="prerequisites-card mt-8">
              <h3 className="text-xl font-semibold text-[#068bef]">Practice Resources</h3>
              <div className="mt-6 space-y-4">
                <p className="text-gray-300">
                  To enhance your learning experience, we recommend utilizing VMware Hands-on Labs (HOL) for practical exercises. 
                  These labs provide a safe environment to practice vSphere operations without requiring local hardware setup.
                </p>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-medium text-gray-100 mb-2">VMware Hands-on Labs</h4>
                  <p className="text-gray-400 mb-3">
                    Access free, self-paced labs at VMware Hands-on Labs to practice vSphere operations in a pre-configured environment.
                  </p>
                  <a 
                    href="https://labs.hol.vmware.com/HOL/catalog?products=vSphere" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#068bef] hover:text-[#057eaf] transition-colors duration-200"
                  >
                    Access VMware Hands-on Labs
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="prerequisites-card mt-8">
              <h3 className="text-xl font-semibold text-[#068bef]">Learning Resources</h3>
              <div className="mt-6 space-y-8">
                <p className="text-gray-300">
                  Here's a curated list of resources organized by module to support your vSphere training journey. 
                  These include official documentation, practical guides, and video tutorials.
                </p>

                {/* Day 1 Resources */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-medium text-gray-100 mb-4">📅 Day 1: Introduction & ESXi</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-[#068bef] font-medium mb-2">Module 2 – vSphere & Virtualization Overview</h5>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex flex-col">
                          <a href="https://www.youtube.com/watch?v=lRgSYegEqA0" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="text-[#068bef] hover:text-[#057eaf] transition-colors duration-200 flex items-center group">
                            <span className="mr-2">🔗</span>
                            What is VMware vSphere – Beginner's Guide (Video)
                            <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <span className="text-gray-400 text-sm mt-1 ml-6">Quick intro to virtualization and vSphere components</span>
                        </li>
                        <li className="flex flex-col">
                          <a href="https://www.linkedin.com/learning/vmware-vsphere-7-foundations-essential-training" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-[#068bef] hover:text-[#057eaf] transition-colors duration-200 flex items-center group">
                            <span className="mr-2">🔗</span>
                            Introduction to Virtualization – LinkedIn Learning
                            <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <span className="text-gray-400 text-sm mt-1 ml-6">Covers VMs, hypervisors, resource sharing</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-[#068bef] font-medium mb-2">Module 3 – Installing & Configuring ESXi</h5>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex flex-col">
                          <a href="https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/8-0/esxi-installation-and-setup-8-0.html" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-[#068bef] hover:text-[#057eaf] transition-colors duration-200 flex items-center group">
                            <span className="mr-2">🔗</span>
                            ESXi Installation & Setup Guide (Official)
                            <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <span className="text-gray-400 text-sm mt-1 ml-6">Detailed instructions for ESXi 8.0</span>
                        </li>
                        <li className="flex flex-col">
                          <a href="https://www.cloudthat.com/resources/blog/how-to-install-esxi-8" 
                             target="_blank" 
                             rel="noopener noreferrer"
                             className="text-[#068bef] hover:text-[#057eaf] transition-colors duration-200 flex items-center group">
                            <span className="mr-2">🔗</span>
                            How to Install ESXi 8 – CloudThat blog
                            <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          <span className="text-gray-400 text-sm mt-1 ml-6">Step-by-step walkthrough</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Day 2 Resources */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-medium text-gray-100 mb-4">📅 Day 2: vCenter & Networking</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-[#068bef] font-medium mb-2">Module 4 – Deploying vCenter</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li>
                          <a href="https://www.vmware.com/docs/vsphere-vcenter-802-installation-guide" target="_blank" rel="noopener noreferrer"
                             className="hover:text-[#068bef] transition-colors duration-200">
                            vCenter Server Installation & Setup (Broadcom PDF)
                          </a>
                          <span className="text-gray-400 text-sm ml-2">– Official deployment guide</span>
                        </li>
                        <li>
                          <a href="https://zerotohero.dev/inbox/deploying-vcsa/" target="_blank" rel="noopener noreferrer"
                             className="hover:text-[#068bef] transition-colors duration-200">
                            vCenter Deployment Tutorial – Zero to Hero
                          </a>
                          <span className="text-gray-400 text-sm ml-2">– Practical step-by-step setup</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-[#068bef] font-medium mb-2">Module 5 – vSphere Networking</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li>
                          <a href="https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/8-0/vsphere-networking-8-0/setting-up-networking-with-vnetwork-standard-switches.html" target="_blank" rel="noopener noreferrer"
                             className="hover:text-[#068bef] transition-colors duration-200">
                            Setting Up Standard vSphere Switches
                          </a>
                          <span className="text-gray-400 text-sm ml-2">– Official documentation</span>
                        </li>
                        <li>
                          <a href="https://www.altaro.com/vmware/vsphere-networking-basics-part-1/" target="_blank" rel="noopener noreferrer"
                             className="hover:text-[#068bef] transition-colors duration-200">
                            Altaro vSphere Networking Basics
                          </a>
                          <span className="text-gray-400 text-sm ml-2">– Simple explanations and walkthroughs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Day 3 Resources */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-medium text-gray-100 mb-4">📅 Day 3: Storage & VM Deployment</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-[#068bef] font-medium mb-2">Module 6 – vSphere Storage</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li>
                          <a href="https://www.vmware.com/docs/vmw-best-practices-running-nfs-vmware-vsphere" target="_blank" rel="noopener noreferrer"
                             className="hover:text-[#068bef] transition-colors duration-200">
                            NFS Best Practices for vSphere
                          </a>
                          <span className="text-gray-400 text-sm ml-2">– Planning & configuration guidelines</span>
                        </li>
                        <li>
                          <a href="https://www.nakivo.com/blog/nfs-vs-iscsi-for-accessing-vm-data/" target="_blank" rel="noopener noreferrer"
                             className="hover:text-[#068bef] transition-colors duration-200">
                            iSCSI vs NFS Comparison
                          </a>
                          <span className="text-gray-400 text-sm ml-2">– Pros and cons on storage protocols</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-[#068bef] font-medium mb-2">Module 7 – Deploying VMs</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li>
                          <a href="https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/8-0/vsphere-virtual-machine-administration-guide-8-0.html" target="_blank" rel="noopener noreferrer"
                             className="hover:text-[#068bef] transition-colors duration-200">
                            vSphere Virtual Machine Admin Guide
                          </a>
                          <span className="text-gray-400 text-sm ml-2">– Covers VM creation, customization, VMware Tools</span>
                        </li>
                        <li>
                          <a href="https://support.us.ovhcloud.com/hc/en-us/articles/360017547260-How-to-Deploy-a-VM-in-the-vSphere-Web-Client" target="_blank" rel="noopener noreferrer"
                             className="hover:text-[#068bef] transition-colors duration-200">
                            Deploy VM via vSphere Web Client – OVH Guide
                          </a>
                          <span className="text-gray-400 text-sm ml-2">– Step-by-step deployment flow</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Day 4 Resources */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-medium text-gray-100 mb-4">📅 Day 4: VMs, Clusters & Lifecycle</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-[#068bef] font-medium mb-2">Module 8 – VM Management (vMotion & Snapshots)</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li>
                          <a href="https://blogs.vmware.com/vsphere/2019/07/the-vmotion-process-under-the-hood.html" target="_blank" rel="noopener noreferrer"
                             className="hover:text-[#068bef] transition-colors duration-200">
                            The vMotion Process Under the Hood (Blog)
                          </a>
                          <span className="text-gray-400 text-sm ml-2">– Insightful article on migration</span>
                        </li>
                        <li>
                          <a href="https://www.vinchin.com/vm-migration/vmware-vmotion.html" target="_blank" rel="noopener noreferrer"
                             className="hover:text-[#068bef] transition-colors duration-200">
                            Beginner's Guide to vMotion (Vinchin)
                          </a>
                          <span className="text-gray-400 text-sm ml-2">– Step-by-step usage tips</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-[#068bef] font-medium mb-2">Module 9 – Clusters (DRS & HA)</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li>
                          <a href="https://www.nakivo.com/blog/configuring-esxi-vmotion-network/" target="_blank" rel="noopener noreferrer"
                             className="hover:text-[#068bef] transition-colors duration-200">
                            vMotion Network Configuration Guide – NAKIVO
                          </a>
                          <span className="text-gray-400 text-sm ml-2">– Best practices for vMotion networks</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-[#068bef] font-medium mb-2">Module 10 – Lifecycle Management</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li>
                          <a href="https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/8-0.html" target="_blank" rel="noopener noreferrer"
                             className="hover:text-[#068bef] transition-colors duration-200">
                            vSphere 8 Lifecycle Manager Official Docs
                          </a>
                          <span className="text-gray-400 text-sm ml-2">– Contains lifecycle and update planning info</span>
                        </li>
                        <li>
                          <a href="https://www.vmware.com/docs/vsphere-esxi-vcenter-server-80-performance-best-practices" target="_blank" rel="noopener noreferrer"
                             className="hover:text-[#068bef] transition-colors duration-200">
                            vSphere Performance Best Practices (PDF)
                          </a>
                          <span className="text-gray-400 text-sm ml-2">– Includes lifecycle and patch guidance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Video Resources */}
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-medium text-gray-100 mb-4">🎥 Useful Videos (Visual Aids)</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex flex-col">
                      <a href="https://www.youtube.com/watch?v=lRgSYegEqA0" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-[#068bef] hover:text-[#057eaf] transition-colors duration-200 flex items-center group">
                        <span className="mr-2">🎬</span>
                        What is VMware vSphere – Beginner's Guide (YouTube)
                        <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                    <li className="flex flex-col">
                      <a href="https://www.youtube.com/watch?v=FlOJh8hesqA" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-[#068bef] hover:text-[#057eaf] transition-colors duration-200 flex items-center group">
                        <span className="mr-2">🎬</span>
                        How to Install ESXi 8 (YouTube tutorial)
                        <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                    <li className="flex flex-col">
                      <a href="https://www.youtube.com/watch?v=NWiDKRrmBME" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-[#068bef] hover:text-[#057eaf] transition-colors duration-200 flex items-center group">
                        <span className="mr-2">🎬</span>
                        Configure Standard Switch in VMware vSphere 8
                        <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                    <li className="flex flex-col">
                      <a href="https://www.youtube.com/watch?v=4c609-QtNv4" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-[#068bef] hover:text-[#057eaf] transition-colors duration-200 flex items-center group">
                        <span className="mr-2">🎬</span>
                        What is vSphere vMotion – Step by Step
                        <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="prerequisites-card mt-8">
              <h3 className="text-xl font-semibold text-[#068bef]">Software Requirements</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  VMware Workstation Pro 16.x or later
                </li>
                <li>
                  Windows 10/11 or Linux operating system
                </li>
                <li>
                  Modern web browser (Chrome, Firefox, or Edge)
                </li>
                <li>
                  SSH client (PuTTY or OpenSSH)
                </li>
              </ul>
            </div>

            <div className="tip-box mt-8">
              <h4 className="text-lg font-semibold text-[#ff8b02]">Important Note</h4>
              <p className="mt-2 text-gray-300">
                While these prerequisites are recommended, we understand that some participants may have varying levels of experience. 
                Our course is designed to accommodate different skill levels, and our instructors will provide additional support 
                where needed. If you're unsure about meeting any of these requirements, please contact us for guidance.
              </p>
            </div>

            <div className="mt-12 text-center">
              <a
                href="/day1"
                className="inline-flex items-center rounded-md bg-[#068bef] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#057eaf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#068bef] transition-colors duration-200"
              >
                Start Course
                <span className="ml-2" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 