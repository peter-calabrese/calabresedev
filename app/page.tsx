"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Linkedin, Terminal } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 ">

      {/* Main Content Container */}
      <div className="max-w-2xl w-full space-y-8 text-center">

        {/* Top Badge */}
        <div className="flex justify-center">
          <Badge variant="secondary" className="px-3 py-1 text-sm rounded-full bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50">
            <Terminal className="w-4 h-4 mr-2" />
            Portfolio Currently Under Development
          </Badge>
        </div>

        {/* Hero Text */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Peter Calabrese
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-zinc-500 dark:text-zinc-400">
            Freelance Software Developer
          </h2>
          <p className="max-w-lg mx-auto text-zinc-600 dark:text-zinc-300 leading-relaxed pt-4">
            This website is currently under construction. Check back soon!
          </p>
        </div>

        {/* Notification Form */}
        <div className=" max-w-md mx-auto space-y-4">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Looking to have something built? Reach out below
          </p>
          <form className="flex w-full items-center space-x-2 flex-col gap-2 h-fit p-2" onSubmit={(e) => e.preventDefault()}>
            <div className="flex w-full items-center space-x-2 gap-2" >
              <Input type="text" placeholder="First Name" className="flex-1 h-10 dark:border-zinc-50" />
              <Input type="text" placeholder="Last Name" className="flex-1 h-10 dark:border-zinc-50" />
            </div>
            <Input type="email" placeholder="Enter your email" className="h-10 dark:border-zinc-50" />
            <Textarea placeholder="Type your message here." className="h-32 dark:border-zinc-50" />
            <Button type="submit" className="bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 w-full">Send Message</Button>
          </form>
        </div>

        {/* Social Links */}
        <div className="pt-12 flex justify-center space-x-6">
          <a href="https://github.com/peter-calabrese" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            <span className="sr-only">GitHub</span>
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/peter-calabrese/" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:peter@calabrese.dev" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="w-6 h-6" />
          </a>
        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-sm text-zinc-400">
        &copy; {new Date().getFullYear()} Peter Calabrese. All rights reserved.
      </div>
    </div >
  )
}