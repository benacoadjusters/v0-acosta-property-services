"use client"

import { useEffect } from "react"

export default function SoftWashRedirect() {
  useEffect(() => {
    window.location.href = "/services/softwash"
  }, [])
  
  return null
}
