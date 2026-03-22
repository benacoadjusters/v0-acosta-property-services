import Link from "next/link"
import { Home, Building2, CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/content/services"

export function ServiceTypesSection() {
  const { residential, commercial } = services.serviceTypes

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Solutions For Everyone</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Residential & Commercial Services
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Whether you're protecting your home or your business, we have customized solutions to meet your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Residential */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Home className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{residential.title}</h3>
                <p className="text-muted-foreground">For homeowners</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-pretty">
              {residential.description}
            </p>
            <ul className="space-y-3 mb-8">
              {residential.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="w-full sm:w-auto">
              <Link href={residential.href}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Commercial */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Building2 className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{commercial.title}</h3>
                <p className="text-muted-foreground">For businesses</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 text-pretty">
              {commercial.description}
            </p>
            <ul className="space-y-3 mb-8">
              {commercial.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href={commercial.href}>
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
