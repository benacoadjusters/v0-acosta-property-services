import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/content/company"

interface CTASectionProps {
  title?: string
  description?: string
  variant?: "default" | "accent"
}

export function CTASection({ 
  title = "Ready to Get Started?",
  description = "Contact us today for a free inspection and estimate. Our friendly team is ready to help protect your property.",
  variant = "default"
}: CTASectionProps) {
  const bgClass = variant === "accent" ? "bg-accent" : "bg-primary"
  const textClass = variant === "accent" ? "text-accent-foreground" : "text-primary-foreground"

  return (
    <section className={`py-16 md:py-20 ${bgClass} ${textClass}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance max-w-2xl mx-auto">
          {title}
        </h2>
        <p className={`text-lg mb-8 max-w-xl mx-auto text-pretty ${variant === "accent" ? "opacity-80" : "opacity-80"}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className={variant === "accent" 
              ? "bg-foreground text-background hover:bg-foreground/90 font-semibold" 
              : "bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            }
          >
            <Link href="/contact">Get Free Estimate</Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className={variant === "accent"
              ? "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              : "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            }
          >
            <a href={`tel:${company.phoneClean}`}>
              <Phone className="mr-2 h-5 w-5" />
              {company.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
