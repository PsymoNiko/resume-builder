"use client"

import { useState } from "react"
import type { ValueProposition } from "@/lib/api"

interface ValuePropositionSectionProps {
  valuePropositions: ValueProposition[]
}

export default function ValuePropositionSection({ valuePropositions }: ValuePropositionSectionProps) {
  const [selectedRole, setSelectedRole] = useState(valuePropositions[0]?.role_type || "")

  const selectedProposition = valuePropositions.find((vp) => vp.role_type === selectedRole)

  if (valuePropositions.length === 0) {
    return null
  }

  return (
    <section id="value" className="mb-24 text-center">
      <h3 className="text-3xl font-bold mb-4">My Value Proposition</h3>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
        My experience is versatile. Click below to see how my skills align with different potential roles, demonstrating
        my ability to deliver value across various engineering challenges.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {valuePropositions.map((vp) => (
          <button
            key={vp.id}
            onClick={() => setSelectedRole(vp.role_type)}
            className={`px-5 py-2 rounded-lg transition-all duration-300 ${
              selectedRole === vp.role_type
                ? "bg-[#4A90E2] text-white shadow-md"
                : "bg-white text-[#4A90E2] border border-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
            }`}
          >
            {vp.title}
          </button>
        ))}
      </div>

      {selectedProposition && (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md text-left">
          <p
            className="text-gray-700 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: selectedProposition.description }}
          />
        </div>
      )}
    </section>
  )
}
