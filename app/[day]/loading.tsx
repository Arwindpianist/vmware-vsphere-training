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

        {/* Module Cards Skeleton */}
        <div className="mt-16 space-y-12">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-2xl bg-white dark:bg-dark-bg-secondary p-8 shadow-sm ring-1 ring-gray-200 dark:ring-dark-border"
            >
              <div className="h-6 w-48 bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
              
              {/* Topics Skeleton */}
              <div className="mt-8 space-y-6">
                {[1, 2].map((j) => (
                  <div
                    key={j}
                    className="rounded-lg bg-gray-50 dark:bg-dark-bg-tertiary p-4"
                  >
                    <div className="h-5 w-64 bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse" />
                    <div className="mt-4 space-y-2">
                      {[1, 2, 3, 4].map((k) => (
                        <div
                          key={k}
                          className="h-4 w-full bg-gray-200 dark:bg-dark-bg-tertiary rounded animate-pulse"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 