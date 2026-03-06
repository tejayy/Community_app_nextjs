import { Upload, MessageSquareText, Users, TrendingUp, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Upload,
    title: "Easy Project Sharing",
    description: "Upload your projects in seconds with support for images, videos, and live demos.",
  },
  {
    icon: MessageSquareText,
    title: "Meaningful Feedback",
    description: "Get constructive reviews from experienced professionals and peers in your field.",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Connect with thousands of creators who share your passion for building great things.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor engagement, views, and feedback trends to understand your growth.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "A moderated community focused on constructive criticism and support.",
  },
  {
    icon: Zap,
    title: "Quick Iterations",
    description: "Update your projects based on feedback and track version history.",
  },
]

export function FeaturesSection() {
  return (
    <section id="community" className="border-y border-border bg-secondary/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Everything you need to grow
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built for creators who want to improve their craft through community feedback and collaboration.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-muted-foreground/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
