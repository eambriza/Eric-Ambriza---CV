import Typewriter from '@/components/Typewriter'

export default function Landing() {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="text-center space-y-8">
        {/* Main heading */}
        <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest text-text-primary uppercase">
          I'M ERIC AMBRIZA
        </h1>
        
        {/* Typing line under H1 */}
        <div className="min-h-[3rem] flex items-center justify-center">
          <Typewriter 
            text="Full Stack Developer & Data Analyst"
            speed={70}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          />
        </div>
      </div>
    </div>
  )
}