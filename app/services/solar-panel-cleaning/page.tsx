"use client"

import { useEffect } from "react"

export default function SolarPanelCleaningRedirect() {
  useEffect(() => {
    window.location.href = "/services/solarpanel"
  }, [])
  
  return null
}
