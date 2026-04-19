import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const projects = [
  {
    title: "🚀Acadify — AI Study Assistant",
    description: "An AI-powered learning platform that generates personalized study roadmaps and content recommendations using LLMs. Integrates an OCR-based pipeline for extracting insights from PDFs/images, with scalable APIs and secure authentication for dynamic, context-aware learning.",
    image: "/Project1.png",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "LLM API", "Tesseract.js"],
    demoLink: "https://acadify-ai-study-assistant.vercel.app/",
    githubLink: "https://github.com/Coder07-devloper/Acadify-AI-Study-Assistant",
  },
  {
    title: "🔥HirableX — AI Interview Preparation Platform",
    description: "An AI-driven interview preparation platform that provides personalized feedback, skill-gap analysis, and preparation roadmaps using LLMs. Includes an ATS-optimized resume generator with secure authentication and scalable backend for efficient data processing.",
    image: "/project2.png",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Gemini API", "Puppeteer"],
    demoLink: "https://hireable-x.vercel.app/",
    githubLink: "https://github.com/Coder07-devloper/HireableX",
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of complex applications and elegant interfaces I've built.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={projectVariants}>
              <Card className="overflow-hidden group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
                </div>

                <CardContent className="flex-1 p-6 pt-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-4">
                  <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                    <a href={project.githubLink}>
                      <FaGithub className="w-4 h-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="w-full gap-2" asChild>
                    <a href={project.demoLink}>
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
