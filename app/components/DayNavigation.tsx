'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { days } from '@/data/modules'

export default function DayNavigation() {
  const params = useParams()
  
  if (!params?.day) {
    return null
  }

  // Extract the day and module numbers from the URL parameters
  const dayId = parseInt((params.day as string).replace('day', ''))
  const currentModuleId = params.module ? parseInt((params.module as string).replace('module', '')) : 1
  
  const day = days.find(d => d.id === dayId)
  if (!day) return null

  // Find the current module index and get previous/next modules
  const currentModuleIndex = day.modules.findIndex(m => m.id === currentModuleId)
  const prevModule = currentModuleIndex > 0 ? day.modules[currentModuleIndex - 1] : null
  const nextModule = currentModuleIndex < day.modules.length - 1 ? day.modules[currentModuleIndex + 1] : null

  return (
    <div className="mt-12 flex items-center justify-between border-t border-gray-800 pt-8">
      {prevModule ? (
        <Link
          href={`/day${day.id}/module${prevModule.id}`}
          className="group flex items-center text-[#068bef] hover:text-[#ff8b02] transition-colors"
        >
          <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div>
            <span className="text-sm font-medium">Previous Module</span>
            <p className="text-base font-semibold">{prevModule.title}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextModule ? (
        <Link
          href={`/day${day.id}/module${nextModule.id}`}
          className="group flex items-center text-right text-[#068bef] hover:text-[#ff8b02] transition-colors"
        >
          <div>
            <span className="text-sm font-medium">Next Module</span>
            <p className="text-base font-semibold">{nextModule.title}</p>
          </div>
          <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
} 