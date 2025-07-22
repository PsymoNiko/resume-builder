// Fallback data for when API is unavailable
import type { ResumeData } from "./api"

export const fallbackResumeData: ResumeData = {
  personal_info: {
    id: 1,
    name: "Ali Mohammadnia",
    title: "Senior Backend Engineer",
    description:
      "A results-driven Senior Backend Engineer with over 6 years of experience in designing, developing, and deploying scalable, high-performance microservices and distributed systems. Proven ability to lead projects, optimize system architecture, and drive technical innovation in fast-paced environments.",
    email: "ali.mohammadnia.a@gmail.com",
    github_url: "https://github.com/ali-mohammadnia",
    linkedin_url: "https://www.linkedin.com/in/ali-mohammadnia/",
  },
  experiences: [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Snapp! - Ride Hailing",
      start_date: "2020-09-01",
      end_date: null,
      is_current: true,
      achievements: [
        "Spearheaded the backend development for the new generation of ride-hailing service, architected to handle over 1M daily requests and improving system scalability by 40%.",
        "Engineered and deployed a real-time monitoring and alerting system, resulting in a 99.9% uptime and reducing critical incident response time by 30%.",
        "Optimized database queries and caching strategies (Redis, Aerospike), which decreased average API response time by 200ms and enhanced user experience.",
        "Collaborated with a team of 10+ engineers, mentoring junior developers and leading code reviews to maintain high standards of code quality and consistency.",
        "Led the migration of legacy services to a modern microservices architecture using Go, Docker, and Kubernetes, improving deployment frequency by 50%.",
      ],
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Snapp! - Food",
      start_date: "2018-09-01",
      end_date: "2020-09-01",
      is_current: false,
      achievements: [
        "Developed and maintained multiple microservices for the food delivery platform using Go and Python, supporting a 200% growth in order volume over two years.",
        "Implemented a new asynchronous order processing system with RabbitMQ, which increased throughput by 60% during peak hours.",
        "Designed and integrated third-party payment gateways, expanding payment options for users and contributing to a 15% increase in conversion rates.",
        "Authored comprehensive unit and integration tests, achieving 90% code coverage and significantly reducing production bugs.",
      ],
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Asiatech",
      start_date: "2017-09-01",
      end_date: "2018-09-01",
      is_current: false,
      achievements: [
        "Developed a customer relationship management (CRM) panel using Java and Spring Framework, automating workflows that saved an estimated 20 hours of manual work per week.",
        "Maintained and enhanced legacy systems, successfully resolving over 100 bug tickets and improving system stability.",
      ],
    },
  ],
  skills: [
    { id: 1, name: "Go", years_experience: 6, proficiency_level: 9, category: "programming" },
    { id: 2, name: "Python", years_experience: 5, proficiency_level: 8, category: "programming" },
    { id: 3, name: "Java", years_experience: 2, proficiency_level: 6, category: "programming" },
    { id: 4, name: "PostgreSQL", years_experience: 6, proficiency_level: 8, category: "database" },
    { id: 5, name: "MongoDB", years_experience: 4, proficiency_level: 7, category: "database" },
    { id: 6, name: "Redis", years_experience: 5, proficiency_level: 8, category: "database" },
    { id: 7, name: "Kubernetes", years_experience: 4, proficiency_level: 7, category: "tool" },
    { id: 8, name: "Docker", years_experience: 5, proficiency_level: 8, category: "tool" },
    { id: 9, name: "AWS", years_experience: 4, proficiency_level: 7, category: "cloud" },
    { id: 10, name: "Microservices", years_experience: 6, proficiency_level: 9, category: "framework" },
  ],
  projects: [
    {
      id: 1,
      name: "Sart",
      description: "A high-performance, in-memory, and lock-free radix tree implementation in Go.",
      url: "https://github.com/ali-mohammadnia/sart",
      github_url: "https://github.com/ali-mohammadnia/sart",
      tags: ["Go", "Data Structures"],
      featured: true,
    },
    {
      id: 2,
      name: "RPC",
      description: "A simple RPC framework over TCP, supporting both JSON and Gob protocols.",
      url: "https://github.com/ali-mohammadnia/rpc",
      github_url: "https://github.com/ali-mohammadnia/rpc",
      tags: ["Go", "Networking", "TCP"],
      featured: true,
    },
    {
      id: 3,
      name: "Chapar",
      description: "A lightweight, flexible, and powerful HTTP client for Go, inspired by Postman.",
      url: "https://github.com/ali-mohammadnia/chapar",
      github_url: "https://github.com/ali-mohammadnia/chapar",
      tags: ["Go", "HTTP", "API Testing"],
      featured: true,
    },
  ],
  education: [
    {
      id: 1,
      degree: "M.Sc. in Computer Engineering",
      institution: "Amirkabir University of Technology",
      field_of_study: "Computer Engineering",
      start_year: 2018,
      end_year: 2021,
    },
    {
      id: 2,
      degree: "B.Sc. in Computer Engineering",
      institution: "Shahid Beheshti University",
      field_of_study: "Computer Engineering",
      start_year: 2014,
      end_year: 2018,
    },
  ],
  languages: [
    { id: 1, name: "Persian", proficiency: "Native" },
    { id: 2, name: "English", proficiency: "Professional Working Proficiency" },
  ],
  value_propositions: [
    {
      id: 1,
      role_type: "lead",
      title: "Lead Engineer",
      description:
        "As a <strong>Lead Engineer</strong>, I bring proven experience in spearheading backend development for large-scale systems. My work on the ride-hailing platform involved architecting for over 1M daily requests, mentoring a team of 10+ engineers, and leading the migration to a modern microservices stack. I excel at driving technical vision and ensuring high standards of code quality and system reliability.",
    },
    {
      id: 2,
      role_type: "cloud",
      title: "Cloud & DevOps Specialist",
      description:
        "As a <strong>Cloud & DevOps Specialist</strong>, I have hands-on experience deploying and managing systems using Docker, Kubernetes, and AWS. I've successfully led migrations to microservices architectures, improving deployment frequency by 50%. My expertise in containerization, orchestration, and cloud infrastructure enables me to build scalable, resilient systems that can handle enterprise-level traffic and demands.",
    },
    {
      id: 3,
      role_type: "performance",
      title: "Performance & Scalability Expert",
      description:
        "As a <strong>Performance & Scalability Expert</strong>, I have a track record of optimizing systems for high throughput and low latency. I've reduced API response times by 200ms through database query optimization and caching strategies, implemented asynchronous processing systems that increased throughput by 60%, and architected solutions that handle over 1M daily requests. My focus is on building systems that perform exceptionally under pressure.",
    },
  ],
}
