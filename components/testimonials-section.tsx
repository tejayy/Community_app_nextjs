import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    content: "ProjectHub transformed how I share my work. The feedback I received helped me land my dream job as a senior designer.",
    author: {
      name: "Rachel Kim",
      role: "Product Designer at Stripe",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      initials: "RK",
    },
  },
  {
    content: "The community here is incredible. Every project I post gets thoughtful, actionable feedback within hours.",
    author: {
      name: "David Chen",
      role: "Full Stack Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      initials: "DC",
    },
  },
  {
    content: "I went from a hobbyist to running my own design agency, all thanks to the connections I made on ProjectHub.",
    author: {
      name: "Sofia Rodriguez",
      role: "Founder, Studio SR",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      initials: "SR",
    },
  },
]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Loved by creators worldwide
          </h2>
          <p className="mt-4 text-muted-foreground">
            See what our community members have to say about their experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author.name} className="border-border bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-chart-4 text-chart-4" />
                  ))}
                </div>
                <blockquote className="mb-6 text-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                    <AvatarFallback>{testimonial.author.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.author.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.author.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
