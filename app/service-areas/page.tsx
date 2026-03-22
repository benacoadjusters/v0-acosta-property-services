import { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"
import { serviceAreas } from "@/content/service-areas"
import { company } from "@/content/company"

export const metadata: Metadata = {
  title: "Service Areas",
  description: `${company.name} serves communities across Puerto Rico including San Juan, Bayamón, Carolina, Ponce, and more. See if we service your area.`,
}

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Service Areas</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
                Serving Communities Across Puerto Rico
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                {serviceAreas.description}
              </p>
              <p className="text-muted-foreground mb-8">
                {serviceAreas.coverageMessage}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
            <div className="bg-card rounded-2xl p-8 border">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Featured Service Areas
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.featuredMunicipalities.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 p-3 bg-secondary rounded-lg"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Regions */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Service Regions
            </h2>
            <p className="text-muted-foreground text-lg">
              We service municipalities across Puerto Rico. Find your area below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.regions.map((region) => (
              <Card key={region.name}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {region.name}
                    {region.featured && (
                      <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {region.municipalities.map((municipality) => (
                      <span
                        key={municipality}
                        className="text-sm bg-secondary px-3 py-1 rounded-full"
                      >
                        {municipality}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Coverage Area
            </h2>
            <p className="text-muted-foreground text-lg">
              We proudly serve over 70 municipalities across Puerto Rico.
            </p>
          </div>

          <div className="aspect-video bg-card rounded-xl border flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive map placeholder</p>
              <p className="text-sm text-muted-foreground">Add your service area map here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-12 bg-background border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                Don't See Your Area?
              </h2>
              <p className="text-muted-foreground">
                We may still be able to help! Contact us to check if we service your location.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${company.phoneClean}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
