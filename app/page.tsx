"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, FileText, Braces, MessageSquare, Smartphone, PenTool } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submission prevented")
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with S2EE Background */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/S2EE%202025-SIWaG7mPAFXQqcIKhVv5f0Ngmu76Qp.jpeg"
            alt="S2EE 2025 Background"
            fill
            className="object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 leading-tight">
              {t("hero.welcome")}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 px-4">{t("hero.subtitle")}</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3">
                  {t("hero.viewProjects")}
                </Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300 px-8 py-3"
                >
                  {t("hero.contactMe")}
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                {t("expertise.title")}
              </span>
              <span className="ml-2 text-white"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Braces className="w-10 h-10 text-purple-500" />}
                title={t("expertise.frontend.title")}
                description={t("expertise.frontend.desc")}
              />
              <ServiceCard
                icon={<PenTool className="w-10 h-10 text-pink-500" />}
                title={t("expertise.uiux.title")}
                description={t("expertise.uiux.desc")}
              />
              <ServiceCard
                icon={<Smartphone className="w-10 h-10 text-purple-500" />}
                title={t("expertise.mobile.title")}
                description={t("expertise.mobile.desc")}
              />
              <ServiceCard
                icon={<FileText className="w-10 h-10 text-pink-500" />}
                title={t("expertise.database.title")}
                description={t("expertise.database.desc")}
              />
              <ServiceCard
                icon={<Github className="w-10 h-10 text-purple-500" />}
                title={t("expertise.project.title")}
                description={t("expertise.project.desc")}
              />
              <ServiceCard
                icon={<MessageSquare className="w-10 h-10 text-pink-500" />}
                title={t("expertise.event.title")}
                description={t("expertise.event.desc")}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                {t("projects.title")}
              </span>
              <span className="ml-2 text-white"></span>
            </h2>
            <div className="space-y-16">
              <ProjectCard />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <a
                href="/cv/CV-Yousra-Fouanat-L3-MIAGE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                <FileText className="mr-2 h-5 w-5" />
                {t("cv.button")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon icon={<Github />} href="https://github.com/yousrafouanat?tab=repositories" label="GitHub" />
            <SocialIcon
              icon={<Linkedin />}
              href="https://www.linkedin.com/in/yousra-fouanat-23ba54274/"
              label="LinkedIn"
            />
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Yousra Fouanat. {t("footer.rights")}
            </p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard() {
  const { t } = useLanguage()

  const projectsData = [
    {
      id: 5,
      title: t("projects.studentway.title"),
      description: t("projects.studentway.desc"),
      tags: ["Business Law", "Project Management", "Business Model", "Financial Planning", "GDPR", "Team Leadership"],
      logo: "/images/logo-studentway.png",
      date: t("projects.studentway.date"),
      images: [
        {
          src: "/images/studentway-organigramme.png",
          alt: "StudentWay - Organization Chart",
        },
        {
          src: "/images/studentway-bilan-financier.png",
          alt: "StudentWay - Financial Balance Sheet",
        },
      ],
    },
    {
      id: 1,
      title: t("projects.unis.title"),
      description: (
        <>
          {t("projects.unis.desc")}
          <br />
          <br />
          <a
            href="https://www.figma.com/design/Q1RDraqsW8QFpTUnfhoQFk/UI?node-id=1-2&p=f&t=PyZcC4atTddTXfJJ-0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            {t("projects.unis.figma")}
          </a>
        </>
      ),
      tags: ["UI/UX Design", "Feasibility Analysis", "Risk Analysis", "Agile Management"],
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20unis-joQBHD04qscU4NlGCxlLi91xe5kWUI.png",
      date: "April - May 2025",
      images: [
        {
          src: "/images/unis-mobile-1.png",
          alt: "UNIS Mobile App - Login and Welcome Screens",
        },
        {
          src: "/images/unis-mobile-2.png",
          alt: "UNIS Mobile App - Scholarship Requests and ChatBot",
        },
      ],
    },
    {
      id: 2,
      title: t("projects.sihati.title"),
      description: (
        <>
          {t("projects.sihati.desc")}
          <br />
          <br />
          <strong>{t("projects.sihati.github")}</strong>
          <br />
          {t("projects.sihati.frontend")}{" "}
          <a
            href="https://github.com/xRyolinx/sihati-front"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            https://github.com/xRyolinx/sihati-front
          </a>
          <br />
          {t("projects.sihati.backend")}{" "}
          <a
            href="https://github.com/djebrouni/Backend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            https://github.com/djebrouni/Backend
          </a>
          <br />
          <br />
          <a
            href="https://www.figma.com/design/qGmDjPNvHGIoF2dsb1v4xT/Sihati-UI?node-id=3-2&p=f&t=hrngy99cmdkNXIT9-0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            {t("projects.sihati.figma")}
          </a>
        </>
      ),
      tags: ["Angular", "TypeScript", "RESTful API", "Pytest", "Selenium"],
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20sihati-vSIaUpf55Bagaj5DgMHJ72bvAicslg.png",
      date: "November 2024 - January 2025",
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sihati2-Ip8iexEAgn1xm5pUWjJDSIcCWUOBUl.png",
          alt: "Sihati Doctor Dashboard Interface",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sihati1-IXOTjT9djD1BgIw0Qb7qVdCcLOi0xU.png",
          alt: "Sihati Laboratory Technician Interface",
        },
      ],
    },
    {
      id: 3,
      title: t("projects.selekny.title"),
      description: (
        <>
          {t("projects.selekny.desc")}
          <br />
          <br />
          {t("projects.selekny.explore")}
          <br />
          <a
            href="https://rachadbachir.github.io/Selekny_website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            {t("projects.selekny.website")}
          </a>
          <br />
          <a
            href="https://www.figma.com/design/JF9dRPwc3Ozj7q4MINkT7l/UI-SELEKNY?node-id=0-1&p=f&t=tonWTxFSaG6llEXW-0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            {t("projects.selekny.figma")}
          </a>
          <br />
          <a
            href="https://www.instagram.com/selekny.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 underline"
          >
            {t("projects.selekny.instagram")}
          </a>
        </>
      ),
      tags: ["Dart", "Flutter", "Google Maps API", "Team Collaboration"],
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20selekny-JjWJnmYUkuErTnFSKKy6eLbQ6ATgZA.png",
      date: "February - June 2024",
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/selekny1.jpg-O2NGz3RiGe324QTGOfwLYJlpmW0sZp.jpeg",
          alt: "Selekny App Promotional Design",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/selekny2.jpg-zEVpNHKvKYFFydJUed1LhNYlWkCHJQ.jpeg",
          alt: "Selekny App Interface Screens",
        },
      ],
    },
    {
      id: 4,
      title: t("projects.speech.title"),
      description: t("projects.speech.desc"),
      tags: ["Java", "JavaFX", "SceneBuilder", "POO", "Desktop App"],
      date: "April - May 2024",
    },
  ]

  return (
    <>
      {projectsData.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[400px]">
            <div className="p-6 flex flex-col">
              {/* Project Header with Logo and Date */}
              <div className="flex items-center gap-4 mb-6">
                {project.logo && (
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
                    <Image
                      src={project.logo || "/placeholder.svg"}
                      alt={`${project.title} Logo`}
                      width={60}
                      height={60}
                      className={`object-contain w-full h-full rounded-full ${project.id === 5 ? "scale-125" : ""}`}
                      style={{ clipPath: "circle(50%)" }}
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-purple-400 text-sm font-medium">{project.date}</p>
                </div>
              </div>

              <div className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
                {typeof project.description === "string" ? project.description : project.description}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {project.images && (
              <div className="flex flex-col gap-4 p-6 bg-gray-800/30 justify-center">
                {project.images.map((image, imageIndex) => (
                  <div key={imageIndex} className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a href="mailto:fouanat.yousra@gmail.com" className="text-purple-400 hover:text-purple-300">
        fouanat.yousra@gmail.com
      </a>
    </div>
  )
}
