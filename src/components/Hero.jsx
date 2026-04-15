import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 items-center gap-16">

        {/* Text Content */}
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Full-Stack Developer <br className="hidden md:block" />
            Crafting <span className="text-indigo-500 whitespace-nowrap">AI-Powered</span>
            <span className="text-indigo-500"> Web Experiences</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 max-w-xl mx-auto md:mx-0"
          >
            Final-year Computer Science student specializing in MERN, scalable system design, and AI-powered applications using LLMs and modern cloud technologies.
          </motion.p>

          {/* ✅ FIXED BUTTON (No asChild) */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start"
          >
            <a
              href="/Resume_Siya(1).pdf"
              download="Resume_Siya(1).pdf"
            >
              <Button
                size="lg"
                className="text-base bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-500 flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </Button>
            </a>
          </motion.div>

        </motion.div>

        {/* Image Content */}
        <motion.div
          className="flex justify-center md:justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative group">

            {/* Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>

            {/* Image */}
            <img
              src="/profile.png"
              alt="Developer Profile"
              className="relative w-72 h-72 md:w-[420px] md:h-[420px] object-cover rounded-2xl shadow-2xl border border-white/10"
              loading="lazy"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}