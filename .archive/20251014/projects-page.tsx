'use client'

import Link from 'next/link'
import { projects } from '@/data/projects'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Projects() {
  const headerRef = useScrollReveal()
  const projectsRef = useScrollReveal()

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Projects
          </h1>
          <p className="text-xl text-light/80">
            A showcase of my work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <section ref={projectsRef} className="opacity-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.slug} className="bg-border/30 rounded-xl overflow-hidden card-hover">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-accent-cyan/20 to-accent-magenta/20 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-light">
                      {project.title}
                    </h3>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-cyan hover:text-accent-magenta transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  
                  <p className="text-accent-magenta text-sm mb-3 font-medium">
                    {project.category}
                  </p>
                  
                  <p className="text-light/80 text-sm leading-relaxed mb-4">
                    {project.blurb}
                  </p>
                  
                  <div className="flex space-x-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 text-center px-4 py-2 bg-accent-cyan/20 text-accent-cyan rounded-lg hover:bg-accent-cyan hover:text-dark transition-all duration-300 text-sm font-medium"
                    >
                      View Details
                    </Link>
                    
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-accent-magenta text-accent-magenta rounded-lg hover:bg-accent-magenta hover:text-dark transition-all duration-300 text-sm font-medium"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}