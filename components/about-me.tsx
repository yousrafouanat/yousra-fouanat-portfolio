"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const experienceData = [
  {
    id: 4,
    company: "Samsic Groupe",
    role: "Software Testing & Development Intern",
    roleFr: "Stagiaire Tests Automatisés & Développement",
    period: "April - August 2026",
    periodFr: "Avril - Août 2026",
    location: "Rennes, France",
    locationFr: "Rennes, France",
    type: "Internship",
    typeFr: "Stage",
    logo: "/images/logo-samsic-groupe.jpg",
    skills: ["PHP", "Symfony", "GraphQL", "GitLab CI", "CI/CD", "Automated Testing", "Agile"],
    skillsFr: ["PHP", "Symfony", "GraphQL", "GitLab CI", "CI/CD", "Tests Automatisés", "Agile"],
    images: [
      {
        src: "/images/samsic-groupe-experience.jpeg",
        alt: "Samsic Groupe - Office Building",
      },
    ],
  },
  {
    id: 1,
    company: "KHADMONEY",
    role: "Frontend Developer Intern",
    roleFr: "Stagiaire Développeuse Frontend",
    period: "July - August 2024",
    periodFr: "Juillet - Août 2024",
    location: "Alger, Algeria",
    locationFr: "Alger, Algérie",
    type: "Internship",
    typeFr: "Stage",
    logo: "/images/khadmoney-logo.png", // Chemin corrigé
    skills: ["React.js", "E-commerce", "Frontend Development"],
    skillsFr: ["React.js", "E-commerce", "Développement Frontend"],
    images: [
      {
        src: "/images/khadmoney-internship.jpeg",
        alt: "Yousra Fouanat - KHADMONEY Internship Certificate of Completion",
      },
    ],
  },
  {
    id: 2,
    company: "ETIC Club",
    role: "External Relations Member",
    roleFr: "Membre Relations Externes",
    period: "2023 - 2025",
    periodFr: "2023 - 2025",
    location: "ESI, Algeria",
    locationFr: "ESI, Algérie",
    type: "Associative",
    typeFr: "Associatif",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-mOmcStvybqATkbT4a1zKDuVQspatnw.png",
    skills: ["Event Organization", "Project Management", "Leadership"],
    skillsFr: ["Organisation d'Événements", "Gestion de Projet", "Leadership"],
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TC2025-fCucus7ain120rVGRc4W1S3hmelImy.jpeg",
        alt: "Training Camp 2025 - ETIC Club Event",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pathos-BT5sgKkfbmNA6wkVm0cg6fmrXjcXg3.jpeg",
        alt: "Media Coverage - PATHOS Interview",
      },
    ],
  },
  {
    id: 3,
    company: "Freelance",
    role: "Event Organizer",
    roleFr: "Organisatrice d'Événements",
    period: "2024",
    periodFr: "2024",
    location: "Alger, Algeria",
    locationFr: "Alger, Algérie",
    type: "Freelance",
    typeFr: "Freelance",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freelane-dkkcJHJf5fErA8jnihKxRmlgHDG7CA.png",
    skills: ["Event Planning", "Technical Organization", "Logistics"],
    skillsFr: ["Planification d'Événements", "Organisation Technique", "Logistique"],
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SAO-QpP1N4RmC3y3CHxmxoR3j4KbN89IzN.jpeg",
        alt: "9th Congress of Algerian Orthodontic Society - Modern Orthodontics",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SEMENAIRE-rJqGQpFqsZr4vh84QhXodGdKJEaWck.jpeg",
        alt: "International AI Seminar - European Bar Federation",
      },
    ],
  },
]

const skillsCategories = [
  {
    category: "Programming Languages",
    categoryFr: "Langages de Programmation",
    skills: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    ],
  },
  {
    category: "Frameworks/Libraries",
    categoryFr: "Frameworks/Bibliothèques",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
      { name: "Twig", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
    ],
  },
  {
    category: "Tools & Technologies",
    categoryFr: "Outils & Technologies",
    skills: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Git/GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "RStudio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg" },
      { name: "Excel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    ],
  },
]

export default function AboutMe() {
  const { t, language } = useLanguage()

  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              {t("about.title")}
            </span>
            <span className="ml-2"></span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0032-pmJNaAYVgzEgzAoe7lBffBu6woVu4u.jpeg"
                  alt="Yousra Fouanat"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">{t("about.mobileDesc")}</p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    🎓 <strong>{t("about.greeting")}</strong>
                  </p>
                  <p className="mb-4">{t("about.description1")}</p>
                  <p>{t("about.description2")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                {t("experience.title")}
              </span>
              <span className="ml-2 text-white"></span>
            </h3>
            <div className="space-y-16">
              {experienceData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="p-6 flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden p-3">
                          <Image
                            src={item.logo || "/placeholder.svg"}
                            alt={item.company}
                            width={70}
                            height={70}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {language === "fr" ? item.roleFr : item.role}
                          </h3>
                          <h4 className="text-lg text-purple-400">{item.company}</h4>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{language === "fr" ? item.periodFr : item.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{language === "fr" ? item.locationFr : item.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Building2 className="w-4 h-4" />
                          <span className="text-sm">{language === "fr" ? item.typeFr : item.type}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 text-base leading-relaxed flex-grow">
                        {item.id === 1 && t("experience.khadmoney.desc")}
                        {item.id === 2 && t("experience.etic.desc")}
                        {item.id === 3 && t("experience.freelance.desc")}
                        {item.id === 4 && t("experience.samsic.desc")}
                      </p>

                      {item.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {(language === "fr" ? item.skillsFr : item.skills).map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-4 p-6 bg-gray-800/30">
                      {item.images.map((image, imageIndex) => (
                        <div key={imageIndex} className="relative h-80 rounded-lg overflow-hidden">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className={`transition-transform hover:scale-105 duration-300 ${
                              image.src.includes("FSUdb") ? "object-cover object-center" : "object-cover object-top"
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                {t("skills.title")}
              </span>
              <span className="ml-2 text-white"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillsCategories.map((category) => (
                <div
                  key={category.category}
                  className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800"
                >
                  <h4 className="text-xl font-bold mb-6 text-purple-400 text-center">
                    {language === "fr" ? category.categoryFr : category.category}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                      >
                        <Image
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="rounded-md"
                        />
                        <span className="text-gray-300 text-sm text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
