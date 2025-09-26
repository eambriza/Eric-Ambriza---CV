'use client'

import { skills } from '@/data/resume'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Skills() {
  const headerRef = useScrollReveal()
  const skillsRef = useScrollReveal()

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Skills
          </h1>
          <p className="text-xl text-light/80">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <section ref={skillsRef} className="opacity-0">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-border/30 rounded-xl p-6 card-hover">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-light">
                    {skill.name}
                  </h3>
                  <span className="text-accent-cyan font-medium">
                    {skill.level}
                  </span>
                </div>
                
                <div className="w-full bg-dark rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-accent-cyan to-accent-magenta h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-display font-bold mb-8 text-accent-cyan">
              Additional Expertise
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-border/30 rounded-xl p-6 card-hover">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-lg font-semibold mb-2">Development Tools</h3>
                <p className="text-light/80 text-sm">
                  Git, VS Code, Docker, Postman, Chrome DevTools
                </p>
              </div>
              
              <div className="bg-border/30 rounded-xl p-6 card-hover">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2">Data Analysis</h3>
                <p className="text-light/80 text-sm">
                  Statistical Analysis, Data Visualization, Machine Learning
                </p>
              </div>
              
              <div className="bg-border/30 rounded-xl p-6 card-hover">
                <div className="text-3xl mb-4">☁️</div>
                <h3 className="text-lg font-semibold mb-2">Cloud & Deployment</h3>
                <p className="text-light/80 text-sm">
                  Vercel, GitHub Pages, Basic AWS, CI/CD
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}