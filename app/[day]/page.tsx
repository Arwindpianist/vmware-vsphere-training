'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { days } from '@/data/modules'
import DayNavigation from '@/app/components/DayNavigation'

export default function DayPage() {
  const params = useParams()
  
  if (!params?.day) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-red-500">Invalid URL</h1>
          <p className="mt-4 text-gray-300">The requested URL is invalid.</p>
        </div>
      </div>
    )
  }

  // Extract the day number from the URL parameter (e.g., "day1" -> 1)
  const dayId = parseInt((params.day as string).replace('day', ''))
  const day = days.find(d => d.id === dayId)

  if (!day) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-red-500">Day not found</h1>
          <p className="mt-4 text-gray-300">The requested day could not be found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-[#068bef]/10 px-3 py-1 text-sm font-medium text-[#068bef] ring-1 ring-inset ring-[#068bef]/20">
              Day {day.id}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {day.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-8">
              {day.modules.map((module) => (
                <Link
                  key={module.id}
                  href={`/day${day.id}/module${module.id}`}
                  className="group relative block overflow-hidden rounded-xl bg-gray-800 p-8 transition-all hover:bg-gray-700"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="inline-flex items-center rounded-full bg-[#ff8b02]/10 px-2.5 py-0.5 text-xs font-medium text-[#ff8b02] ring-1 ring-inset ring-[#ff8b02]/20">
                        Module {module.id}
                      </span>
                      <h2 className="mt-4 text-xl font-semibold text-white group-hover:text-[#068bef] transition-colors">
                        {module.title}
                      </h2>
                      <p className="mt-2 text-gray-300">
                        {module.summary}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <svg className="h-6 w-6 text-gray-400 group-hover:text-[#068bef] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-12">
              <DayNavigation />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 