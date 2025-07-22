"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["experience", "skills", "projects", "value", "education", "additional-info"]
      let current = ""

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = sectionId
          }
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "value", label: "Value Proposition" },
    { id: "additional-info", label: "Additional Info" },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold text-[#2c3e50] hover:text-[#4A90E2] transition-colors"
        >
          Ali Mohammadnia
        </button>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link transition-colors duration-300 border-b-2 border-transparent hover:text-[#4A90E2] hover:border-[#4A90E2] ${
                activeSection === item.id ? "text-[#4A90E2] border-[#4A90E2]" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="mailto:ali.mohammadnia.a@gmail.com"
          className="hidden md:block bg-[#4A90E2] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Contact Me
        </a>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-2xl">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 border-t">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block text-center py-2 text-lg w-full hover:text-[#4A90E2] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="mailto:ali.mohammadnia.a@gmail.com"
            className="block text-center w-1/2 mx-auto mt-4 bg-[#4A90E2] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  )
}
