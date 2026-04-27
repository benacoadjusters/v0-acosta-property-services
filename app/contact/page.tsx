"use client"

import { Suspense } from "react"
import { Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { company } from "@/content/company"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/lib/language-context"

function ContactFormFallback() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">...</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 animate-pulse">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-10 bg-muted rounded" />
            <div className="h-10 bg-muted rounded" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-10 bg-muted rounded" />
            <div className="h-10 bg-muted rounded" />
          </div>
          <div className="h-32 bg-muted rounded" />
          <div className="h-12 bg-muted rounded" />
        </div>
      </CardContent>
    </Card>
  )
}

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t.nav.contact}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              {t.contact.title}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards - Mobile First */}
      <section className="py-8 bg-background lg:hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-3">
            <a 
              href={`tel:${company.phoneClean}`}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-primary text-primary-foreground text-center"
            >
              <Phone className="h-6 w-6" />
              <span className="font-semibold text-sm">{t.ui.callNow}</span>
            </a>
            <a 
              href={`mailto:${company.email}`}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary text-foreground text-center"
            >
              <Mail className="h-6 w-6 text-primary" />
              <span className="font-semibold text-sm">{t.ui.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-8 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info - Shows first on mobile via order */}
            <div className="space-y-4 lg:space-y-6 order-first lg:order-last">
              {/* Desktop only contact cards */}
              <Card className="hidden lg:block">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{t.contact.infoTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a 
                    href={`tel:${company.phoneClean}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{company.phone}</div>
                      <div className="text-xs text-muted-foreground">{t.ui.callNow}</div>
                    </div>
                  </a>
                  <a 
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{company.email}</div>
                      <div className="text-xs text-muted-foreground">{t.ui.email}</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{t.contact.hoursTitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-sm space-y-1">
                      <div className="flex justify-between gap-4">
                        <span>{t.contact.weekdays}:</span>
                        <span className="font-medium">8AM-6PM</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>{t.contact.saturday}:</span>
                        <span className="font-medium">9AM-2PM</span>
                      </div>
                      <div className="flex justify-between gap-4 text-muted-foreground">
                        <span>{t.contact.sunday}:</span>
                        <span>{t.contact.closed}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-5 text-center">
                  <h3 className="font-bold text-lg mb-2">{t.contact.emergencyTitle}</h3>
                  <p className="opacity-90 text-sm mb-4">
                    {t.contact.emergencyDesc}
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <a href={`tel:${company.phoneClean}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      {t.ui.callNow}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 order-last lg:order-first">
              <Suspense fallback={<ContactFormFallback />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
