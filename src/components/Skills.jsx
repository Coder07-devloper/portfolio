import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaDatabase } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si"

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },

  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "SQL (MySQL)", icon: FaDatabase, color: "text-blue-300" },

  { name: "REST APIs", icon: FaNodeJs, color: "text-indigo-400" },
  { name: "Authentication (JWT)", icon: FaNodeJs, color: "text-purple-400" },
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },

  { name: "AI / LLM Integration", icon: FaReact, color: "text-pink-400" },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I use to build scalable, AI-powered, and production-ready applications.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} variants={cardVariants}>
              <Card className="bg-white/5 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-4">
                  <skill.icon className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="font-medium text-gray-200 text-center">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}