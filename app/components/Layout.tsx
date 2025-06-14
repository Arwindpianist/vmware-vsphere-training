'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dialog, Transition } from '@headlessui/react'
import { 
  Bars3Icon, 
  XMarkIcon,
  ComputerDesktopIcon,
  ServerIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'
import { days } from '@/data/modules'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const dayIcons = {
  1: ComputerDesktopIcon,
  2: ServerIcon,
  3: CircleStackIcon,
  4: ShieldCheckIcon
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = days.map(day => {
    const Icon = dayIcons[day.id as keyof typeof dayIcons]
    return {
      name: day.title,
      href: `/day${day.id}`,
      icon: Icon,
      modules: day.modules.map(module => ({
        name: module.title,
        href: `/day${day.id}/module${module.id}`
      }))
    }
  })

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Mobile sidebar */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        className="h-8 w-auto"
                        src="/vsphere-logo.svg"
                        alt="VMware vSphere"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white">VMware vSphere</span>
                        <span className="text-xs text-gray-400">Training</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="text-gray-400 hover:text-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <div className="text-xs font-semibold leading-6 text-[#068bef]">Course Navigation</div>
                        <ul role="list" className="mt-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={classNames(
                                  pathname === item.href
                                    ? 'bg-gray-800 text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                  'group flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200'
                                )}
                              >
                                <item.icon className="h-5 w-5 shrink-0 text-[#ff8b02]" aria-hidden="true" />
                                <span className="truncate">{item.name}</span>
                              </Link>
                              {/* Module submenu */}
                              <ul role="list" className="mt-1 space-y-1 pl-6">
                                {item.modules.map((module) => (
                                  <li key={module.name}>
                                    <Link
                                      href={module.href}
                                      className={classNames(
                                        pathname === module.href
                                          ? 'bg-gray-800 text-white'
                                          : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                        'group flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200'
                                      )}
                                    >
                                      <BookOpenIcon className="h-4 w-4 shrink-0 text-[#ff8b02]" aria-hidden="true" />
                                      <span className="truncate">{module.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <Link
                          href="/prerequisites"
                          className={classNames(
                            pathname === '/prerequisites'
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-800',
                            'group flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200'
                          )}
                        >
                          <BookOpenIcon className="h-5 w-5 shrink-0 text-[#ff8b02]" aria-hidden="true" />
                          Prerequisites
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-800 bg-gray-900 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <div className="flex items-center gap-3">
              <img
                className="h-8 w-auto"
                src="/vsphere-logo.svg"
                alt="VMware vSphere"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">VMware vSphere</span>
                <span className="text-xs text-gray-400">Training</span>
              </div>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <div className="text-xs font-semibold leading-6 text-[#068bef]">Course Navigation</div>
                <ul role="list" className="mt-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                          'group flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200'
                        )}
                      >
                        <item.icon className="h-5 w-5 shrink-0 text-[#ff8b02]" aria-hidden="true" />
                        <span className="truncate">{item.name}</span>
                      </Link>
                      {/* Module submenu */}
                      <ul role="list" className="mt-1 space-y-1 pl-6">
                        {item.modules.map((module) => (
                          <li key={module.name}>
                            <Link
                              href={module.href}
                              className={classNames(
                                pathname === module.href
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                'group flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200'
                              )}
                            >
                              <BookOpenIcon className="h-4 w-4 shrink-0 text-[#ff8b02]" aria-hidden="true" />
                              <span className="truncate">{module.name}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link
                  href="/prerequisites"
                  className={classNames(
                    pathname === '/prerequisites'
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                    'group flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200'
                  )}
                >
                  <BookOpenIcon className="h-5 w-5 shrink-0 text-[#ff8b02]" aria-hidden="true" />
                  Prerequisites
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-800 bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="text-gray-400 hover:text-white lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div className="h-6 w-px bg-gray-800 lg:hidden" aria-hidden="true" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex-1" />
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              {/* Profile dropdown */}
            </div>
          </div>
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 