"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  MapPin,
  Calendar,
  Code,
  Database,
  Cloud,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Github,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-teal-800">Bhumika</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                    activeSection === item.id ? "text-teal-600" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-teal-100">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left space-y-6 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl font-medium text-gray-600 animate-fade-in-up animation-delay-200">
                  Hi, I'm
                </h1>
                <h2 className="text-5xl sm:text-7xl font-bold text-teal-600 animate-fade-in-up animation-delay-400">
                  Bhumika
                </h2>
                <p className="text-xl sm:text-2xl text-gray-600 animate-fade-in-up animation-delay-600">
                  Bridging Code and Creativity to Build Intelligent, User-Centric Solutions
                </p>
                <p className="text-lg text-gray-500 max-w-2xl animate-fade-in-up animation-delay-800">
                  Software engineer with a strong grasp of data structures and algorithms, building efficient, scalable
                  applications. I create responsive web apps and intelligent systems using React, Python, Android, and
                  data visualization.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 animate-fade-in-up animation-delay-1000">
                <a
                  href="https://github.com/Venkata-Bhumika-Guthi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="http://www.linkedin.com/in/venkata-bhumika-guthi-357a08208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:venkatabhumikaguthi@gmail.com"
                  className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-1200">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("projects")}
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 transform hover:scale-105 transition-all duration-300"
                >
                  View My Work
                </Button>
              </div>
            </div>

            {/* Right side - Profile image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right animation-delay-600 pt-8 lg:pt-12">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-teal-200 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-emerald-200 rounded-full animate-float animation-delay-1000"></div>

                {/* Main image container */}
                <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white hover:ring-teal-200 transition-all duration-500 hover:scale-105 group mt-4 lg:mt-8">
                  <img
                    src="/images/headshot.png"
                    alt="Bhumika - Software Engineer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{
                      objectPosition: "50% 35%",
                    }}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-teal-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-60 h-60 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Summary</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Software Engineer with extensive experience in building responsive web applications, Android applications,
              and AI-powered platforms. I specialize in modern technologies including React, Next.js, Java, and Python,
              with a strong focus on creating user-centric solutions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              My expertise spans across data visualization, algorithm design, and cloud technologies like AWS and Azure.
              I'm passionate about delivering scalable solutions that prioritize usability and performance.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-1000"></div>
          <div className="absolute bottom-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-3000"></div>
          <div className="absolute top-60 right-40 w-48 h-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-5000"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {/* Experience 1 */}
            <Card className="border-l-4 border-l-teal-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-teal-600 transition-colors">
                      Software Engineering Intern
                    </CardTitle>
                    <CardDescription className="text-teal-600 font-medium">
                      Hawl Technologies | Remote, USA
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>May 2025 - Present</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React.js", "JavaScript", "HTML", "CSS", "Git", "UI/UX Design"].map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2 group/item hover:text-gray-800 transition-colors">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>
                      Developed and deployed a Blur Toggle feature using React.js, enhancing user privacy and
                      customization in the company's AI-driven interview platform.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:text-gray-800 transition-colors">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>
                      Collaborated with design and marketing teams to create visual content and promotional materials,
                      boosting platform visibility and engagement.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:text-gray-800 transition-colors">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>
                      Contributed to front-end component refinement, ensuring accessibility, responsiveness, and
                      seamless user experience across devices.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Experience 2 */}
            <Card className="border-l-4 border-l-teal-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-teal-600 transition-colors">
                      Web Development Intern
                    </CardTitle>
                    <CardDescription className="text-teal-600 font-medium">VillageCore | Remote, USA</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 2025 - Present</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Python", "Node.js", "React", "TypeScript", "AWS", "Docker"].map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2 group/item hover:text-gray-800 transition-colors">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>
                      Contributed to VillageCore website development with responsive, user-friendly frontend components,
                      leading to a 20% increase in user retention.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:text-gray-800 transition-colors">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>
                      Incorporated feedback from 500+ user surveys to refine interface design and boost positive
                      customer feedback by 20%.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Experience 3 */}
            <Card className="border-l-4 border-l-teal-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-teal-600 transition-colors">
                      Graduate Engineer Trainee
                    </CardTitle>
                    <CardDescription className="text-teal-600 font-medium">LTIMindtree | Remote, India</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Feb 2023 - May 2023</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["AWS", "Azure", "Apache Spark", "Hadoop", "SQL"].map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2 group/item hover:text-gray-800 transition-colors">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>
                      Completed advanced training in cloud computing and big data engineering, ranking in the top 10%.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:text-gray-800 transition-colors">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>
                      Designed and optimized batch data processing pipelines using Apache Spark and relational
                      databases.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:text-gray-800 transition-colors">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>
                      Gained practical experience in SQL scripting and shell programming, automating data extraction and
                      transformation tasks to support ETL workflows in simulated production environments.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Experience 4 */}
            <Card className="border-l-4 border-l-teal-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-teal-600 transition-colors">
                      Software Developer
                    </CardTitle>
                    <CardDescription className="text-teal-600 font-medium">
                      Madanapalle Institute of Technology and Science | AP, India
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 2022 - Jan 2023</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Python", "JavaScript", "Node.js", "Express.js", "HTML", "CSS"].map((skill, index) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2 group/item hover:text-gray-800 transition-colors">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>
                      Collaborated on the development of a campus-wide management system that streamlined student
                      registration and attendance, reducing manual workload by 40%.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 group/item hover:text-gray-800 transition-colors">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span>
                      Built and deployed responsive web interfaces using HTML, CSS, and JavaScript, ensuring
                      cross-device compatibility and improving user experience for students and administrators.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-32 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-32 right-32 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
          <div className="absolute top-80 right-80 w-48 h-48 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-emerald-50/50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore my latest work showcasing innovative solutions and technical expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - Amazon Delivery Route Optimizer */}
            <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden group relative transform hover:-translate-y-3">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Delivery+Route+Map&bg=0f766e&color=ffffff"
                  alt="Amazon Delivery Route Optimizer Dashboard"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-600/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Route Optimization</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 group-hover:text-teal-600 transition-colors">
                  Amazon Delivery Route Optimizer
                </CardTitle>
                <CardDescription>Interactive Logistics Web App</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Real-time delivery route optimization platform with 5 advanced algorithms, achieving sub-100ms
                  optimization speed for up to 20 locations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech, index) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs hover:bg-teal-50 hover:border-teal-300 transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">March 2025</div>
                  <Button
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105 transition-all duration-200"
                    onClick={() => window.open("https://v0-amazon-delivery-route-optimizer.vercel.app/", "_blank")}
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View Live
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 - Academy Awards Analysis */}
            <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden group relative transform hover:-translate-y-3">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Data+Analytics+Charts&bg=1e40af&color=ffffff"
                  alt="Academy Awards Data Visualization"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-purple-600/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Data Visualization</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 group-hover:text-teal-600 transition-colors">
                  Academy Awards Analysis
                </CardTitle>
                <CardDescription>Data Visualization Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Interactive dashboard analyzing 90+ years of Oscar data with advanced visualizations and real-time
                  filtering capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["D3.js", "Observable", "Python", "JavaScript"].map((tech, index) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs hover:bg-teal-50 hover:border-teal-300 transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">May 2025</div>
                  <Button
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105 transition-all duration-200"
                    onClick={() =>
                      window.open(
                        "https://github.com/Venkata-Bhumika-Guthi/Oscars-Data-Visualization-project",
                        "_blank",
                      )
                    }
                  >
                    <Github className="w-3 h-3 mr-1" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 - Android Application Suite */}
            <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden group relative transform hover:-translate-y-3">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=400&text=Mobile+App+Interface&bg=dc2626&color=ffffff"
                  alt="Android Application Suite"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-red-600/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">Mobile Apps</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900 group-hover:text-teal-600 transition-colors">
                  Android Application Suite
                </CardTitle>
                <CardDescription>Mobile Development Projects</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Suite of Android apps including contact manager, cricket player interface, and real-time news
                  aggregator with 25% API performance improvement.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Java", "Android Studio", "SQLite", "Retrofit"].map((tech, index) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs hover:bg-teal-50 hover:border-teal-300 transition-colors"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">Aug 2024 - Dec 2024</div>
                  <Button
                    size="sm"
                    className="bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105 transition-all duration-200"
                    onClick={() => window.open("https://github.com/Venkata-Bhumika-Guthi/Android-projects", "_blank")}
                  >
                    <Github className="w-3 h-3 mr-1" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-24 right-24 w-56 h-56 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-1500"></div>
          <div className="absolute bottom-24 left-24 w-56 h-56 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-3500"></div>
          <div className="absolute top-72 left-72 w-40 h-40 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-500"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "JavaScript", "TypeScript", "SQL", "Shell Scripting"].map((skill) => (
                    <Badge key={skill} className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Frameworks & Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Node.js", "Spring Boot", "Express.js", "Git", "Figma"].map((skill) => (
                    <Badge key={skill} className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Cloud Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Apache Spark", "Hadoop"].map(
                    (skill) => (
                      <Badge key={skill} className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors">
                        {skill}
                      </Badge>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">Databases & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "SQLite", "RDBMS", "Postman", "Wireframing", "TDD", "Agile", "SDLC"].map((skill) => (
                    <Badge key={skill} className="bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-16 w-52 h-52 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2500"></div>
          <div className="absolute bottom-16 right-16 w-52 h-52 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4500"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-teal-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-6 h-6 text-teal-600" />
                  <CardTitle className="text-xl text-gray-900">Master's in Computer Science</CardTitle>
                </div>
                <CardDescription className="text-teal-600 font-medium">
                  Northern Illinois University | USA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">CGPA: 3.607</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Aug 2023 - May 2025</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-emerald-600 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                  <CardTitle className="text-xl text-gray-900">Bachelor's in Information Technology</CardTitle>
                </div>
                <CardDescription className="text-emerald-600 font-medium">
                  Madanapalle Institute of Technology & Science | India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">CGPA: 8.92</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Aug 2019 - May 2023</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-48 h-48 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-3000"></div>
          <div className="absolute top-60 right-60 w-32 h-32 bg-white/10 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-1500"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-teal-100 mb-12">I'm always interested in new opportunities and collaborations</p>
          <div className="grid md:grid-cols-4 gap-8">
            <div
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => window.open("mailto:venkatabhumikaguthi@gmail.com")}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                <Mail className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-teal-100 group-hover:text-white transition-colors text-sm">
                venkatabhumikaguthi@gmail.com
              </p>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => window.open("tel:+18155491364")}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                <Phone className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-teal-100 group-hover:text-white transition-colors">+1 (815) 549-1364</p>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => window.open("http://www.linkedin.com/in/venkata-bhumika-guthi-357a08208", "_blank")}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-teal-100 group-hover:text-white transition-colors">Connect with me</p>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => window.open("https://github.com/Venkata-Bhumika-Guthi", "_blank")}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                <Github className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-teal-100 group-hover:text-white transition-colors">View my code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Venkata Bhumika Guthi. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
      <style jsx global>{`
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in-right {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @keyframes bounce-gentle {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out forwards;
    opacity: 0;
  }

  .animate-fade-in-right {
    animation: fade-in-right 0.8s ease-out forwards;
    opacity: 0;
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-bounce-gentle {
    animation: bounce-gentle 2s ease-in-out infinite;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
  }

  .animation-delay-400 {
    animation-delay: 0.4s;
  }

  .animation-delay-600 {
    animation-delay: 0.6s;
  }

  .animation-delay-800 {
    animation-delay: 0.8s;
  }

  .animation-delay-1000 {
    animation-delay: 1s;
  }

  .animation-delay-1200 {
    animation-delay: 1.2s;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }
`}</style>
    </div>
  )
}
