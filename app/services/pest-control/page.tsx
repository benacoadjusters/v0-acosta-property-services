import { Metadata } from "next"
import Link from "next/link"
import { Bug, Home, Building2, CheckCircle2, Shield, Clock, Leaf, Phone, ArrowRight } from "lucide-react"
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
  title: "Pest Control Services",
  description: "Professional pest control services in Puerto Rico. Complete pest elimination and prevention for homes and businesses. Free inspections available.",
}

export default function PestControlPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pest Control</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
                Complete Pest Control Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Protect your property from unwanted pests with our comprehensive pest control services. From common household invaders to complex infestations, we deliver effective, long-lasting solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${company.phoneClean}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Licensed & Insured" },
                { icon: Clock, label: "Same-Day Service" },
                { icon: Leaf, label: "Eco-Friendly Options" },
                { icon: CheckCircle2, label: "Satisfaction Guaranteed" },
              ].map((item, i) => (
                <div key={i} className="bg-card p-4 rounded-xl border flex items-center gap-3">
                  <item.icon className="h-6 w-6 text-primary" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Pest Control Services
            </h2>
            <p className="text-muted-foreground text-lg">
              We handle a wide range of pest problems with targeted treatments designed for Puerto Rico's unique climate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.pestControlServices.map((service, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                    <Bug className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.pests.slice(0, 3).map((pest, j) => (
                      <span key={j} className="text-xs bg-secondary px-2 py-1 rounded-full">
                        {pest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="opacity-80 text-lg">
              We follow a proven process to ensure complete pest elimination and ongoing protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {company.process.map((step, i) => (
              <div key={i} className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground text-primary text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="opacity-80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Solutions for Every Property
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer specialized pest control programs for both residential and commercial properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Home className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Residential</h3>
                  <p className="text-muted-foreground">Protect your home & family</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Keep your home pest-free with our residential pest control programs. Family and pet-safe treatments with flexible scheduling.
              </p>
              <Button asChild className="w-full">
                <Link href="/services/residential-pest-control">
                  Residential Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Building2 className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Commercial</h3>
                  <p className="text-muted-foreground">Protect your business</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Keep your business pest-free with customized commercial pest management programs. Discreet service and compliance documentation included.
              </p>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/services/commercial-pest-control">
                  Commercial Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Common questions about our pest control services
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.pestControl.map((faq, i) => (
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

            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
