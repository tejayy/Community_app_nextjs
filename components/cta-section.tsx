import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="border-t border-border bg-secondary/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Ready to share your next project?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of creators who are already building, sharing, and growing together.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full gap-2 sm:w-auto">
              Create Your Account
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Free forever for individuals. No credit card required.
          </p>
        </div>
      </div>
    </section>
  )
}
