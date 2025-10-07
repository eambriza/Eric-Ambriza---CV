import Typewriter from '@/components/Typewriter'
import ScrollIndicator from '@/components/ScrollIndicator'
import { workExperience, education, skills } from '@/data/resume'

export default function Resume() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center min-h-screen">

        <div className="text-center space-y-8">
          {/* Main heading */}
          <h1
            className="glitch-text font-mono text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-text-primary uppercase"
            data-text="RESUME"
          >
            RESUME
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
              text="My professional journey and expertise"
              speed={70}
              className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            />
          </div>
        </div>
        {/* Scroll Indicator */}
        <ScrollIndicator />
      </div>

      {/* Content Section */}
      <div className="flex justify-center mt-40 mb-24">
        <div className="w-full max-w-[50%] space-y-16 md:space-y-16">
          {/* Work Experience */}
          <section>
            <h2 className="font-mono text-xl md:text-2xl font-bold tracking-wider text-text-primary uppercase mb-8">
              Work Experience
            </h2>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div key={index} className="border-l-2 border-accent-orange pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {job.title}
                    </h3>
                    <span className="text-text-secondary text-sm">
                      {job.years}
                    </span>
                  </div>
                  <p className="text-accent-orange font-medium mb-3">
                    {job.company}
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="font-mono text-xl md:text-2xl font-bold tracking-wider text-text-primary uppercase mb-8">
              Education
            </h2>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-accent-orange pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {edu.degree}
                    </h3>
                    <span className="text-text-secondary text-sm">
                      {edu.graduated}
                    </span>
                  </div>
                  <p className="text-accent-orange">
                    {edu.school}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="font-mono text-xl md:text-2xl font-bold tracking-wider text-text-primary uppercase mb-8">
              Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-text-primary font-medium">{skill.name}</span>
                    <span className="text-accent-orange text-sm">{skill.level}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-accent-orange h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
