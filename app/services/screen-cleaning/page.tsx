"use client"

import { useEffect } from "react"

export default function ScreenCleaningRedirect() {
  useEffect(() => {
    window.location.href = "/services/screens"
  }, [])
  
  return null
}
