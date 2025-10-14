import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';

interface PortfolioPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function PortfolioPage({ params }: PortfolioPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-12">
      {/* Back Button */}
      <div>
        <Link
          href="/portfolio"
          className="inline-flex items-center space-x-2 text-text-secondary hover:text-accent-orange transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Project Header */}
      <div className="text-center space-y-4">
        <h1 className="font-mono text-3xl md:text-4xl font-bold tracking-wider text-text-primary uppercase">
          {project.title}
        </h1>
        <p className="text-accent-orange text-lg font-medium">{project.category}</p>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          {project.blurb}
        </p>
      </div>

      {/* Project Content */}
      <div className="space-y-8">
        {/* Embed or External Link */}
        {project.embed ? (
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <iframe src={project.embed} className="w-full h-96 rounded-lg" title={project.title} />
          </div>
        ) : project.url ? (
          <div className="text-center py-16">
            <div className="bg-white/5 border border-white/10 rounded-xl p-12">
              <div className="text-6xl mb-6 opacity-50">🚀</div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">View Live Project</h3>
              <p className="text-text-secondary mb-8 max-w-md mx-auto">
                This project is hosted externally. Click the button below to view it.
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-accent-orange text-white font-medium rounded-lg hover:bg-accent-orange/90 transition-colors duration-200"
              >
                <span>Open Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        ) : null}

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold tracking-wider text-text-primary uppercase mb-4">
              Technologies
            </h3>
            <p className="text-text-secondary">{project.category}</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-mono text-lg font-bold tracking-wider text-text-primary uppercase mb-4">
              Links
            </h3>
            <div className="space-y-2">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent-orange hover:text-text-primary transition-colors duration-200"
                >
                  Live Demo →
                </a>
              )}
              {project.url?.includes('github.com') && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent-orange hover:text-text-primary transition-colors duration-200"
                >
                  Source Code →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
