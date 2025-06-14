import React from 'react'

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Header Skeleton */}
        <div className="text-center">
          <div className="h-8 w-64 mx-auto bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
          <div className="mt-4 h-4 w-96 mx-auto bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
        </div>

        {/* Requirements Cards Skeleton */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-2xl bg-white dark:bg-dark-bg-secondary p-8 shadow-sm ring-1 ring-gray-200 dark:ring-dark-border"
            >
              <div className="h-6 w-48 bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
              <div className="mt-6 space-y-3">
                {[1, 2, 3, 4, 5].map((j) => (
                  <div
                    key={j}
                    className="flex items-center gap-x-3"
                  >
                    <div className="h-5 w-5 bg-gray-200 dark:bg-dark-bg-tertiary rounded-full animate-pulse" />
                    <div className="h-4 w-full bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Note Skeleton */}
        <div className="mt-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 p-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <div className="h-5 w-5 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse" />
            </div>
            <div className="ml-3 flex-1">
              <div className="h-5 w-32 bg-blue-200 dark:bg-blue-800 rounded animate-pulse" />
              <div className="mt-2 h-4 w-full bg-blue-200 dark:bg-blue-800 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 