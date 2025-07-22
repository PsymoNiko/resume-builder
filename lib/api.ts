// API configuration and types
export interface ApiConfig {
  baseUrl: string
  timeout?: number
}

export interface PersonalInfo {
  id: number
  name: string
  title: string
  description: string
  email: string
  github_url: string
  linkedin_url: string
}

export interface Experience {
  id: number
  title: string
  company: string
  start_date: string
  end_date: string | null
  is_current: boolean
  achievements: string[]
}

export interface Skill {
  id: number
  name: string
  years_experience: number
  proficiency_level: number
  category: string
}

export interface Project {
  id: number
  name: string
  description: string
  url: string
  github_url?: string
  tags: string[]
  featured: boolean
}

export interface Education {
  id: number
  degree: string
  institution: string
  start_year: number
  end_year: number
  field_of_study: string
}

export interface Language {
  id: number
  name: string
  proficiency: string
}

export interface ValueProposition {
  id: number
  role_type: string
  title: string
  description: string
}

export interface ResumeData {
  personal_info: PersonalInfo
  experiences: Experience[]
  skills: Skill[]
  projects: Project[]
  education: Education[]
  languages: Language[]
  value_propositions: ValueProposition[]
}

// API client class
class ApiClient {
  private baseUrl: string
  private timeout: number

  constructor(config: ApiConfig) {
    this.baseUrl = config.baseUrl.replace(/\/$/, "") // Remove trailing slash
    this.timeout = config.timeout || 10000
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.timeout)

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      clearTimeout(timeoutId)
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error("Request timeout")
      }
      throw error
    }
  }

  async getPersonalInfo(): Promise<PersonalInfo> {
    return this.request<PersonalInfo>("/api/personal-info/")
  }

  async getExperiences(): Promise<Experience[]> {
    return this.request<Experience[]>("/api/experiences/")
  }

  async getSkills(): Promise<Skill[]> {
    return this.request<Skill[]>("/api/skills/")
  }

  async getProjects(): Promise<Project[]> {
    return this.request<Project[]>("/api/projects/")
  }

  async getEducation(): Promise<Education[]> {
    return this.request<Education[]>("/api/education/")
  }

  async getLanguages(): Promise<Language[]> {
    return this.request<Language[]>("/api/languages/")
  }

  async getValuePropositions(): Promise<ValueProposition[]> {
    return this.request<ValueProposition[]>("/api/value-propositions/")
  }

  async getResumeData(): Promise<ResumeData> {
    // Fetch all data in parallel
    const [personal_info, experiences, skills, projects, education, languages, value_propositions] = await Promise.all([
      this.getPersonalInfo(),
      this.getExperiences(),
      this.getSkills(),
      this.getProjects(),
      this.getEducation(),
      this.getLanguages(),
      this.getValuePropositions(),
    ])

    return {
      personal_info,
      experiences,
      skills,
      projects,
      education,
      languages,
      value_propositions,
    }
  }
}

// Create API client instance
const apiClient = new ApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  timeout: 10000,
})

export default apiClient
