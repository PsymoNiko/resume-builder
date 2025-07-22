import { Github, Linkedin } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="hero" className="text-center mb-24">
      <h1 className="text-4xl md:text-6xl font-bold text-[#2c3e50] mb-4">Ali Mohammadnia</h1>
      <h2 className="text-2xl md:text-3xl text-[#4A90E2] font-semibold mb-6">Senior Backend Engineer</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
        A results-driven Senior Backend Engineer with over 6 years of experience in designing, developing, and deploying
        scalable, high-performance microservices and distributed systems. Proven ability to lead projects, optimize
        system architecture, and drive technical innovation in fast-paced environments.
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/ali-mohammadnia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 hover:text-[#4A90E2] transition-colors"
        >
          <Github size={24} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ali-mohammadnia/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 hover:text-[#4A90E2] transition-colors"
        >
          <Linkedin size={24} />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  )
}
