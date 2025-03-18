"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, Code, FileText, Wand2 } from "lucide-react"

/**
 * AI Feature Section Component
 *
 * Demonstrates AI capabilities with:
 * - Interactive prompt input
 * - Tabs for different AI features (code, content, design)
 * - Simulated AI generation with sample responses
 */
export function AiFeatureSection() {
  // State for the user's input prompt
  const [prompt, setPrompt] = useState("")

  // State to track if generation is in progress
  const [isGenerating, setIsGenerating] = useState(false)

  // State to store the generated result
  const [result, setResult] = useState("")

  // State to track which tab is active
  const [activeTab, setActiveTab] = useState("code")

  /**
   * Handles the generation of AI content
   * This is a simulated function that returns predefined responses
   * based on the selected tab
   */
  const handleGenerate = async () => {
    // Don't proceed if prompt is empty
    if (!prompt.trim()) return

    // Set loading state and clear previous results
    setIsGenerating(true)
    setResult("")

    // Sample responses for each tab type
    const responses = {
      code: `// Generated React component based on your prompt
import React, { useState } from 'react';

export function CustomButton({ text, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className={\`px-4 py-2 rounded-md transition-all \${
        isHovered 
          ? 'bg-blue-600 text-white' 
          : 'bg-blue-500 text-white'
      }\`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
}`,
      content: `# How to Optimize Your Web Application

When optimizing your web application, consider these key areas:

1. **Performance**: Minimize bundle size, implement code splitting, and optimize images
2. **Accessibility**: Ensure your app is usable by everyone
3. **SEO**: Implement proper metadata and semantic HTML
4. **User Experience**: Create intuitive interfaces with smooth transitions

Remember that optimization is an ongoing process, not a one-time task.`,
      design: `Here's a design system recommendation based on your prompt:

Color Palette:
- Primary: #3B82F6 (Blue)
- Secondary: #8B5CF6 (Purple)
- Accent: #10B981 (Green)
- Background: #F9FAFB (Light Gray)
- Text: #1F2937 (Dark Gray)

Typography:
- Headings: Inter, sans-serif (Bold, 700)
- Body: Inter, sans-serif (Regular, 400)
- Base size: 16px with 1.5 line height

Spacing System:
- 4px base unit
- Increments: 4px, 8px, 16px, 24px, 32px, 48px, 64px

Components should use consistent rounding (8px) and subtle shadows for depth.`,
    }

    // Simulate API delay with setTimeout
    setTimeout(() => {
      // Set the result based on the active tab
      setResult(responses[activeTab])
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <Sparkles className="h-4 w-4 text-purple-400 mr-2" />
            <span className="text-white/80 text-sm">AI-Powered Tools</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enhance Your Development Workflow</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Leverage the power of AI to streamline your development process and boost productivity.
          </p>
        </div>

        {/* AI feature card */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-white">AI Development Assistant</CardTitle>
            <CardDescription className="text-white/70">
              Generate code, content, or design suggestions based on your requirements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Tabs for different AI features */}
            <Tabs defaultValue="code" className="mb-6" onValueChange={setActiveTab}>
              <TabsList className="bg-white/5 border border-white/10">
                <TabsTrigger value="code" className="data-[state=active]:bg-white/10">
                  <Code className="h-4 w-4 mr-2" />
                  Code
                </TabsTrigger>
                <TabsTrigger value="content" className="data-[state=active]:bg-white/10">
                  <FileText className="h-4 w-4 mr-2" />
                  Content
                </TabsTrigger>
                <TabsTrigger value="design" className="data-[state=active]:bg-white/10">
                  <Wand2 className="h-4 w-4 mr-2" />
                  Design
                </TabsTrigger>
              </TabsList>

              {/* Tab content descriptions */}
              <TabsContent value="code">
                <div className="text-white/70 mb-4">
                  Describe the component or functionality you need, and our AI will generate the code for you.
                </div>
              </TabsContent>
              <TabsContent value="content">
                <div className="text-white/70 mb-4">
                  Need help with writing documentation, blog posts, or marketing copy? Let our AI assist you.
                </div>
              </TabsContent>
              <TabsContent value="design">
                <div className="text-white/70 mb-4">
                  Get design suggestions, color palettes, and UI recommendations based on your requirements.
                </div>
              </TabsContent>
            </Tabs>

            {/* Prompt input and generate button */}
            <div className="space-y-4">
              <Textarea
                placeholder="Describe what you need..."
                className="min-h-[100px] bg-white/5 border-white/10 text-white"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                aria-label="AI prompt input"
              />

              <Button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                aria-label="Generate AI response"
              >
                {isGenerating ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white/50 border-t-white rounded-full animate-spin mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate
                  </>
                )}
              </Button>
            </div>

            {/* Results display */}
            {result && (
              <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg">
                <h4 className="text-white font-medium mb-2">Result:</h4>
                <pre className="text-white/80 whitespace-pre-wrap text-sm overflow-auto max-h-[300px] p-4 bg-slate-900 rounded-md">
                  {result}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

