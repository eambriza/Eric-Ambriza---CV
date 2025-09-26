import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectPageClient from './ProjectPageClient'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug)
  
  if (!project) {
    notFound()
  }

  return <ProjectPageClient project={project} />
}