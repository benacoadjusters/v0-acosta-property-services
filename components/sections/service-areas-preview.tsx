import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { serviceAreas } from "@/content/service-areas"

export function ServiceAreasPreview() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Service Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
              Serving Communities Across Puerto Rico
            </h2>
            <p className="text-muted-foreground text-lg mb-6 text-pretty">
              {serviceAreas.description}
            </p>
            <p className="text-muted-foreground mb-8">
              {serviceAreas.coverageMessage}
            </p>
            <Button asChild>
              <Link href="/service-areas">
                View All Service Areas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Areas Grid */}
          <div className="bg-secondary rounded-2xl p-6 md:p-8">
            <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Featured Service Areas
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {serviceAreas.featuredMunicipalities.map((area) => (
                <Link
                  key={area}
                  href="/service-areas"
                  className="flex items-center gap-2 p-3 bg-card rounded-lg hover:bg-card/80 transition-colors border"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-foreground">{area}</span>
                </Link>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              + 70 more municipalities across Puerto Rico
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
