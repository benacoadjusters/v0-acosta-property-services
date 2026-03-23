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

      {/* Contact Form & Info */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Suspense fallback={<ContactFormFallback />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t.contact.infoTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a 
                    href={`tel:${company.phoneClean}`}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">{company.phone}</div>
                      <div className="text-sm text-muted-foreground">{t.ui.callNow}</div>
                    </div>
                  </a>
                  <a 
                    href={`mailto:${company.email}`}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">{company.email}</div>
                      <div className="text-sm text-muted-foreground">{t.ui.email}</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t.contact.hoursTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <div>{t.contact.weekdays}: 8AM-6PM</div>
                      <div>{t.contact.saturday}: 9AM-2PM</div>
                      <div className="text-muted-foreground">{t.contact.sunday}: {t.contact.closed}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{t.contact.emergencyTitle}</h3>
                  <p className="opacity-80 text-sm mb-4">
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
          </div>
        </div>
      </section>
    </>
  )
}
