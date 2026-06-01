"use client"

import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function ScreenCleaningRedirect() {
  useEffect(() => {
    window.location.href = "/services/screens"
  }, [])
  
  return null
}
