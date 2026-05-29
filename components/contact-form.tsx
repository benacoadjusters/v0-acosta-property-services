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
    // Active services in correct order
    { value: "pest-general", label: "Control de Plagas - General", group: "plagas" },
    { value: "pest-termite", label: "Control de Plagas - Termitas", group: "plagas" },
    { value: "pest-rodent", label: "Control de Plagas - Roedores", group: "plagas" },
    { value: "pest-mosquito", label: "Control de Plagas - Mosquitos", group: "plagas" },
    { value: "pest-bed-bug", label: "Control de Plagas - Chinches", group: "plagas" },
    { value: "plumbing-repair", label: "Plomería - Reparación", group: "plomeria" },
    { value: "plumbing-drain", label: "Plomería - Destape", group: "plomeria" },
    { value: "plumbing-heater", label: "Plomería - Calentador", group: "plomeria" },
    { value: "plumbing-install", label: "Plomería - Instalación", group: "plomeria" },
    { value: "electrical-panel", label: "Electricidad - Panel", group: "electricidad" },
    { value: "electrical-outlets", label: "Electricidad - Tomacorrientes", group: "electricidad" },
    { value: "electrical-lighting", label: "Electricidad - Iluminación", group: "electricidad" },
    { value: "electrical-fan", label: "Electricidad - Abanicos", group: "electricidad" },
    { value: "landscaping-lawn", label: "Jardinería - Corte de Grama", group: "jardineria" },
    { value: "landscaping-pruning", label: "Jardinería - Poda", group: "jardineria" },
    { value: "landscaping-design", label: "Jardinería - Diseño Paisajístico", group: "jardineria" },
    { value: "landscaping-maintenance", label: "Jardinería - Mantenimiento", group: "jardineria" },
    { value: "cleaning-deep", label: "Limpieza - Profunda", group: "limpieza" },
    { value: "cleaning-office", label: "Limpieza - Oficinas", group: "limpieza" },
    { value: "cleaning-post-construction", label: "Limpieza - Post-Construcción", group: "limpieza" },
    { value: "cleaning-maintenance", label: "Limpieza - Mantenimiento", group: "limpieza" },
    // Coming soon services
    { value: "water-damage", label: "Mitigación de daños por agua — Próximamente", group: "proximamente" },
    { value: "handyman", label: "Reparaciones handyman — Próximamente", group: "proximamente" },
    { value: "roof-sealing", label: "Sellado de techos — Próximamente", group: "proximamente" },
    { value: "lead-asbestos", label: "Mitigación de plomo y asbesto — Próximamente", group: "proximamente" },
    // Other
    { value: "commercial", label: "Servicios Comerciales", group: "otros" },
    { value: "inspection", label: "Inspección Gratis", group: "otros" },
    { value: "other", label: "Otro", group: "otros" },
  ],
  en: [
    // Active services in correct order
    { value: "pest-general", label: "Pest Control - General", group: "pests" },
    { value: "pest-termite", label: "Pest Control - Termites", group: "pests" },
    { value: "pest-rodent", label: "Pest Control - Rodents", group: "pests" },
    { value: "pest-mosquito", label: "Pest Control - Mosquitoes", group: "pests" },
    { value: "pest-bed-bug", label: "Pest Control - Bed Bugs", group: "pests" },
    { value: "plumbing-repair", label: "Plumbing - Repair", group: "plumbing" },
    { value: "plumbing-drain", label: "Plumbing - Drain Cleaning", group: "plumbing" },
    { value: "plumbing-heater", label: "Plumbing - Water Heater", group: "plumbing" },
    { value: "plumbing-install", label: "Plumbing - Installation", group: "plumbing" },
    { value: "electrical-panel", label: "Electrical - Panel", group: "electrical" },
    { value: "electrical-outlets", label: "Electrical - Outlets", group: "electrical" },
    { value: "electrical-lighting", label: "Electrical - Lighting", group: "electrical" },
    { value: "electrical-fan", label: "Electrical - Ceiling Fans", group: "electrical" },
    { value: "landscaping-lawn", label: "Landscaping - Lawn Mowing", group: "landscaping" },
    { value: "landscaping-pruning", label: "Landscaping - Pruning", group: "landscaping" },
    { value: "landscaping-design", label: "Landscaping - Design", group: "landscaping" },
    { value: "landscaping-maintenance", label: "Landscaping - Maintenance", group: "landscaping" },
    { value: "cleaning-deep", label: "Cleaning - Deep Cleaning", group: "cleaning" },
    { value: "cleaning-office", label: "Cleaning - Office", group: "cleaning" },
    { value: "cleaning-post-construction", label: "Cleaning - Post-Construction", group: "cleaning" },
    { value: "cleaning-maintenance", label: "Cleaning - Maintenance", group: "cleaning" },
    // Coming soon services
    { value: "water-damage", label: "Water Damage Mitigation — Coming Soon", group: "comingsoon" },
    { value: "handyman", label: "Handyman Repairs — Coming Soon", group: "comingsoon" },
    { value: "roof-sealing", label: "Roof Sealing — Coming Soon", group: "comingsoon" },
    { value: "lead-asbestos", label: "Lead & Asbestos Mitigation — Coming Soon", group: "comingsoon" },
    // Other
    { value: "commercial", label: "Commercial Services", group: "other" },
    { value: "inspection", label: "Free Inspection", group: "other" },
    { value: "other", label: "Other", group: "other" },
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
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [acceptedMarketing, setAcceptedMarketing] = useState(false)

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
      <CardHeader className="pb-4">
        <CardTitle className="text-xl md:text-2xl">{t.contact.formTitle}</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          {language === "es" ? "Los campos marcados con * son obligatorios" : "Fields marked with * are required"}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name - Full width on mobile for easier input */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">{t.contact.nameLabel} *</Label>
            <Input
              id="name"
              placeholder={t.contact.namePlaceholder}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-11"
            />
          </div>

          {/* Phone and Email - Stack on mobile */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">{t.contact.phoneLabel} *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder={t.contact.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">{t.contact.emailLabel} *</Label>
              <Input
                id="email"
                type="email"
                placeholder={t.contact.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-11"
              />
            </div>
          </div>

          {/* Service and Property Type */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="service" className="text-sm font-medium">{t.contact.serviceLabel} *</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
                required
              >
                <SelectTrigger id="service" className="h-11">
                  <SelectValue placeholder={t.contact.servicePlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {/* 1. Control de Plagas */}
                  <SelectItem value="header-pest" disabled className="font-semibold text-primary">
                    {language === "es" ? "-- Control de Plagas --" : "-- Pest Control --"}
                  </SelectItem>
                  {serviceOptions[language].filter(o => o.group === (language === "es" ? "plagas" : "pests")).map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label.split(" - ")[1]}
                    </SelectItem>
                  ))}
                  {/* 2. Plomería */}
                  <SelectItem value="header-plumbing" disabled className="font-semibold text-cyan-600">
                    {language === "es" ? "-- Plomería --" : "-- Plumbing --"}
                  </SelectItem>
                  {serviceOptions[language].filter(o => o.group === (language === "es" ? "plomeria" : "plumbing")).map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label.split(" - ")[1]}
                    </SelectItem>
                  ))}
                  {/* 3. Electricidad */}
                  <SelectItem value="header-electrical" disabled className="font-semibold text-yellow-600">
                    {language === "es" ? "-- Electricidad --" : "-- Electrical --"}
                  </SelectItem>
                  {serviceOptions[language].filter(o => o.group === (language === "es" ? "electricidad" : "electrical")).map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label.split(" - ")[1]}
                    </SelectItem>
                  ))}
                  {/* 4. Jardinería */}
                  <SelectItem value="header-landscaping" disabled className="font-semibold text-green-600">
                    {language === "es" ? "-- Jardinería --" : "-- Landscaping --"}
                  </SelectItem>
                  {serviceOptions[language].filter(o => o.group === (language === "es" ? "jardineria" : "landscaping")).map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label.split(" - ")[1]}
                    </SelectItem>
                  ))}
                  {/* 5. Limpieza */}
                  <SelectItem value="header-cleaning" disabled className="font-semibold text-blue-600">
                    {language === "es" ? "-- Limpieza --" : "-- Cleaning --"}
                  </SelectItem>
                  {serviceOptions[language].filter(o => o.group === (language === "es" ? "limpieza" : "cleaning")).map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label.split(" - ")[1]}
                    </SelectItem>
                  ))}
                  {/* Próximamente */}
                  <SelectItem value="header-comingsoon" disabled className="font-semibold text-muted-foreground">
                    {language === "es" ? "-- Próximamente --" : "-- Coming Soon --"}
                  </SelectItem>
                  {serviceOptions[language].filter(o => o.group === (language === "es" ? "proximamente" : "comingsoon")).map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                  {/* Otros */}
                  <SelectItem value="header-other" disabled className="font-semibold text-muted-foreground">
                    {language === "es" ? "-- Otros --" : "-- Other --"}
                  </SelectItem>
                  {serviceOptions[language].filter(o => o.group === (language === "es" ? "otros" : "other")).map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="propertyType" className="text-sm font-medium">{t.contact.propertyLabel}</Label>
              <Select
                value={formData.propertyType}
                onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
              >
                <SelectTrigger id="propertyType" className="h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">{t.contact.propertyResidential}</SelectItem>
                  <SelectItem value="commercial">{t.contact.propertyCommercial}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Municipality - Full width */}
          <div className="space-y-2">
            <Label htmlFor="area" className="text-sm font-medium">{language === "es" ? "Municipio" : "Municipality"}</Label>
            <Select
              value={formData.area}
              onValueChange={(value) => setFormData({ ...formData, area: value })}
            >
              <SelectTrigger id="area" className="h-11">
                <SelectValue placeholder={language === "es" ? "Selecciona tu área" : "Select your area"} />
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

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">{t.contact.messageLabel}</Label>
            <Textarea
              id="message"
              placeholder={t.contact.messagePlaceholder}
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="resize-none"
            />
          </div>

          {/* Consent Section */}
          <div className="space-y-4 pt-2 border-t">
            {/* Required acceptance checkbox */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
              <input
                id="acceptTerms"
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                required
                className="mt-0.5 h-5 w-5 shrink-0 rounded border border-input accent-primary cursor-pointer"
              />
              <label htmlFor="acceptTerms" className="text-sm text-foreground leading-relaxed cursor-pointer">
                {language === "es" ? (
                  <>
                    He leído y acepto los{" "}
                    <Link href="/terms-and-conditions" className="underline hover:text-primary font-medium text-primary">
                      Términos y Condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link href="/privacy-policy" className="underline hover:text-primary font-medium text-primary">
                      Política de Privacidad
                    </Link>
                    . *
                  </>
                ) : (
                  <>
                    I have read and accept the{" "}
                    <Link href="/terms-and-conditions" className="underline hover:text-primary font-medium text-primary">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="underline hover:text-primary font-medium text-primary">
                      Privacy Policy
                    </Link>
                    . *
                  </>
                )}
              </label>
            </div>

            {/* Optional marketing consent checkbox */}
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors">
              <input
                id="acceptMarketing"
                type="checkbox"
                checked={acceptedMarketing}
                onChange={(e) => setAcceptedMarketing(e.target.checked)}
                className="mt-0.5 h-5 w-5 shrink-0 rounded border border-input accent-primary cursor-pointer"
              />
              <label htmlFor="acceptMarketing" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                {language === "es"
                  ? `Acepto recibir comunicaciones promocionales de ${company.name} por llamada, SMS, WhatsApp o correo electrónico. Mi consentimiento no es condición de compra.`
                  : `I agree to receive promotional communications from ${company.name} by call, SMS, WhatsApp, or email. Consent is not a condition of purchase.`}
              </label>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold" disabled={isSubmitting || !acceptedTerms}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                {language === "es" ? "Enviando..." : "Submitting..."}
              </span>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                {t.contact.submitButton}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
