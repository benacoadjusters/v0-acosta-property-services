import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { galleryItems } from "@/content/gallery"

export function GalleryPreview() {
  const featuredItems = galleryItems.filter((item) => item.featured).slice(0, 4)

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Recent Projects
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            See examples of our work across residential and commercial properties in Puerto Rico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredItems.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
            >
              {/* Placeholder image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <h3 className="font-semibold text-background">{item.title}</h3>
                <p className="text-sm text-background/80">{item.location}</p>
              </div>

              {/* Category badge */}
              <div className="absolute top-3 left-3 px-2 py-1 bg-card/90 backdrop-blur rounded text-xs font-medium capitalize">
                {item.category}
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Button asChild variant="outline">
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
