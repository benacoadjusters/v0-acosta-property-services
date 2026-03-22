import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/content/company"

interface CTASectionProps {
  title?: string
  description?: string
}

export function CTASection({ 
  title = "Ready to Get Started?",
  description = "Contact us today for a free, no-obligation estimate. Our expert technicians are ready to help."
}: CTASectionProps) {
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
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href={`tel:${company.phoneClean}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call {company.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
