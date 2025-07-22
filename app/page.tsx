"use client"

import { useResumeData } from "@/hooks/useResumeData"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ValuePropositionSection from "@/components/value-proposition-section"
import EducationSection from "@/components/education-section"
import LoadingSpinner from "@/components/loading-spinner"
import ErrorMessage from "@/components/error-message"
import ApiStatusBanner from "@/components/api-status-banner"
import AdditionalInfoSection from "@/components/additional-info-section"

export default function ResumePage() {
  const { data, loading, error, isUsingFallback, refetch } = useResumeData()

  if (loading) {
    return <LoadingSpinner />
  }

  if (!data && error && !isUsingFallback) {
    return <ErrorMessage message={error} onRetry={refetch} />
  }

  if (!data) {
    return <ErrorMessage message="No data available" onRetry={refetch} />
  }

  return (
    <div className="antialiased bg-[#F8F7F4] text-[#2c3e50]">
      <Navigation />

      <main className="container mx-auto px-6 py-12">
        <ApiStatusBanner isUsingFallback={isUsingFallback} error={error} onRetry={refetch} />

        <HeroSection personalInfo={data.personal_info} />
        <ExperienceSection experiences={data.experiences} />
        <SkillsSection skills={data.skills} />
        <ProjectsSection projects={data.projects} />
        <ValuePropositionSection valuePropositions={data.value_propositions} />
        <EducationSection education={data.education} languages={data.languages} />
        <AdditionalInfoSection />
      </main>

      <footer className="bg-gray-800 text-white mt-24 py-6">
        <div className="container mx-auto text-center">
          <p>
            &copy; 2024 {data.personal_info.name}. Interactive resume created to demonstrate modern application
            practices.
          </p>
        </div>
      </footer>
    </div>
  )
}
