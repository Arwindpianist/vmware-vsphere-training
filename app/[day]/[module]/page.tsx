'use client'

import { useParams } from 'next/navigation'
import { days } from '@/data/modules'
import DayNavigation from '@/app/components/DayNavigation'

export default function ModulePage() {
  const params = useParams()
  
  if (!params?.day || !params?.module) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-red-500">Invalid URL</h1>
          <p className="mt-4 text-gray-300">The requested URL is invalid.</p>
        </div>
      </div>
    )
  }

  // Extract the day and module numbers from the URL parameters
  const dayId = parseInt((params.day as string).replace('day', ''))
  const moduleId = parseInt((params.module as string).replace('module', ''))
  
  const day = days.find(d => d.id === dayId)
  const currentModule = day?.modules.find(m => m.id === moduleId)

  if (!day || !currentModule) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-red-500">Module not found</h1>
          <p className="mt-4 text-gray-300">The requested module could not be found.</p>
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
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="inline-flex items-center rounded-full bg-[#068bef]/10 px-3 py-1 text-sm font-medium text-[#068bef] ring-1 ring-inset ring-[#068bef]/20">
                Day {day.id}
              </span>
              <span className="text-gray-400">•</span>
              <span className="inline-flex items-center rounded-full bg-[#ff8b02]/10 px-3 py-1 text-sm font-medium text-[#ff8b02] ring-1 ring-inset ring-[#ff8b02]/20">
                Module {currentModule.id}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {currentModule.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {currentModule.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-12">
              {currentModule.topics.map((topic, index) => (
                <div key={topic.id} className="relative">
                  {/* Topic Number */}
                  <div className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#068bef]/10 text-[#068bef] ring-1 ring-[#068bef]/20">
                    {index + 1}
                  </div>

                  {/* Topic Content */}
                  <div className="rounded-xl bg-gray-800 p-8">
                    <h2 className="text-2xl font-semibold text-white mb-4">
                      {topic.title}
                    </h2>
                    <div className="prose prose-invert max-w-none">
                      <div className="text-gray-300 space-y-4">
                        {topic.details.map((detail, i) => (
                          <p key={i} className="leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation */}
              <div className="mt-12">
                <DayNavigation />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 