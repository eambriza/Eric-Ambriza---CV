import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import ScrollIndicator from "@/components/ScrollIndicator";
import { newProjects, oldProjects } from "@/data/projects";

export default function Portfolio() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="
          relative
          min-h-[calc(100svh-var(--frame-inset)-var(--nav-h)-var(--main-py))]
          px-6
        "
      >
        {/* Main heading centered relative to the whole card, nudged slightly up */}
        <h1
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2
                     text-center glitch-text font-mono text-4xl md:text-6xl lg:text-7xl
                     font-bold tracking-[0.2em] text-text-primary uppercase"
          style={{ top: "calc(50% - (var(--nav-h) + var(--main-py)) / 2 - 0.25em)" }}
          data-text="PORTFOLIO"
        >
          PORTFOLIO
        </h1>

        {/* Underline + subtitle positioned below the adjusted midline */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center space-y-6"
          style={{
            top:
              "calc(50% - (var(--nav-h) + var(--main-py)) / 2 - 0.25em + 2.25rem)",
          }}
        >
          <div className="mx-auto h-0.5 w-16 md:w-24 lg:w-32 bg-accent-orange animate-pulse" />
          <Typewriter
            text="A showcase of my work and projects"
            speed={70}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          />
        </div>

        <ScrollIndicator className="absolute bottom-8 left-1/2 -translate-x-1/2" />
      </section>

      {/* Content Section */}
      <div className="flex justify-center mt-44 mb-24">
        <div className="w-full max-w-[50%] space-y-24">
          {/* New Projects Section */}
          <div>
            <div className="grid md:grid-cols-2 gap-8">
              {newProjects.map((project) => (
                <div key={project.slug} className="group h-full">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-accent-orange/20 to-accent-orange/5 rounded-lg mb-6 flex items-center justify-center">
                      <span className="text-4xl opacity-50">🚀</span>
                    </div>
                    <div className="space-y-4 flex-1 flex flex-col">
                      <div className="flex-1">
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
                      <div className="flex flex-wrap gap-4 pt-4 mt-auto">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="text-text-primary hover:text-accent-orange transition-colors duration-200 text-sm font-medium"
                        >
                          View Details →
                        </Link>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-accent-orange transition-colors duration-200 text-sm font-medium"
                          >
                            GitHub ↗
                          </a>
                        )}
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

          {/* Old Projects Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="font-mono text-2xl md:text-3xl font-bold tracking-wider text-text-primary uppercase mb-4">
                Old Projects (2020)
              </h2>
              <div className="mx-auto h-0.5 w-16 md:w-24 bg-accent-orange/50" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {oldProjects.map((project) => (
                <div key={project.slug} className="group h-full">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-accent-orange/20 to-accent-orange/5 rounded-lg mb-6 flex items-center justify-center">
                      <span className="text-4xl opacity-50">🚀</span>
                    </div>
                    <div className="space-y-4 flex-1 flex flex-col">
                      <div className="flex-1">
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
                      <div className="flex flex-wrap gap-4 pt-4 mt-auto">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="text-text-primary hover:text-accent-orange transition-colors duration-200 text-sm font-medium"
                        >
                          View Details →
                        </Link>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-accent-orange transition-colors duration-200 text-sm font-medium"
                          >
                            GitHub ↗
                          </a>
                        )}
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
    </div>
  );
}
