import { days } from '@/data/modules'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 py-20 sm:py-32">
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                VMware vSphere Training
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Master VMware vSphere with our comprehensive training program. Learn virtualization, 
                management, and advanced features through hands-on exercises and real-world scenarios.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/day1"
                  className="rounded-md bg-[#068bef] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#057eaf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#068bef] transition-colors duration-200"
                >
                  Start Learning
                </Link>
                <Link
                  href="/prerequisites"
                  className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  View Prerequisites <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Course Modules
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Explore our comprehensive curriculum designed to take you from beginner to expert in VMware vSphere.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {days.map((day) => (
              <div
                key={day.id}
                className="module-card group relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-x-4">
                    <span className={`day-badge day${day.id}`}>
                      Day {day.id}
                    </span>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-white">
                      {day.title}
                    </h3>
                  </div>
                  <div className="mt-4 space-y-4">
                    {day.modules.map((module) => (
                      <div
                        key={module.id}
                        className="topic-card group/module"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-semibold leading-7 text-[#068bef]">
                            {module.title}
                          </h4>
                          <Link
                            href={`/day${day.id}/module${module.id}`}
                            className="rounded-md bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                          >
                            View Module
                          </Link>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-gray-300">
                          {module.summary}
                        </p>
                        {module.topics && (
                          <ul className="mt-4 space-y-2">
                            {module.topics.map((topic, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-x-2 text-sm text-gray-400"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff8b02]" />
                                {topic.title}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/day${day.id}`}
                    className="text-sm font-semibold leading-6 text-[#068bef] hover:text-[#057eaf] transition-colors duration-200"
                  >
                    View Day {day.id} Details <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Begin your VMware vSphere training today and take the first step towards becoming a virtualization expert.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/day1"
                className="rounded-md bg-[#068bef] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#057eaf] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#068bef] transition-colors duration-200"
              >
                Get Started
              </Link>
              <Link
                href="/prerequisites"
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Check Prerequisites <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 