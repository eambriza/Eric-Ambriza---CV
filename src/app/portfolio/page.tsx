import Link from 'next/link'
import { projects } from '@/data/projects'

export default function Portfolio() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="font-mono text-3xl md:text-4xl font-bold tracking-wider text-text-primary uppercase mb-4">
          Portfolio
        </h1>
        <p className="text-text-secondary text-lg">
          A showcase of my work and projects
        </p>
      </div>

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
  )
}