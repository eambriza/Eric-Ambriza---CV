'use client'

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import type { Project } from '@/data/projects'

interface ProjectPageClientProps {
  project: Project
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const headerRef = useScrollReveal()
  const contentRef = useScrollReveal()

  return (
    <div className="min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center space-x-2 text-accent-cyan hover:text-accent-magenta transition-colors link-underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 opacity-0">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-accent-magenta mb-6">
            {project.category}
          </p>
          <p className="text-lg text-light/90 max-w-2xl mx-auto">
            {project.blurb}
          </p>
        </div>

        {/* Content */}
        <div ref={contentRef} className="opacity-0">
          {/* Embed or External Link */}
          {project.embed ? (
            <div className="mb-8">
              <div className="bg-border/30 rounded-xl p-6">
                <iframe
                  src={project.embed}
                  className="w-full h-96 rounded-lg"
                  title={project.title}
                />
              </div>
            </div>
          ) : project.url ? (
            <div className="mb-8 text-center">
              <div className="bg-border/30 rounded-xl p-12">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-semibold mb-4">View Live Project</h3>
                <p className="text-light/80 mb-6">
                  This project is hosted externally. Click the button below to view it.
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-magenta text-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Open Project</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ) : null}

          {/* Project Details */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-border/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent-cyan">
                Technologies Used
              </h3>
              <p className="text-light/90">
                {project.category}
              </p>
            </div>

            <div className="bg-border/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent-magenta">
                Project Links
              </h3>
              <div className="space-y-2">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent-cyan hover:text-accent-magenta transition-colors link-underline"
                  >
                    Live Demo →
                  </a>
                )}
                {project.url?.includes('github.com') && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent-cyan hover:text-accent-magenta transition-colors link-underline"
                  >
                    Source Code →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}