import { workExperience, education, skills } from '@/data/resume'

export default function Resume() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="font-mono text-3xl md:text-4xl font-bold tracking-wider text-text-primary uppercase mb-4">
          Resume
        </h1>
        <p className="text-text-secondary text-lg">
          My professional journey and expertise
        </p>
      </div>

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
  )
}