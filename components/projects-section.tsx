import { ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      name: "Sart",
      description: "A high-performance, in-memory, and lock-free radix tree implementation in Go.",
      url: "https://github.com/ali-mohammadnia/sart",
      tags: ["Go", "Data Structures"],
    },
    {
      name: "RPC",
      description: "A simple RPC framework over TCP, supporting both JSON and Gob protocols.",
      url: "https://github.com/ali-mohammadnia/rpc",
      tags: ["Go", "Networking", "TCP"],
    },
    {
      name: "Chapar",
      description: "A lightweight, flexible, and powerful HTTP client for Go, inspired by Postman.",
      url: "https://github.com/ali-mohammadnia/chapar",
      tags: ["Go", "HTTP", "API Testing"],
    },
  ]

  return (
    <section id="projects" className="mb-24">
      <h3 className="text-3xl font-bold text-center mb-12">Key Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-xl font-bold text-[#4A90E2] group-hover:text-blue-600 transition-colors">
                {project.name}
              </h4>
              <ExternalLink size={16} className="text-gray-400 group-hover:text-[#4A90E2] transition-colors" />
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="bg-gray-200 text-gray-700 px-2 py-1 text-sm rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
