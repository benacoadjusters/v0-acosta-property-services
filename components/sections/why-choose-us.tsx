import { Award, Users, Clock, Shield, Leaf, HeartHandshake } from "lucide-react"
import { company } from "@/content/company"

const features = [
  {
    icon: Award,
    title: "Licensed & Certified",
    description: "Our technicians are fully licensed, insured, and regularly trained on the latest techniques."
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Same-day service available for emergencies. We understand pest problems can't wait."
  },
  {
    icon: Shield,
    title: "Guaranteed Results",
    description: "We stand behind our work with a satisfaction guarantee. If pests return, so do we."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "We offer environmentally responsible treatments that are safe for families and pets."
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Over 15 years of experience serving homes and businesses across Puerto Rico."
  },
  {
    icon: HeartHandshake,
    title: "Local Experts",
    description: "We know Puerto Rico's unique pest challenges and how to address them effectively."
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
              The Acosta Difference
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-pretty">
              For over 15 years, homeowners and businesses across Puerto Rico have trusted us to protect their properties. Here's why:
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-secondary rounded-xl">
              {company.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
