import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Send } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="flex flex-col space-y-4">
              <a href="mailto:siyasri19.14@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-indigo-500" />
                <span>siyasri19.14@gmail.com</span>
              </a>
              <a href="https://github.com/Coder07-devloper" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <FaGithub className="w-5 h-5 text-indigo-500" />
                <span>https://github.com/Coder07-devloper</span>
              </a>
              <a href="https://www.linkedin.com/in/siya-srivastava-17bb15341" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="w-5 h-5 text-indigo-500" />
                <span>https://www.linkedin.com/in/siya-srivastava-17bb15341</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Name</label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-md h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Email</label>
                      <input
                        type="email"
                        className="w-full bg-white/5 border border-white/10 rounded-md h-10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Message</label>
                    <textarea
                      className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all min-h-[120px]"
                      placeholder="Hi there..."
                    />
                  </div>
                  <Button className="w-full gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
