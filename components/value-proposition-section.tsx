"use client"

import { useState } from "react"

export default function ValuePropositionSection() {
  const [selectedRole, setSelectedRole] = useState("lead")

  const valuePropositions = {
    lead: `As a <strong>Lead Engineer</strong>, I bring proven experience in spearheading backend development for large-scale systems. My work on the ride-hailing platform involved architecting for over 1M daily requests, mentoring a team of 10+ engineers, and leading the migration to a modern microservices stack. I excel at driving technical vision and ensuring high standards of code quality and system reliability.`,
    cloud: `As a <strong>Cloud & DevOps Specialist</strong>, I have hands-on experience deploying and managing systems using Docker, Kubernetes, and AWS. I've successfully led migrations to microservices architectures, improving deployment frequency by 50%. My expertise in containerization, orchestration, and cloud infrastructure enables me to build scalable, resilient systems that can handle enterprise-level traffic and demands.`,
    performance: `As a <strong>Performance & Scalability Expert</strong>, I have a track record of optimizing systems for high throughput and low latency. I've reduced API response times by 200ms through database query optimization and caching strategies, implemented asynchronous processing systems that increased throughput by 60%, and architected solutions that handle over 1M daily requests. My focus is on building systems that perform exceptionally under pressure.`,
  }

  const roles = [
    { key: "lead", label: "Lead Engineer" },
    { key: "cloud", label: "Cloud & DevOps Specialist" },
    { key: "performance", label: "Performance & Scalability Expert" },
  ]

  return (
    <section id="value" className="mb-24 text-center">
      <h3 className="text-3xl font-bold mb-4">My Value Proposition</h3>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
        My experience is versatile. Click below to see how my skills align with different potential roles, demonstrating
        my ability to deliver value across various engineering challenges.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {roles.map((role) => (
          <button
            key={role.key}
            onClick={() => setSelectedRole(role.key)}
            className={`px-5 py-2 rounded-lg transition-all duration-300 ${
              selectedRole === role.key
                ? "bg-[#4A90E2] text-white shadow-md"
                : "bg-white text-[#4A90E2] border border-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
            }`}
          >
            {role.label}
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md text-left">
        <p
          className="text-gray-700 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: valuePropositions[selectedRole as keyof typeof valuePropositions] }}
        />
      </div>
    </section>
  )
}
