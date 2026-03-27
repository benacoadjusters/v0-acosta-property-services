"use client"

import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/content/company"
import { useLanguage } from "@/lib/language-context"

interface CTASectionProps {
  titleEs?: string
  titleEn?: string
  descriptionEs?: string
  descriptionEn?: string
}

export function CTASection({ 
  titleEs,
  titleEn,
  descriptionEs,
  descriptionEn,
}: CTASectionProps) {
  const { language, t } = useLanguage()

  const title = language === "es" 
    ? (titleEs || t.home.ctaTitle) 
    : (titleEn || t.home.ctaTitle)
  const description = language === "es"
    ? (descriptionEs || t.home.ctaDesc)
    : (descriptionEn || t.home.ctaDesc)

  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance">
            {title}
          </h2>
          <p className="text-primary-foreground/80 text-lg text-pretty">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Link href="/contact">{t.ui.getQuote}</Link>
            </Button>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold">
              <a href={`tel:${company.phoneClean}`}>
                <Phone className="mr-2 h-5 w-5" />
                {t.ui.callNow}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
