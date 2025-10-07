import Link from 'next/link'
import Typewriter from '@/components/Typewriter'
import ScrollIndicator from '@/components/ScrollIndicator'
import { projects } from '@/data/projects'

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8">
          {/* Main heading */}
          <h1
            className="glitch-text font-mono text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-text-primary uppercase"
            data-text="PORTFOLIO"
          >
            PORTFOLIO
          </h1>

          {/* Typing animation line */}
          <div className="flex items-center justify-center min-h-[2rem]">
            <div className="h-0.5 bg-accent-orange w-16 md:w-24 lg:w-32 animate-pulse"></div>
            <span className="ml-2 text-accent-orange text-2xl md:text-3xl font-light animate-pulse">
              |
            </span>
          </div>

          {/* Typed subtitle */}
          <div className="min-h-[3rem] flex items-center justify-center">
            <Typewriter
              text="A showcase of my work and projects"
              speed={70}
              className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            />
          </div>
        </div>
        {/* Scroll Indicator */}
        <ScrollIndicator />
      </div>

      {/* Content Section */}
      <div className="flex justify-center mt-44 mb-24">
        <div className="w-full max-w-[50%]">
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.slug} className="group">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-accent-orange/20 to-accent-orange/5 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-4xl opacity-50">🚀</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-accent-orange text-sm font-medium mb-3">
                        {project.category}
                      </p>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {project.blurb}
                      </p>
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="text-text-primary hover:text-accent-orange transition-colors duration-200 text-sm font-medium"
                      >
                        View Details →
                      </Link>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-secondary hover:text-accent-orange transition-colors duration-200 text-sm font-medium"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}