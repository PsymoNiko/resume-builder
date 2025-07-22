import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ValuePropositionSection from "@/components/value-proposition-section"
import EducationSection from "@/components/education-section"

export default function ResumePage() {
  return (
    <div className="antialiased bg-[#F8F7F4] text-[#2c3e50]">
      <Navigation />

      <main className="container mx-auto px-6 py-12">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ValuePropositionSection />
        <EducationSection />
      </main>

      <footer className="bg-gray-800 text-white mt-24 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Ali Mohammadnia. Interactive resume created to demonstrate modern application practices.</p>
        </div>
      </footer>
    </div>
  )
}
