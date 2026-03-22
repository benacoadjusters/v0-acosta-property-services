import { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about pest control services, pricing, treatments, and more. Contact us if you need additional help.",
}

const faqCategories = [
  { id: "general", title: "General Questions", data: faqs.general },
  { id: "pestControl", title: "Pest Control", data: faqs.pestControl },
  { id: "termite", title: "Termite Control", data: faqs.termite },
  { id: "commercial", title: "Commercial Services", data: faqs.commercial },
  { id: "pricing", title: "Pricing & Payment", data: faqs.pricing },
]

// JSON-LD Schema for FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": Object.values(faqs).flat().map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Support</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Find answers to common questions about our pest control services. Can't find what you're looking for? Contact us directly.
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
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our friendly team is here to help. Contact us by phone or email and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href={`tel:${company.phoneClean}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {company.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Send Us a Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
