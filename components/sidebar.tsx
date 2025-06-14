'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { days } from '@/data/modules'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const navigation = days.map(day => ({
    name: day.title,
    href: `/day/${day.id}`,
    modules: day.modules
  }))

  return (
    <>
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        <button
          type="button"
          className="fixed top-4 left-4 z-50 rounded-md bg-white dark:bg-dark-bg-secondary p-2 text-gray-500 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open sidebar</span>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75" onClick={() => setIsOpen(false)} />
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-dark-bg-primary">
              <div className="flex h-16 items-center justify-between px-4">
                <img
                  className="h-8 w-auto"
                  src="/vsphere-logo.svg"
                  alt="VMware vSphere"
                />
                <button
                  type="button"
                  className="rounded-md text-gray-500 dark:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-dark-bg-tertiary p-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      pathname === item.href
                        ? 'bg-gray-100 dark:bg-dark-bg-tertiary text-gray-900 dark:text-dark-text-primary'
                        : 'text-gray-600 dark:text-dark-text-secondary hover:bg-gray-50 dark:hover:bg-dark-bg-secondary hover:text-gray-900 dark:hover:text-dark-text-primary',
                      'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                    )}
                  >
                    <span className={cn(
                      'mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-[0.625rem] font-medium'
                    )}>
                      {item.name.split(':')[0].trim()}
                    </span>
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/prerequisites"
                  className={cn(
                    pathname === '/prerequisites'
                      ? 'bg-gray-100 dark:bg-dark-bg-tertiary text-gray-900 dark:text-dark-text-primary'
                      : 'text-gray-600 dark:text-dark-text-secondary hover:bg-gray-50 dark:hover:bg-dark-bg-secondary hover:text-gray-900 dark:hover:text-dark-text-primary',
                    'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                  )}
                >
                  Prerequisites
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg-primary">
          <div className="flex h-16 flex-shrink-0 items-center px-4">
            <img
              className="h-8 w-auto"
              src="/vsphere-logo.svg"
              alt="VMware vSphere"
            />
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  pathname === item.href
                    ? 'bg-gray-100 dark:bg-dark-bg-tertiary text-gray-900 dark:text-dark-text-primary'
                    : 'text-gray-600 dark:text-dark-text-secondary hover:bg-gray-50 dark:hover:bg-dark-bg-secondary hover:text-gray-900 dark:hover:text-dark-text-primary',
                  'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                )}
              >
                <span className={cn(
                  'mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-[0.625rem] font-medium'
                )}>
                  {item.name.split(':')[0].trim()}
                </span>
                {item.name}
              </Link>
            ))}
            <Link
              href="/prerequisites"
              className={cn(
                pathname === '/prerequisites'
                  ? 'bg-gray-100 dark:bg-dark-bg-tertiary text-gray-900 dark:text-dark-text-primary'
                  : 'text-gray-600 dark:text-dark-text-secondary hover:bg-gray-50 dark:hover:bg-dark-bg-secondary hover:text-gray-900 dark:hover:text-dark-text-primary',
                'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
              )}
            >
              Prerequisites
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
} 