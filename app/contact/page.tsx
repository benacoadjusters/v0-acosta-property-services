"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { company } from "@/content/company"
import { serviceAreas } from "@/content/service-areas"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    area: "",
    message: "",
    preferredContact: "phone",
  })

  // Pre-fill from URL params (from quick quote form)
  useEffect(() => {
    const name = searchParams.get("name")
    const phone = searchParams.get("phone")
    const service = searchParams.get("service")
    
    if (name || phone || service) {
      setFormData(prev => ({
        ...prev,
        name: name || prev.name,
        phone: phone || prev.phone,
        service: service || prev.service,
      }))
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We've received your request and will contact you within 24 hours. For immediate assistance, call us at{" "}
              <a href={`tel:${company.phoneClean}`} className="text-primary font-medium">
                {company.phone}
              </a>
            </p>
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Get Your Free Estimate
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Ready to protect your property? Fill out the form below and we'll contact you within 24 hours. For immediate assistance, give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Free Estimate</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
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
                        <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                        <Select
                          value={formData.preferredContact}
                          onValueChange={(value) => setFormData({ ...formData, preferredContact: value })}
                        >
                          <SelectTrigger id="preferredContact">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="phone">Phone</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="text">Text Message</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                          required
                        >
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Pest Control</SelectItem>
                            <SelectItem value="termite">Termite Control</SelectItem>
                            <SelectItem value="rodent">Rodent Control</SelectItem>
                            <SelectItem value="mosquito">Mosquito Control</SelectItem>
                            <SelectItem value="bed-bug">Bed Bug Treatment</SelectItem>
                            <SelectItem value="commercial">Commercial Services</SelectItem>
                            <SelectItem value="inspection">Free Inspection</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="area">Service Area</Label>
                        <Select
                          value={formData.area}
                          onValueChange={(value) => setFormData({ ...formData, area: value })}
                        >
                          <SelectTrigger id="area">
                            <SelectValue placeholder="Select your area" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceAreas.featuredMunicipalities.map((area) => (
                              <SelectItem key={area} value={area.toLowerCase()}>
                                {area}
                              </SelectItem>
                            ))}
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Pest Issue</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe the pest issue you're experiencing, including location and any signs you've noticed..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" size="lg" className="flex-1" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Submit Request
                          </>
                        )}
                      </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>.
                      We'll never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a 
                    href={`tel:${company.phoneClean}`}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">{company.phone}</div>
                      <div className="text-sm text-muted-foreground">Call or text</div>
                    </div>
                  </a>
                  <a 
                    href={`mailto:${company.email}`}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">{company.email}</div>
                      <div className="text-sm text-muted-foreground">Email us anytime</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">{company.address.city}, {company.address.state}</div>
                      <div className="text-sm text-muted-foreground">{company.address.full}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <div>{company.hours.weekdays}</div>
                      <div>{company.hours.saturday}</div>
                      <div className="text-muted-foreground">{company.hours.sunday}</div>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="text-sm text-primary font-medium">
                      {company.hours.emergency}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Need Immediate Help?</h3>
                  <p className="opacity-80 text-sm mb-4">
                    For urgent pest problems, call us directly for same-day service.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <a href={`tel:${company.phoneClean}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16">
          <div className="aspect-[21/9] bg-muted rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">Map placeholder - Add your Google Maps embed here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
