import Link from "next/link"
import { Bug, Home, Shield, Droplets, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/content/services"

const icons = {
  bug: Bug,
  home: Home,
  shield: Shield,
  spray: Droplets,
}

export function FeaturedServices() {
  const featuredServices = services.categories.filter((s) => s.featured)

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Professional Pest Control Solutions
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            From common household pests to complex infestations, we have the expertise and tools to protect your property.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredServices.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons] || Bug
            return (
              <Card key={service.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-base">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
