"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

/**
 * Project data array
 *
 * Contains information about each project including:
 * - title, description, image URL
 * - technology tags
 * - links to live demo and GitHub repository
 */
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js, Tailwind CSS, and Stripe integration.",
    image: "https://picsum.photos/seed/ecommerce/400/300",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An AI-powered content generator that helps create blog posts, social media content, and more.",
    image: "https://picsum.photos/seed/ai/400/300",
    tags: ["React", "AI SDK", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Dashboard UI",
    description: "A responsive dashboard UI with dark mode, charts, and analytics features.",
    image: "https://picsum.photos/seed/dashboard/400/300",
    tags: ["React", "Chart.js", "Tailwind CSS", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

/**
 * Projects Section Component
 *
 * Displays a grid of project cards with:
 * - Project images with hover effects
 * - Project titles and descriptions
 * - Technology tags
 * - Links to code and demo
 */
export function ProjectsSection() {
  // State to track which project is currently being hovered
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in web development and design.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project image with zoom effect on hover */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  }`}
                  unoptimized={project.image.startsWith("https://")}
                />
              </div>

              {/* Project title and description */}
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-white/70">{project.description}</CardDescription>
              </CardHeader>

              {/* Technology tags */}
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Project links */}
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

