"use client"

import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function SoftWashRedirect() {
  useEffect(() => {
    window.location.href = "/services/softwash"
  }, [])
  
  return null
}
