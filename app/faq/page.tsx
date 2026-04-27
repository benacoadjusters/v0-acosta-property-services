"use client"

import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CTASection } from "@/components/sections/cta-section"
import { faqs } from "@/content/faqs"
import { company } from "@/content/company"
import { useLanguage } from "@/lib/language-context"

export default function FAQPage() {
  const { language, t } = useLanguage()

  const currentFaqs = faqs[language]
  
  const faqCategories = language === "es" ? [
    { id: "general", title: "Preguntas Generales", data: currentFaqs.general },
    { id: "pestControl", title: "Control de Plagas", data: currentFaqs.pestControl },
    { id: "landscaping", title: "Jardinería", data: currentFaqs.landscaping },
    { id: "termite", title: "Control de Termitas", data: currentFaqs.termite },
    { id: "commercial", title: "Servicios Comerciales", data: currentFaqs.commercial },
    { id: "pricing", title: "Precios y Pagos", data: currentFaqs.pricing },
  ] : [
    { id: "general", title: "General Questions", data: currentFaqs.general },
    { id: "pestControl", title: "Pest Control", data: currentFaqs.pestControl },
    { id: "landscaping", title: "Landscaping", data: currentFaqs.landscaping },
    { id: "termite", title: "Termite Control", data: currentFaqs.termite },
    { id: "commercial", title: "Commercial Services", data: currentFaqs.commercial },
    { id: "pricing", title: "Pricing & Payment", data: currentFaqs.pricing },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {language === "es" ? "Soporte" : "Support"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              {t.faq.title}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              {t.faq.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.id} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold text-foreground mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.data.map((faq, i) => (
                    <AccordionItem 
                      key={i} 
                      value={`${category.id}-${i}`} 
                      className="bg-card border rounded-lg mb-3 px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-foreground">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t.faq.stillHaveQuestions}
            </h2>
            <p className="text-muted-foreground mb-8">
              {t.faq.contactTeam}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={`tel:${company.phoneClean}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {company.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">{t.ui.contactUs}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
