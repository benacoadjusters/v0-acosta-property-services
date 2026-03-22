import Link from "next/link"
import { Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { testimonials, reviewStats } from "@/content/testimonials"

export function TestimonialsSection() {
  const featuredTestimonials = testimonials.filter((t) => t.featured).slice(0, 3)

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Don't just take our word for it. Here's what homeowners and businesses across Puerto Rico have to say about our service.
          </p>
          
          {/* Review Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-semibold text-foreground">{reviewStats.averageRating}</span>
            </div>
            <div className="text-muted-foreground">
              Based on <span className="font-semibold text-foreground">{reviewStats.totalReviews}+</span> reviews
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-4 text-pretty">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-sm text-primary mt-1">{testimonial.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Button asChild variant="outline">
            <Link href="/reviews">
              Read All Reviews
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
