import type { Experience } from "@/lib/api"

interface ExperienceSectionProps {
  experiences: Experience[]
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    })
  }

  const formatPeriod = (startDate: string, endDate: string | null, isCurrent: boolean) => {
    const start = formatDate(startDate)
    const end = isCurrent ? "Present" : endDate ? formatDate(endDate) : "Present"
    return `${start} – ${end}`
  }

  return (
    <section id="experience" className="mb-24">
      <h3 className="text-3xl font-bold text-center mb-12">Professional Experience</h3>
      <div className="relative max-w-3xl mx-auto border-l-2 border-gray-200 pl-8">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="mb-12 relative">
            <div className="absolute -left-[30px] top-1 w-5 h-5 bg-white border-4 border-[#4A90E2] rounded-full z-10"></div>
            <h4 className="text-2xl font-semibold">{exp.title}</h4>
            <p className="text-lg text-gray-700 mb-1">{exp.company}</p>
            <p className="text-md text-gray-500 mb-4">{formatPeriod(exp.start_date, exp.end_date, exp.is_current)}</p>
            <ul className="list-disc list-inside space-y-3 text-gray-600">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
