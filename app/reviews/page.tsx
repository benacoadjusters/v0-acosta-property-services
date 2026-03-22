import { Metadata } from "next"
import Link from "next/link"
import { Star, ThumbsUp, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"
import { testimonials, reviewStats } from "@/content/testimonials"
import { company } from "@/content/company"

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: `Read reviews from our satisfied customers. ${company.name} has a ${reviewStats.averageRating} rating based on ${reviewStats.totalReviews}+ reviews.`,
}

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              What Our Customers Say
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Don't just take our word for it. Read what homeowners and businesses across Puerto Rico have to say about our service.
            </p>

            {/* Review Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-card p-4 rounded-xl border">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-foreground">{reviewStats.averageRating}</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="bg-card p-4 rounded-xl border">
                <div className="text-2xl font-bold text-foreground">{reviewStats.totalReviews}+</div>
                <div className="text-sm text-muted-foreground">Total Reviews</div>
              </div>
              <div className="bg-card p-4 rounded-xl border">
                <div className="text-2xl font-bold text-foreground">{reviewStats.recommendationRate}%</div>
                <div className="text-sm text-muted-foreground">Would Recommend</div>
              </div>
              <div className="bg-card p-4 rounded-xl border">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <ThumbsUp className="h-5 w-5 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Sources */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm">
                <span className="font-semibold">{reviewStats.googleRating}</span> on Google ({reviewStats.googleReviews} reviews)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(reviewStats.yelpRating) ? "fill-accent text-accent" : "text-muted"}`} />
                ))}
              </div>
              <span className="text-sm">
                <span className="font-semibold">{reviewStats.yelpRating}</span> on Yelp ({reviewStats.yelpReviews} reviews)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <blockquote className="text-foreground mb-6 text-pretty relative z-10">
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
        </div>
      </section>

      {/* Leave a Review */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Happy with Our Service?
            </h2>
            <p className="text-muted-foreground mb-6">
              We'd love to hear about your experience! Leave us a review on Google or Yelp to help others find quality pest control in Puerto Rico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <a href={company.social.google} target="_blank" rel="noopener noreferrer">
                  Review on Google
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={company.social.yelp} target="_blank" rel="noopener noreferrer">
                  Review on Yelp
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
