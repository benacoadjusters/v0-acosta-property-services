import { Metadata } from "next"
import Link from "next/link"
import { Bug, AlertTriangle, Shield, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"
import { pests } from "@/content/pests"
import { company } from "@/content/company"

export const metadata: Metadata = {
  title: "Common Pests in Puerto Rico",
  description: "Learn about common pests in Puerto Rico including ants, cockroaches, termites, rodents, mosquitoes, and more. Identification tips and prevention advice.",
}

export default function PestsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pest Library</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Common Pests in Puerto Rico
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Learn about the pests that commonly affect homes and businesses in Puerto Rico. Understanding these pests helps you identify problems early and take preventive action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Report a Pest Problem</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${company.phoneClean}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Help
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pest Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pests.map((pest) => (
              <Card key={pest.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-secondary">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <Bug className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{pest.name}</CardTitle>
                      <p className="text-sm text-muted-foreground italic">{pest.scientificName}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                    {pest.description}
                  </p>
                  
                  {/* Common Types */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Common Types:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pest.commonTypes.slice(0, 3).map((type, i) => (
                        <span key={i} className="text-xs bg-secondary px-2 py-1 rounded-full">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Signs */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-accent" />
                      Signs of Infestation:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {pest.signs.slice(0, 3).map((sign, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prevention Tips */}
                  <div>
                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      Prevention Tips:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {pest.prevention.slice(0, 3).map((tip, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 bg-destructive/10 border-y border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/20 shrink-0">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Notice Signs of Pest Activity?
              </h2>
              <p className="text-muted-foreground">
                Don't wait until a small problem becomes a big infestation. Early detection and treatment saves time, money, and stress. Contact us for a free inspection.
              </p>
            </div>
            <Button asChild size="lg" variant="destructive">
              <Link href="/contact">Get Free Inspection</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
