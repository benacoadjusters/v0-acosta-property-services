"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { company } from "@/content/company"
import { useLanguage } from "@/lib/language-context"

const municipalities = [
  "San Juan", "Bayamón", "Carolina", "Ponce", "Caguas", 
  "Guaynabo", "Mayagüez", "Trujillo Alto", "Arecibo", "Fajardo",
  "Humacao", "Aguadilla", "Vega Baja", "Toa Baja", "Dorado"
]

const serviceOptions = {
  es: [
    { value: "general", label: "Control de Plagas General" },
    { value: "termite", label: "Control de Termitas" },
    { value: "rodent", label: "Control de Roedores" },
    { value: "mosquito", label: "Control de Mosquitos" },
    { value: "bed-bug", label: "Tratamiento de Chinches" },
    { value: "commercial", label: "Servicios Comerciales" },
    { value: "inspection", label: "Inspeccion Gratis" },
    { value: "other", label: "Otro" },
  ],
  en: [
    { value: "general", label: "General Pest Control" },
    { value: "termite", label: "Termite Control" },
    { value: "rodent", label: "Rodent Control" },
    { value: "mosquito", label: "Mosquito Control" },
    { value: "bed-bug", label: "Bed Bug Treatment" },
    { value: "commercial", label: "Commercial Services" },
    { value: "inspection", label: "Free Inspection" },
    { value: "other", label: "Other" },
  ],
}

export function ContactForm() {
  const searchParams = useSearchParams()
  const { language, t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    area: "",
    message: "",
    propertyType: "residential",
  })

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
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="py-12">
          <div className="max-w-lg mx-auto text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t.contact.successMessage}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {language === "es" 
                ? `Para asistencia inmediata, llamanos al `
                : `For immediate assistance, call us at `}
              <a href={`tel:${company.phoneClean}`} className="text-primary font-medium">
                {company.phone}
              </a>
            </p>
            <Button asChild>
              <Link href="/">{language === "es" ? "Volver al Inicio" : "Return to Home"}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{t.contact.formTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t.contact.nameLabel} *</Label>
              <Input
                id="name"
                placeholder={t.contact.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t.contact.emailLabel} *</Label>
              <Input
                id="email"
                type="email"
                placeholder={t.contact.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">{t.contact.phoneLabel} *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder={t.contact.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="propertyType">{t.contact.propertyLabel}</Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
              >
                <SelectTrigger id="propertyType">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">{t.contact.propertyResidential}</SelectItem>
                  <SelectItem value="commercial">{t.contact.propertyCommercial}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="service">{t.contact.serviceLabel} *</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
                required
              >
                <SelectTrigger id="service">
                  <SelectValue placeholder={t.contact.servicePlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions[language].map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="area">{language === "es" ? "Municipio" : "Municipality"}</Label>
              <Select
                value={formData.area}
                onValueChange={(value) => setFormData({ ...formData, area: value })}
              >
                <SelectTrigger id="area">
                  <SelectValue placeholder={language === "es" ? "Selecciona tu area" : "Select your area"} />
                </SelectTrigger>
                <SelectContent>
                  {municipalities.map((area) => (
                    <SelectItem key={area} value={area.toLowerCase()}>
                      {area}
                    </SelectItem>
                  ))}
                  <SelectItem value="other">{language === "es" ? "Otro" : "Other"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t.contact.messageLabel}</Label>
            <Textarea
              id="message"
              placeholder={t.contact.messagePlaceholder}
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              language === "es" ? "Enviando..." : "Submitting..."
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                {t.contact.submitButton}
              </>
            )}
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            {language === "es" 
              ? "Al enviar este formulario, aceptas nuestra "
              : "By submitting this form, you agree to our "}
            <Link href="/privacy" className="underline hover:text-foreground">
              {t.footer.privacy}
            </Link>.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
