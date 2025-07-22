export default function AdditionalInfoSection() {
  const additionalSkills = [
    {
      category: "Development Tools",
      items: ["PyCharm", "VSCode", "Vim", "Jupyter Notebook", "Replit", "SublimeText", "Atom"],
    },
    {
      category: "Operating Systems",
      items: ["Linux (Fedora, Ubuntu)", "Termux"],
    },
    {
      category: "Project Management",
      items: ["Jira", "Trello", "Slack", "Agile", "SCRUM"],
    },
    {
      category: "Testing",
      items: ["Unit Testing", "Integration Testing", "Functional Testing", "Selenium"],
    },
    {
      category: "Monitoring & Analytics",
      items: ["Jaeger", "Prometheus", "Grafana", "K6", "Locust", "Sentry"],
    },
    {
      category: "Search & Analytics",
      items: ["Elasticsearch", "Logstash", "Kibana (ELK Stack)"],
    },
    {
      category: "Architecture & Design",
      items: ["GOF Design Patterns", "Data Structures", "DDD", "TDD"],
    },
  ]

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ali-mohammadnia/" },
    { name: "GitHub", url: "https://github.com/ali-mohammadnia" },
    { name: "StackOverflow", url: "#" },
    { name: "SoloLearn", url: "#" },
    { name: "GitLab", url: "#" },
  ]

  return (
    <section id="additional-info" className="mb-24">
      <h3 className="text-3xl font-bold text-center mb-12">Additional Skills & Information</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {additionalSkills.map((skillGroup, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-lg font-semibold text-[#4A90E2] mb-3">{skillGroup.category}</h4>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, itemIndex) => (
                <span key={itemIndex} className="bg-gray-100 text-gray-700 px-2 py-1 text-sm rounded-md">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h4 className="text-xl font-semibold mb-4 text-center">Professional Links</h4>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4A90E2] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-xl">
        <h4 className="text-lg font-semibold text-[#4A90E2] mb-2">Personal Information</h4>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <p>
            <strong>Phone:</strong> +989102001647
          </p>
          <p>
            <strong>Birth Date:</strong> May 21, 1997
          </p>
          <p>
            <strong>Location:</strong> Tehran, Iran
          </p>
          <p>
            <strong>Experience:</strong> 4+ years in programming
          </p>
        </div>
      </div>
    </section>
  )
}
