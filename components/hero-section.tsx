import { Github, Linkedin, Mail } from "lucide-react"
import type { PersonalInfo } from "@/lib/api"

interface HeroSectionProps {
  personalInfo: PersonalInfo
}

export default function HeroSection({ personalInfo }: HeroSectionProps) {
  return (
    <section id="hero" className="text-center mb-24">
      <h1 className="text-4xl md:text-6xl font-bold text-[#2c3e50] mb-4">{personalInfo.name}</h1>
      <h2 className="text-2xl md:text-3xl text-[#4A90E2] font-semibold mb-6">{personalInfo.title}</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">{personalInfo.description}</p>
      <div className="flex justify-center space-x-6">
        {personalInfo.github_url && (
          <a
            href={personalInfo.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-[#4A90E2] transition-colors"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
        )}
        {personalInfo.linkedin_url && (
          <a
            href={personalInfo.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-[#4A90E2] transition-colors"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
        )}
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex items-center space-x-2 text-gray-600 hover:text-[#4A90E2] transition-colors"
        >
          <Mail size={24} />
          <span>Email</span>
        </a>
      </div>
    </section>
  )
}
