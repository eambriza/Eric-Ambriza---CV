import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';

function getProjectOverview(slug: string): JSX.Element {
  const overviews: Record<string, JSX.Element> = {
    'coronagora': (
      <p>
        Built during the COVID-19 pandemic to provide real-time tracking and visualization of global pandemic data. 
        The application aggregates data from multiple sources and presents it through interactive charts and maps, 
        helping users understand trends and statistics across different regions and time periods.
      </p>
    ),
    'global-environmental-impact-calculator': (
      <p>
        An interactive tool designed to help individuals and organizations calculate their environmental footprint. 
        Features comprehensive metrics for carbon emissions, water usage, and waste generation with real-time 
        calculations and actionable insights for reducing environmental impact.
      </p>
    ),
    'pmp-drill-coach': (
      <p>
        A comprehensive study companion for Project Management Professional (PMP) certification candidates. 
        Provides structured practice questions, progress tracking, and detailed explanations to help users 
        prepare effectively for the PMP exam with confidence.
      </p>
    ),
    'eric-ambriza-cv': (
      <p>
        A modern, responsive portfolio website showcasing professional experience and projects. Built with 
        performance optimization in mind, featuring smooth animations, dark theme support, and an intuitive 
        user experience across all devices.
      </p>
    ),
    'image-slider': (
      <p>
        A reusable React component demonstrating modern carousel functionality with smooth transitions and 
        responsive design. Integrates with external APIs to dynamically load content and showcases best 
        practices for component architecture and state management.
      </p>
    ),
    'python-reports': (
      <p>
        A collection of data analysis tools and automated reporting scripts built with Python. Demonstrates 
        data processing capabilities, visualization techniques, and automated report generation for business 
        intelligence and analytics use cases.
      </p>
    ),
    'wine-quality': (
      <p>
        Statistical analysis project examining factors that influence wine quality ratings. Uses R programming 
        for data exploration, correlation analysis, and predictive modeling to identify key quality indicators 
        and patterns in wine characteristics.
      </p>
    ),
  };
  
  return overviews[slug] || <p>Detailed project information coming soon.</p>;
}

function getProjectFeatures(slug: string): string[] {
  const features: Record<string, string[]> = {
    'coronagora': [
      'Real-time COVID-19 data tracking',
      'Interactive charts and visualizations',
      'Global and regional statistics',
      'Responsive mobile-first design',
      'Fast loading with Next.js optimization',
      'Deployed on Vercel for reliability'
    ],
    'global-environmental-impact-calculator': [
      'Carbon footprint calculations',
      'Water usage tracking',
      'Waste generation metrics',
      'Interactive data visualization',
      'Responsive user interface',
      'Real-time impact calculations'
    ],
    'pmp-drill-coach': [
      'Comprehensive question bank',
      'Progress tracking and analytics',
      'Detailed answer explanations',
      'Timed practice sessions',
      'Performance insights',
      'Mobile-friendly interface'
    ],
    'eric-ambriza-cv': [
      'Modern responsive design',
      'Smooth animations and transitions',
      'Dark theme support',
      'Optimized performance',
      'SEO-friendly structure',
      'Cross-browser compatibility'
    ],
    'image-slider': [
      'Smooth carousel transitions',
      'Touch and swipe support',
      'API integration with Axios',
      'Material UI components',
      'Responsive design',
      'Reusable component architecture'
    ],
    'python-reports': [
      'Automated data processing',
      'Statistical analysis tools',
      'Report generation',
      'Data visualization',
      'Batch processing capabilities',
      'Modular script architecture'
    ],
    'wine-quality': [
      'Statistical data analysis',
      'Correlation analysis',
      'Predictive modeling',
      'Data visualization with R',
      'Quality factor identification',
      'Comprehensive reporting'
    ],
  };
  
  return features[slug] || ['Feature documentation coming soon'];
}

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
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Back Button */}
      <div className="text-center">
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
        {/* Action Buttons */}
        <div className="text-center py-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {project.url ? (
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
            ) : (
              <button
                disabled
                title="Demo coming soon"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-gray-600 text-gray-400 font-medium rounded-lg cursor-not-allowed opacity-50"
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
              </button>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-3 border border-white/20 text-text-primary font-medium rounded-lg hover:bg-white/5 transition-colors duration-200"
              >
                <span>View Repo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Project Embed */}
        {project.embed && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <iframe src={project.embed} className="w-full h-96 rounded-lg" title={project.title} />
          </div>
        )}

        {/* Overview Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="font-mono text-2xl font-bold tracking-wider text-text-primary uppercase mb-6 text-center">
              Overview
            </h2>
            <div className="text-text-secondary leading-relaxed space-y-4">
              <p>{project.blurb}</p>
              {getProjectOverview(project.slug)}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="font-mono text-2xl font-bold tracking-wider text-text-primary uppercase mb-6 text-center">
              Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {getProjectFeatures(project.slug).map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-orange rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="font-mono text-2xl font-bold tracking-wider text-text-primary uppercase mb-6 text-center">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {project.category.split(', ').map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent-orange/20 border border-accent-orange/30 rounded-full text-accent-orange text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="font-mono text-2xl font-bold tracking-wider text-text-primary uppercase mb-6 text-center">
              Links
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 border border-white/20 text-text-primary font-medium rounded-lg hover:bg-white/5 transition-colors duration-200"
                >
                  <span>Source Code</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-accent-orange text-white font-medium rounded-lg hover:bg-accent-orange/90 transition-colors duration-200"
                >
                  <span>Live Demo</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
