import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Day Not Found
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-dark-text-secondary">
          The training day you're looking for doesn't exist. Please check the URL or return to the home page.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
} 