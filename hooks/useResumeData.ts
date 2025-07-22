"use client"

import { useState, useEffect } from "react"
import apiClient, { type ResumeData } from "@/lib/api"

interface UseResumeDataReturn {
  data: ResumeData | null
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useResumeData(): UseResumeDataReturn {
  const [data, setData] = useState<ResumeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      const resumeData = await apiClient.getResumeData()
      setData(resumeData)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      console.error("Error fetching resume data:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  }
}
