import { Shield, Clock, ThumbsUp, Leaf } from "lucide-react"
import { company } from "@/content/company"

const icons = {
  "Licensed & Insured": Shield,
  "Same-Day Service": Clock,
  "Satisfaction Guaranteed": ThumbsUp,
  "Eco-Friendly Options": Leaf,
}

export function TrustBar() {
  return (
    <section className="bg-card border-y">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {company.trustPoints.map((point, index) => {
            const Icon = icons[point.title as keyof typeof icons] || Shield
            return (
              <div key={index} className="flex flex-col items-center text-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{point.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{point.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
