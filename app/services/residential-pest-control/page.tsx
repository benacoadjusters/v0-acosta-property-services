import { Metadata } from "next"
import Link from "next/link"
import { Home, CheckCircle2, Shield, Clock, Leaf, Phone, Bug, Users, Heart } from "lucide-react"
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
import { pests } from "@/content/pests"

export const metadata: Metadata = {
  title: "Residential Pest Control",
  description: "Protect your home and family with our residential pest control services in Puerto Rico. Family-safe treatments, flexible scheduling, satisfaction guaranteed.",
}

const benefits = [
  {
    icon: Heart,
    title: "Family & Pet Safe",
    description: "We use EPA-approved products that are safe for your loved ones while effectively eliminating pests."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work around your schedule with convenient appointment times, including evenings and weekends."
  },
  {
    icon: Shield,
    title: "Satisfaction Guaranteed",
    description: "If pests return between treatments, we'll come back at no additional cost."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "We offer environmentally responsible treatment options for health-conscious homeowners."
  },
  {
    icon: Users,
    title: "Expert Technicians",
    description: "Our licensed technicians are trained on the latest pest control methods and techniques."
  },
  {
    icon: Bug,
    title: "Comprehensive Coverage",
    description: "Protection against all common household pests including ants, roaches, rodents, and more."
  }
]

const commonIssues = [
  "Ants invading your kitchen",
  "Cockroaches in bathrooms and kitchens",
  "Rodents in attics or walls",
  "Termites damaging your home",
  "Mosquitoes in your yard",
  "Spiders throughout your home",
  "Bed bugs in bedrooms",
  "Fleas from pets"
]

export default function ResidentialPestControlPage() {
  const { residential } = services.serviceTypes
  const featuredPests = pests.filter(p => p.featured).slice(0, 6)

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Home className="h-4 w-4" />
                <span>Residential Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Protect Your Home & Family
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                {residential.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg">
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${company.phoneClean}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {company.phone}
                  </a>
                </Button>
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {residential.benefits.slice(0, 4).map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Common Home Pest Issues</h2>
              <ul className="space-y-3">
                {commonIssues.map((issue, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <Bug className="h-5 w-5 text-primary shrink-0" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Dealing with any of these? We can help!
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
              Why Choose Our Residential Services?
            </h2>
            <p className="text-muted-foreground text-lg">
              We understand that your home is your sanctuary. That's why we deliver effective pest control that's safe for your family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-3">
                    <benefit.icon className="h-6 w-6 text-primary" />
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

      {/* Process */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Our simple 4-step process makes protecting your home easy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {company.process.map((step, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pests */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pests We Treat
            </h2>
            <p className="text-muted-foreground text-lg">
              We protect your home from all common household pests in Puerto Rico.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredPests.map((pest) => (
              <Link
                key={pest.id}
                href="/pests"
                className="group bg-secondary rounded-xl p-4 text-center hover:bg-secondary/80 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3">
                  <Bug className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                  {pest.name}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/pests">View All Pests</Link>
            </Button>
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
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.pestControl.slice(0, 5).map((faq, i) => (
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
        title="Ready to Protect Your Home?"
        description="Schedule your free inspection today and enjoy peace of mind knowing your home is protected."
      />
    </>
  )
}
