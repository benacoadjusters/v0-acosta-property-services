"use client"

import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function SolarPanelCleaningRedirect() {
  useEffect(() => {
    window.location.href = "/services/solarpanel"
  }, [])
  
  return null
}
