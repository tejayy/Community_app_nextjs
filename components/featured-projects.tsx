"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MessageSquare, Eye, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive analytics dashboard for tracking sales, inventory, and customer insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      initials: "SC",
    },
    tags: ["React", "TypeScript", "Tailwind"],
    likes: 234,
    comments: 45,
    views: "2.3k",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Clean and intuitive mobile banking interface with biometric authentication.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    author: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      initials: "AR",
    },
    tags: ["Flutter", "Figma", "UI/UX"],
    likes: 189,
    comments: 32,
    views: "1.8k",
  },
  {
    id: 3,
    title: "AI Writing Assistant",
    description: "An intelligent writing tool that helps content creators with suggestions and grammar.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    author: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      initials: "JW",
    },
    tags: ["Next.js", "OpenAI", "Vercel"],
    likes: 412,
    comments: 67,
    views: "4.1k",
  },
  {
    id: 4,
    title: "Health & Fitness Tracker",
    description: "Track workouts, nutrition, and wellness goals with beautiful visualizations.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      initials: "ET",
    },
    tags: ["React Native", "GraphQL", "Health"],
    likes: 298,
    comments: 51,
    views: "3.2k",
  },
  {
    id: 5,
    title: "Portfolio Builder",
    description: "Create stunning portfolios with drag-and-drop simplicity and custom themes.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    author: {
      name: "Michael Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      initials: "MP",
    },
    tags: ["Vue.js", "Nuxt", "Design"],
    likes: 156,
    comments: 28,
    views: "1.5k",
  },
  {
    id: 6,
    title: "Recipe Community",
    description: "Share and discover recipes from home cooks around the world.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",
    author: {
      name: "Olivia Martinez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      initials: "OM",
    },
    tags: ["Svelte", "Supabase", "Food"],
    likes: 321,
    comments: 89,
    views: "2.9k",
  },
]

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-muted-foreground">Discover what our community is building</p>
          </div>
          <Button variant="outline" className="gap-2">
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-border bg-card transition-all hover:border-muted-foreground/50">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t border-border p-4">
                <div className="flex items-center gap-2">
                  <Avatar className="h-7 w-7">
                    <AvatarImage src={project.author.avatar} alt={project.author.name} />
                    <AvatarFallback className="text-xs">{project.author.initials}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">{project.author.name}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex items-center gap-1 text-xs">
                    <Heart className="h-3.5 w-3.5" />
                    {project.likes}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <MessageSquare className="h-3.5 w-3.5" />
                    {project.comments}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <Eye className="h-3.5 w-3.5" />
                    {project.views}
                  </span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
