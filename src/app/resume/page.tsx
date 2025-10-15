import Typewriter from "@/components/Typewriter";
import ScrollIndicator from "@/components/ScrollIndicator";
import Timeline from "@/components/Timeline";
import { workExperience, education, skills, certifications } from "@/data/resume";
import {
  SiMeta,
  SiClickup,
  SiCoursera,
  SiUdacity
} from "react-icons/si";
import { FaGraduationCap, FaDatabase } from "react-icons/fa";

export default function Resume() {
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
        {/* Main heading centered, nudged slightly up */}
        <h1
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2
                     text-center glitch-text font-mono text-4xl md:text-6xl lg:text-7xl
                     font-bold tracking-[0.2em] text-text-primary uppercase"
          style={{ top: "calc(50% - (var(--nav-h) + var(--main-py)) / 2 - 0.25em)" }}
          data-text="RESUME"
        >
          RESUME
        </h1>

        {/* Underline + subtitle */}
        <div
          className="absolute left-1/2 -translate-x-1/2 text-center space-y-6"
          style={{
            top:
              "calc(50% - (var(--nav-h) + var(--main-py)) / 2 - 0.25em + 2.25rem)",
          }}
        >
          <div className="mx-auto h-0.5 w-16 md:w-24 lg:w-32 bg-accent-orange animate-pulse" />
          <Typewriter
            text="My professional journey and expertise"
            speed={70}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          />
        </div>

        {/* Scroll cue */}
        <ScrollIndicator className="absolute bottom-8 left-1/2 -translate-x-1/2" />
      </section>

      {/* Content */}
      <div className="space-y-0">

        {/* Work Experience */}
        <section className="bg-black/20 py-32 -mx-10">
          <div className="flex justify-center px-10">
            <div className="w-full max-w-[50%]">
              <h2 className="font-mono text-xl md:text-2xl font-bold tracking-wider text-text-primary uppercase mb-8 text-center">
                Work Experience
              </h2>

              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div key={index} className="border-l-2 border-accent-orange pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-text-primary">
                        {job.title}
                      </h3>
                      <span className="text-text-secondary text-sm">{job.years}</span>
                    </div>
                    <p className="text-accent-orange font-medium mb-3">{job.company}</p>
                    {job.bullets ? (
                      <ul className="text-text-secondary leading-relaxed space-y-2">
                        {job.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start">
                            <span className="text-accent-orange mr-2 mt-1 text-xs">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-text-secondary leading-relaxed">
                        {job.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-48">
          <div className="flex justify-center">
            <div className="w-full max-w-[60%]">
              <h2 className="font-mono text-xl md:text-2xl font-bold tracking-wider text-text-primary uppercase mb-12 text-center">
                Education
              </h2>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-accent-orange/30 transform transition-all duration-300 hover:scale-105 hover:bg-black/45 hover:border-accent-orange/90">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                        <FaGraduationCap className="w-6 h-6 text-accent-orange" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-text-primary mb-2 leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-accent-orange font-medium text-sm mb-2">
                          {edu.school}
                        </p>
                        <div className="flex items-center text-text-secondary">
                          <span className="text-sm">{edu.graduated}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="bg-black/20 py-32 -mx-10">
          <div className="flex justify-center px-10">
            <div className="w-full max-w-[50%]">
              <h2 className="font-mono text-xl md:text-2xl font-bold tracking-wider text-text-primary uppercase mb-8 text-center">
                Technical Skills
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skillCategory, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-accent-orange font-semibold text-lg">
                      {skillCategory.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-white/10 text-text-secondary rounded-full text-sm border border-white/20 hover:border-accent-orange transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        

        {/* Timeline Component Test */}
        <section className="py-16 mb-24">
          <div className="flex justify-center">
            <div className="w-full max-w-[70%]">
              <h2 className="font-mono text-xl md:text-2xl font-bold tracking-wider text-text-primary uppercase mb-12 text-center">
                Certifications
              </h2>
              <Timeline />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
