'use client'

import { workExperience, education } from '@/data/resume'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Experience() {
  const headerRef = useScrollReveal()
  const workRef = useScrollReveal()
  const educationRef = useScrollReveal()

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Experience
          </h1>
          <p className="text-xl text-light/80">
            My professional journey and educational background
          </p>
        </div>

        {/* Work Experience */}
        <section ref={workRef} className="mb-20 opacity-0">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-8 text-accent-cyan">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="bg-border/30 rounded-xl p-6 card-hover">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-1">
                      {job.title}
                    </h3>
                    <p className="text-accent-magenta font-medium">
                      {job.company}
                    </p>
                  </div>
                  <span className="text-light/60 text-sm lg:text-base mt-2 lg:mt-0">
                    {job.years}
                  </span>
                </div>
                
                <p className="text-light/90 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section ref={educationRef} className="opacity-0">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-8 text-accent-cyan">
            Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-border/30 rounded-xl p-6 card-hover">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-accent-magenta">
                      {edu.school}
                    </p>
                  </div>
                  <span className="text-light/60 text-sm lg:text-base mt-2 lg:mt-0">
                    {edu.graduated}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}