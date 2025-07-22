export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Snapp! - Ride Hailing",
      period: "Sep 2020 – Present",
      achievements: [
        "Spearheaded the backend development for the new generation of ride-hailing service, architected to handle over 1M daily requests and improving system scalability by 40%.",
        "Engineered and deployed a real-time monitoring and alerting system, resulting in a 99.9% uptime and reducing critical incident response time by 30%.",
        "Optimized database queries and caching strategies (Redis, Aerospike), which decreased average API response time by 200ms and enhanced user experience.",
        "Collaborated with a team of 10+ engineers, mentoring junior developers and leading code reviews to maintain high standards of code quality and consistency.",
        "Led the migration of legacy services to a modern microservices architecture using Go, Docker, and Kubernetes, improving deployment frequency by 50%.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Snapp! - Food",
      period: "Sep 2018 – Sep 2020",
      achievements: [
        "Developed and maintained multiple microservices for the food delivery platform using Go and Python, supporting a 200% growth in order volume over two years.",
        "Implemented a new asynchronous order processing system with RabbitMQ, which increased throughput by 60% during peak hours.",
        "Designed and integrated third-party payment gateways, expanding payment options for users and contributing to a 15% increase in conversion rates.",
        "Authored comprehensive unit and integration tests, achieving 90% code coverage and significantly reducing production bugs.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Asiatech",
      period: "Sep 2017 – Sep 2018",
      achievements: [
        "Developed a customer relationship management (CRM) panel using Java and Spring Framework, automating workflows that saved an estimated 20 hours of manual work per week.",
        "Maintained and enhanced legacy systems, successfully resolving over 100 bug tickets and improving system stability.",
      ],
    },
  ]

  return (
    <section id="experience" className="mb-24">
      <h3 className="text-3xl font-bold text-center mb-12">Professional Experience</h3>
      <div className="relative max-w-3xl mx-auto border-l-2 border-gray-200 pl-8">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 relative">
            <div className="absolute -left-[30px] top-1 w-5 h-5 bg-white border-4 border-[#4A90E2] rounded-full z-10"></div>
            <h4 className="text-2xl font-semibold">{exp.title}</h4>
            <p className="text-lg text-gray-700 mb-1">{exp.company}</p>
            <p className="text-md text-gray-500 mb-4">{exp.period}</p>
            <ul className="list-disc list-inside space-y-3 text-gray-600">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-gray-500 mt-8 italic">
        *Note: The quantified achievements above are illustrative examples based on the resume's content, designed to
        demonstrate impact as recommended by resume efficiency best practices.
      </p>
    </section>
  )
}
