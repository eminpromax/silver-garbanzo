"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Github, Linkedin } from "lucide-react"

/**
 * Hero Section Component
 *
 * This component displays the main hero section with:
 * - Animated gradient background
 * - Social media links
 * - Introduction text
 * - Call-to-action buttons
 */
export function HeroSection() {
  // State to track scroll position for parallax effect
  const [scrollY, setScrollY] = useState(0)

  // Set up scroll event listener for parallax effect
  useEffect(() => {
    // Function to update scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        }}
      >
        {/* Colored blur elements for visual interest */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[100px] -top-20 -left-20" />
          <div className="absolute h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[100px] top-1/2 left-1/2" />
          <div className="absolute h-[300px] w-[300px] rounded-full bg-cyan-600/20 blur-[100px] bottom-20 right-20" />
        </div>
      </div>

      {/* Main content container with frosted glass effect */}
      <div
        className="relative z-10 max-w-5xl w-full px-6 py-12 md:py-24 mx-auto backdrop-blur-sm bg-white/10 rounded-3xl border border-white/20 shadow-2xl"
        style={{
          // Parallax effect based on scroll position
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Social media links */}
          <div className="mb-6 flex space-x-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 hover:bg-white/20"
            >
              <Github className="h-5 w-5 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 hover:bg-white/20"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 hover:bg-white/20"
            >
              <Code className="h-5 w-5 text-white" />
            </Button>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              John Developer
            </span>
          </h1>

          {/* Subtitle/description */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
            Full-stack developer specializing in creating beautiful, performant web applications with modern
            technologies
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="rounded-full bg-white text-slate-900 hover:bg-white/90">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white/40 text-white font-medium bg-black/30 hover:bg-black/50"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

