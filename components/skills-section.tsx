"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

export default function SkillsSection() {
  const skillsData = [
    { skill: "Go", years: 6 },
    { skill: "Python", years: 5 },
    { skill: "Java", years: 2 },
    { skill: "PostgreSQL", years: 6 },
    { skill: "MongoDB", years: 4 },
    { skill: "Redis", years: 5 },
    { skill: "Kubernetes", years: 4 },
    { skill: "Docker", years: 5 },
    { skill: "AWS", years: 4 },
    { skill: "Microservices", years: 6 },
  ]

  return (
    <section id="skills" className="mb-24">
      <h3 className="text-3xl font-bold text-center mb-12">Technical Skills</h3>
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={skillsData} layout="horizontal" margin={{ top: 20, right: 30, left: 80, bottom: 5 }}>
              <XAxis
                type="number"
                domain={[0, 7]}
                label={{ value: "Years of Experience", position: "insideBottom", offset: -5 }}
              />
              <YAxis type="category" dataKey="skill" width={80} tick={{ fontSize: 14 }} />
              <Tooltip
                formatter={(value) => [`${value} years (Illustrative)`, "Experience"]}
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
