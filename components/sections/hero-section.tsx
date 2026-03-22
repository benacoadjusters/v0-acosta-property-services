"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Shield, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { company } from "@/content/company"

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - redirect to contact page with data
    const params = new URLSearchParams({
      name: formData.name,
      phone: formData.phone,
      service: formData.service,
    })
    window.location.href = `/contact?${params.toString()}`
  }

  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Shield className="h-4 w-4" />
              <span>Trusted Pest Control in Puerto Rico</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Protecting What Matters Most
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Professional pest control services for homes and businesses across Puerto Rico. 
              Fast response, effective treatments, and guaranteed results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-semibold">
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold">
                <a href={`tel:${company.phoneClean}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4">
              {company.trustPoints.slice(0, 4).map((point, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{point.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Quote Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Get Your Free Quote</h2>
              <p className="text-muted-foreground">Fill out the form and we'll contact you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(787) 555-0123"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Needed</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Pest Control</SelectItem>
                    <SelectItem value="termite">Termite Control</SelectItem>
                    <SelectItem value="rodent">Rodent Control</SelectItem>
                    <SelectItem value="mosquito">Mosquito Control</SelectItem>
                    <SelectItem value="commercial">Commercial Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Request Free Quote
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By submitting, you agree to our{" "}
                <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>
              </p>
            </form>

            <div className="mt-6 pt-6 border-t flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Same-day service available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
