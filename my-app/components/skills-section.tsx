"use client"

import { useState } from "react"
import { Code2, Database, Layout, Palette, Server, Sparkles } from "lucide-react"

/**
 * Skills data array
 *
 * Contains information about each skill category including:
 * - title, icon, and description
 * - list of related technologies
 */
const skills = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Layout className="h-6 w-6" />,
    description: "Creating responsive, accessible, and performant user interfaces with modern frameworks.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    description: "Building scalable and secure server-side applications and APIs.",
    technologies: ["Node.js", "Express", "Python", "Django", "GraphQL"],
  },
  {
    id: "database",
    title: "Database Design",
    icon: <Database className="h-6 w-6" />,
    description: "Designing and optimizing database schemas for performance and scalability.",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma"],
  },
  {
    id: "ai",
    title: "AI Integration",
    icon: <Sparkles className="h-6 w-6" />,
    description: "Integrating AI capabilities into web applications for enhanced functionality.",
    technologies: ["OpenAI API", "AI SDK", "TensorFlow.js", "Hugging Face", "LangChain"],
  },
  {
    id: "design",
    title: "UI/UX Design",
    icon: <Palette className="h-6 w-6" />,
    description: "Creating beautiful and intuitive user interfaces with a focus on user experience.",
    technologies: ["Figma", "Adobe XD", "Sketch", "Design Systems", "Accessibility"],
  },
  {
    id: "code",
    title: "Clean Code",
    icon: <Code2 className="h-6 w-6" />,
    description: "Writing maintainable, testable, and efficient code following best practices.",
    technologies: ["Test-Driven Development", "CI/CD", "Code Reviews", "Documentation", "Refactoring"],
  },
]

/**
 * Skills Section Component
 *
 * Displays an interactive skills section with:
 * - Grid of skill categories with icons
 * - Detailed view of the selected skill
 * - List of technologies for each skill
 */
export function SkillsSection() {
  // State to track which skill is currently active/selected
  const [activeSkill, setActiveSkill] = useState(skills[0].id)

  return (
    <section className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills selection grid */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 h-fit">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => setActiveSkill(skill.id)}
                  className={`p-4 rounded-xl transition-all duration-300 flex flex-col items-center text-center ${
                    activeSkill === skill.id
                      ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10"
                      : "hover:bg-white/5"
                  }`}
                  aria-pressed={activeSkill === skill.id}
                  aria-label={`Select ${skill.title} skill`}
                >
                  {/* Skill icon */}
                  <div
                    className={`p-3 rounded-full mb-3 ${
                      activeSkill === skill.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-white/10 text-white/70"
                    }`}
                  >
                    {skill.icon}
                  </div>

                  {/* Skill title */}
                  <span className={`text-sm font-medium ${activeSkill === skill.id ? "text-white" : "text-white/70"}`}>
                    {skill.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed skill information */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className={`transition-opacity duration-300 ${activeSkill === skill.id ? "block" : "hidden"}`}
                aria-hidden={activeSkill !== skill.id}
              >
                {/* Skill header with icon and title */}
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mr-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{skill.title}</h3>
                </div>

                {/* Skill description */}
                <p className="text-white/70 mb-8">{skill.description}</p>

                {/* Technologies list */}
                <div className="space-y-4">
                  <h4 className="text-white font-medium">Technologies:</h4>
                  <div className="flex flex-wrap gap-3">
                    {skill.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

