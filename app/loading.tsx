import React from 'react'

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Hero Section Skeleton */}
        <div className="text-center">
          <div className="h-10 w-96 mx-auto bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
          <div className="mt-4 h-4 w-3/4 mx-auto bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
          <div className="mt-2 h-4 w-1/2 mx-auto bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
          <div className="mt-8 flex justify-center gap-4">
            <div className="h-10 w-32 bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
            <div className="h-10 w-32 bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
          </div>
        </div>

        {/* Course Modules Skeleton */}
        <div className="mt-16">
          <div className="h-8 w-48 mx-auto bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl bg-white dark:bg-dark-bg-secondary p-6 shadow-sm ring-1 ring-gray-200 dark:ring-dark-border"
              >
                <div className="h-6 w-32 bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
                <div className="mt-4 space-y-2">
                  <div className="h-4 w-full bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
                  <div className="h-4 w-3/4 bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
                </div>
                <div className="mt-6 h-8 w-full bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 