import Link from "next/link"
import { Button } from "@/components/ui/button"
import { company } from "@/content/company"

export function ProcessSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="font-semibold text-sm uppercase tracking-wider opacity-80">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">
            How It Works
          </h2>
          <p className="opacity-80 text-lg text-pretty">
            From initial inspection to ongoing protection, we make pest control simple and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {company.process.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < company.process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-foreground/20 -translate-y-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground text-primary text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="opacity-80 text-pretty">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link href="/contact">Schedule Your Free Inspection</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
