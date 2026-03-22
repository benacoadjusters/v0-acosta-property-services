import { Metadata } from "next"
import Link from "next/link"
import { Building2, CheckCircle2, Shield, Clock, FileText, Phone, Users, Calendar, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CTASection } from "@/components/sections/cta-section"
import { services } from "@/content/services"
import { faqs } from "@/content/faqs"
import { company } from "@/content/company"

export const metadata: Metadata = {
  title: "Commercial Pest Control",
  description: "Professional commercial pest control services in Puerto Rico. Customized programs for restaurants, hotels, healthcare, retail, and more. Compliance documentation included.",
}

const benefits = [
  {
    icon: FileText,
    title: "Compliance Documentation",
    description: "Detailed service reports for health inspections and regulatory compliance."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Service times that work with your business hours, including nights and weekends."
  },
  {
    icon: Shield,
    title: "Discreet Service",
    description: "Unmarked vehicles and professional technicians who blend into your environment."
  },
  {
    icon: Calendar,
    title: "Maintenance Programs",
    description: "Regular preventive treatments to stop problems before they start."
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "A single point of contact who knows your business and its unique needs."
  },
  {
    icon: Wrench,
    title: "Emergency Response",
    description: "24/7 emergency service when you need immediate assistance."
  }
]

export default function CommercialPestControlPage() {
  const { commercial } = services.serviceTypes

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent-foreground mb-6">
                <Building2 className="h-4 w-4" />
                <span>Commercial Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Protect Your Business
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                {commercial.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${company.phoneClean}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {company.phone}
                  </a>
                </Button>
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {commercial.benefits.slice(0, 4).map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Industries We Serve</h2>
              <ul className="space-y-3">
                {commercial.industries.map((industry, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <Building2 className="h-5 w-5 text-accent shrink-0" />
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Custom programs for any business type
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Businesses Choose Us
            </h2>
            <p className="text-muted-foreground text-lg">
              We understand the unique challenges businesses face. Our commercial programs are designed to protect your reputation while meeting regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 mb-3">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Commercial Approach
            </h2>
            <p className="opacity-80 text-lg">
              We work with you to develop a customized pest management program that fits your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Assessment", desc: "Comprehensive evaluation of your facility and pest risks" },
              { step: 2, title: "Custom Plan", desc: "Tailored program based on your industry and needs" },
              { step: 3, title: "Implementation", desc: "Strategic treatments with minimal disruption" },
              { step: 4, title: "Monitoring", desc: "Ongoing inspections and preventive maintenance" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-foreground text-accent text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              We understand the unique requirements of different industries and tailor our services accordingly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Food Service",
                description: "HACCP-compliant programs for restaurants, cafeterias, and food processing facilities.",
                focus: ["Health code compliance", "Kitchen treatments", "Storage areas"]
              },
              {
                title: "Hospitality",
                description: "Discreet service for hotels, resorts, and vacation properties.",
                focus: ["Bed bug prevention", "Guest room treatments", "Common areas"]
              },
              {
                title: "Healthcare",
                description: "Sensitive environment protocols for hospitals and medical offices.",
                focus: ["Patient safety", "Sterile areas", "Regulatory compliance"]
              },
              {
                title: "Retail",
                description: "Protect your inventory and maintain a clean shopping environment.",
                focus: ["Stockroom protection", "Customer areas", "Pest prevention"]
              }
            ].map((industry, i) => (
              <Card key={i} className="p-6">
                <h3 className="text-lg font-bold mb-2">{industry.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.focus.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.commercial.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card border rounded-lg mb-3 px-4">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Protect Your Business?"
        description="Contact us for a free consultation and customized commercial pest management proposal."
        variant="accent"
      />
    </>
  )
}
