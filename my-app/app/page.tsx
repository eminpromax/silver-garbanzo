import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { AiFeatureSection } from "@/components/ai-feature-section"

/**
 * Home Page Component
 *
 * This is the main page of our portfolio application.
 * It renders all section components in sequence.
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section with animated background */}
      <HeroSection />

      {/* Projects showcase section */}
      <ProjectsSection />

      {/* Skills and expertise section */}
      <SkillsSection />

      {/* AI features demonstration section */}
      <AiFeatureSection />
    </main>
  )
}

