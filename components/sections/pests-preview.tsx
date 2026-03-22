import Link from "next/link"
import { Bug, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pests } from "@/content/pests"

export function PestsPreview() {
  const featuredPests = pests.filter((p) => p.featured).slice(0, 6)

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pest Library</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Common Pests in Puerto Rico
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Learn about the pests that affect homes and businesses in Puerto Rico and how to identify them.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {featuredPests.map((pest) => (
            <Link
              key={pest.id}
              href="/pests"
              className="group bg-card rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-all border hover:border-primary/30"
            >
              <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <Bug className="h-7 w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {pest.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Button asChild variant="outline">
            <Link href="/pests">
              View All Pests
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
