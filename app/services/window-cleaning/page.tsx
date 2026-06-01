"use client"

import { useEffect } from "react"

export default function WindowCleaningRedirect() {
  useEffect(() => {
    window.location.href = "/services/windows"
  }, [])
  
  return null
}
