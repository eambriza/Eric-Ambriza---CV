import { personalInfo } from '@/data/resume'

export default function Contact() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Header */}
      <div className="text-center">
        <h1 className="font-mono text-3xl md:text-4xl font-bold tracking-wider text-text-primary uppercase mb-4">
          Contact
        </h1>
        <p className="text-text-secondary text-lg">
          Let's connect and discuss opportunities
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="space-y-8">
          <h2 className="font-mono text-xl font-bold tracking-wider text-text-primary uppercase">
            Get In Touch
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">Email</h3>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-text-secondary hover:text-accent-orange transition-colors duration-200"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">Phone</h3>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-text-secondary hover:text-accent-orange transition-colors duration-200"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">Location</h3>
                <p className="text-text-secondary">
                  {personalInfo.address.city}, {personalInfo.address.state}
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-mono text-lg font-bold tracking-wider text-text-primary uppercase mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-accent-orange/20 hover:border-accent-orange/30 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-text-secondary hover:text-accent-orange transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a
                href="https://www.linkedin.com/in/ericambriza/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-accent-orange/20 hover:border-accent-orange/30 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-text-secondary hover:text-accent-orange transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-accent-orange/20 hover:border-accent-orange/30 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-text-secondary hover:text-accent-orange transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
          <h3 className="font-mono text-xl font-bold tracking-wider text-text-primary uppercase mb-6">
            Let's Work Together
          </h3>
          
          <div className="space-y-6">
            <p className="text-text-secondary leading-relaxed">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to connect, feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}?subject=Portfolio Inquiry`}
                className="block w-full text-center px-6 py-3 bg-accent-orange text-white font-medium rounded-lg hover:bg-accent-orange/90 transition-colors duration-200"
              >
                Send Email
              </a>
              
              <a
                href={personalInfo.resumeDownload}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 border border-accent-orange text-accent-orange font-medium rounded-lg hover:bg-accent-orange hover:text-white transition-colors duration-200"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}