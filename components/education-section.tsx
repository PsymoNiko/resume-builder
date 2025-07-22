import type { Education, Language } from "@/lib/api"

interface EducationSectionProps {
  education: Education[]
  languages: Language[]
}

export default function EducationSection({ education, languages }: EducationSectionProps) {
  return (
    <section id="education" className="text-center mb-24">
      <h3 className="text-3xl font-bold mb-8">Education & Languages</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-2xl font-semibold mb-4">Education</h4>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id}>
                <p className="text-lg font-medium">{edu.degree}</p>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500 text-sm">
                  {edu.start_year} – {edu.end_year}
                </p>
                {edu.field_of_study && <p className="text-gray-600 text-sm">{edu.field_of_study}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-2xl font-semibold mb-4">Languages</h4>
          <div className="space-y-3">
            {languages.map((language) => (
              <div key={language.id} className="flex justify-between items-center">
                <span className="text-lg font-medium">{language.name}</span>
                <span className="text-gray-500">({language.proficiency})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
