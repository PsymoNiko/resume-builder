"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import type { Skill } from "@/lib/api"

interface SkillsSectionProps {
  skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const chartData = skills.map((skill) => ({
    skill: skill.name,
    years: skill.years_experience,
    proficiency: skill.proficiency_level,
  }))

  return (
    <section id="skills" className="mb-24">
      <h3 className="text-3xl font-bold text-center mb-12">Technical Skills</h3>
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="horizontal" margin={{ top: 20, right: 30, left: 80, bottom: 5 }}>
              <XAxis
                type="number"
                domain={[0, "dataMax"]}
                label={{ value: "Years of Experience", position: "insideBottom", offset: -5 }}
              />
              <YAxis type="category" dataKey="skill" width={80} tick={{ fontSize: 14 }} />
              <Tooltip
                formatter={(value, name) => [`${value} years`, name === "years" ? "Experience" : "Proficiency"]}
                labelStyle={{ color: "#2c3e50" }}
              />
              <Bar dataKey="years" fill="#4A90E2" fillOpacity={0.8} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}
