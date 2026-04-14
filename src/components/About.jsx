import { motion } from "framer-motion"
import { Code, Cpu, Database, Cloud } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-white/[0.03]">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate developer focused on learning, building, and exploring AI-powered web applications.
          </p>
        </div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed mb-16"
        >
          <p>
            I am a final-year Computer Science student with a strong interest in{" "}
            <span className="text-indigo-400 font-medium">full-stack development (MERN)</span>,{" "}
            <span className="text-indigo-400 font-medium">backend systems</span>, and{" "}
            <span className="text-indigo-400 font-medium">RESTful APIs</span>.
            I enjoy building applications that are clean, efficient, and user-focused.
          </p>

          <p className="mt-4">
            Recently, I’ve been exploring{" "}
            <span className="text-indigo-400 font-medium">AI and LLM-based applications</span>,
            working on projects that combine modern web technologies with intelligent features.
            I’m continuously learning and improving my skills by building real-world projects.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Code,
              title: "Full-Stack Development",
              desc: "Building web apps using React, Node.js & modern tools",
            },
            {
              icon: Cpu,
              title: "AI Exploration",
              desc: "Learning and experimenting with LLM-based applications",
            },
            {
              icon: Database,
              title: "Backend Basics",
              desc: "Working with APIs, authentication & databases",
            },
            {
              icon: Cloud,
              title: "Tools & Deployment",
              desc: "Hands-on with Git, AWS basics & Docker",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-500 transition"
            >
              <item.icon className="text-indigo-400 mb-4" size={28} />
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}