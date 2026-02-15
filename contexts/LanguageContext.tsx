"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.expertise": "Expertise",
    "nav.work": "Projets",

    // Hero Section
    "hero.welcome": "Bienvenue sur le portfolio de Yousra FOUANAT",
    "hero.subtitle": "Étudiante en L3 MIAGE | À la recherche d'une alternance en DATA science à partir de septembre 2026 | DATA enthousiaste | UI/UX Designer",
    "hero.viewProjects": "Voir les Projets",
    "hero.contactMe": "Me Contacter",

    // About Section
    "about.title": "À propos de moi",
    "about.mobileDesc":
      "Étudiante en L3 MIAGE, passionnée par le développement et la data. À la recherche d'une alternance de 24 mois dans le domaine de la data en Île-de-France.",
    "about.greeting": "Salut, je suis Yousra Fouanat !",
    "about.description1":
      "Étudiante en L3 MIAGE à l'Université de Rennes, passionnée par le développement et la data, j'aime transformer les idées en solutions numériques concrètes. Que ce soit à travers des applications web, des projets data ou du design UI/UX, je prends plaisir à concevoir des expériences utiles et impactantes.",
    "about.description2":
      "Actuellement à la recherche d'une alternance de 24 mois dans le domaine de la data en Île-de-France, afin de mettre en pratique mes compétences, approfondir mes connaissances et contribuer à des projets innovants au sein d'une équipe dynamique. Connectons-nous et construisons quelque chose d'incroyable ensemble !",

    // Professional Experience
    "experience.title": "Expérience Professionnelle",
    "experience.khadmoney.desc":
      "Développement de l'interface d'un site e-commerce avec React.js. Focus sur l'expérience utilisateur et le design responsive. Collaboration avec l'équipe backend pour l'intégration des APIs.",
    "experience.etic.desc":
      "Organisation d'événements majeurs incluant le Training Camp (bootcamp 3 jours) et le S2EE (salon de l'emploi avec 60+ entreprises). Responsabilités : recherche de sponsors, coordination logistique et gestion des opérations.",
    "experience.freelance.desc":
      "Coordination technique de deux événements majeurs : le 9ème Congrès de la Société Algérienne d'Orthodontie et un séminaire international sur l'IA organisé par la Fédération des Barreaux Européens. Gestion de l'infrastructure technique et des communications.",

    // Skills
    "skills.title": "Compétences",
    "skills.programming": "Langages de Programmation",
    "skills.frameworks": "Frameworks/Bibliothèques",
    "skills.tools": "Outils & Technologies",

    // Expertise Section
    "expertise.title": "Mon Expertise",
    "expertise.frontend.title": "Développement Frontend",
    "expertise.frontend.desc":
      "Développement d'applications web et mobiles utilisant React.js, Angular, Flutter et des frameworks modernes.",
    "expertise.uiux.title": "Design UI/UX",
    "expertise.uiux.desc":
      "Conception d'interfaces utilisateur et d'expériences avec Figma, axée sur les principes de conception centrée sur l'utilisateur.",
    "expertise.mobile.title": "Développement Mobile",
    "expertise.mobile.desc":
      "Applications mobiles multiplateformes utilisant Flutter et Dart avec intégration Firebase.",
    "expertise.database.title": "Gestion de Base de Données",
    "expertise.database.desc":
      "Conception et gestion de bases de données utilisant MySQL avec focus sur la modélisation et l'optimisation des données.",
    "expertise.project.title": "Gestion de Projet",
    "expertise.project.desc":
      "Direction de projets de développement avec des outils et méthodologies modernes pour une livraison efficace.",
    "expertise.event.title": "Organisation d'Événements",
    "expertise.event.desc":
      "Expérience dans l'organisation de séminaires internationaux, camps d'entraînement et événements étudiants via le club ETIC.",

    // Projects
    "projects.title": "Ce que j'ai Construit",
    "projects.unis.title": "Plateforme Numérique des Services Universitaires - UNIS",
    "projects.unis.desc":
      "Conception UI/UX d'une plateforme universitaire centralisant les services étudiants. Projet incluant étude de faisabilité technique et financière, analyse de risques, et prototypage avec Figma. Approche centrée utilisateur avec itérations basées sur les retours.",
    "projects.unis.figma": "Voir le Design Figma",

    "projects.sihati.title": "Gestion des Dossiers de Santé Électroniques - Sihati",
    "projects.sihati.desc":
      "Plateforme web de gestion sécurisée des données de santé développée en équipe de 6 étudiants. Rôle : Chef de Projet et Développeuse Frontend. Technologies : Angular, TypeScript. Interfaces adaptées aux médecins, infirmières et patients.",
    "projects.sihati.github": "Liens GitHub :",
    "projects.sihati.frontend": "• Frontend :",
    "projects.sihati.backend": "• Backend :",
    "projects.sihati.figma": "Voir le Design Figma",

    "projects.selekny.title": "Application Mobile de Services à Domicile - Selekny",
    "projects.selekny.desc":
      "Application mobile de réservation de services de maintenance (plomberie, électricité, nettoyage). Développée en équipe de 6 étudiants avec Flutter/Dart, intégration Google Maps, système d'avis et messagerie intégrée.",
    "projects.selekny.explore": "Liens du projet :",
    "projects.selekny.website": "Site Web de l'App",
    "projects.selekny.figma": "Design UI Figma",
    "projects.selekny.instagram": "Instagram",

    "projects.speech.title": "Gestion de Clinique d'Orthophonie",
    "projects.speech.desc":
      "Application de bureau Java/JavaFX pour la gestion d'une clinique d'orthophonie. Fonctionnalités : suivi des patients, planification des rendez-vous et gestion de la facturation.",

    // CV and Footer
    "cv.button": "Voir mon CV",
    "footer.rights": "Tous droits réservés.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.expertise": "Expertise",
    "nav.work": "Work",

    // Hero Section
    "hero.welcome": "Welcome to the portfolio of Yousra FOUANAT",
    "hero.subtitle": "L3 MIAGE Student | Seeking a DATA Science Apprenticeship from September 2026 | DATA Enthusiast | UI/UX Designer",
    "hero.viewProjects": "View Projects",
    "hero.contactMe": "Contact Me",

    // About Section
    "about.title": "About Me",
    "about.mobileDesc":
      "L3 MIAGE Student, passionate about development and data. Seeking a 24-month apprenticeship in data in the Île-de-France region.",
    "about.greeting": "Hey, I'm Yousra Fouanat!",
    "about.description1":
      "A L3 MIAGE student at Université de Rennes, passionate about development and data, I love turning ideas into concrete digital solutions. Whether through web applications, data projects, or UI/UX design, I enjoy creating useful and impactful experiences.",
    "about.description2":
      "Currently seeking a 24-month apprenticeship in data in the Île-de-France region, to put my skills into practice, deepen my knowledge, and contribute to innovative projects within a dynamic team. Let's connect and build something amazing together!",

    // Professional Experience
    "experience.title": "Professional Experience",
    "experience.khadmoney.desc":
      "Developed e-commerce website interface using React.js. Focused on user experience and responsive design. Collaborated with backend team for API integration.",
    "experience.etic.desc":
      "Organized major events including Training Camp (3-day bootcamp) and S2EE (job fair with 60+ companies). Responsibilities: sponsor outreach, logistics coordination, and operations management.",
    "experience.freelance.desc":
      "Technical coordination of two major events: 9th Congress of Algerian Society of Orthodontics and international AI seminar by Federation of European Bars. Managed technical infrastructure and communications.",

    // Skills
    "skills.title": "Skills",
    "skills.programming": "Programming Languages",
    "skills.frameworks": "Frameworks/Libraries",
    "skills.tools": "Tools & Technologies",

    // Expertise Section
    "expertise.title": "My Expertise",
    "expertise.frontend.title": "Frontend Development",
    "expertise.frontend.desc":
      "Web and mobile application development using React.js, Angular, Flutter, and modern frameworks.",
    "expertise.uiux.title": "UI/UX Design",
    "expertise.uiux.desc":
      "User interface and experience design using Figma with focus on user-centered design principles.",
    "expertise.mobile.title": "Mobile Development",
    "expertise.mobile.desc": "Cross-platform mobile applications using Flutter and Dart with Firebase integration.",
    "expertise.database.title": "Database Management",
    "expertise.database.desc":
      "Database design and management using MySQL with focus on data modeling and optimization.",
    "expertise.project.title": "Project Management",
    "expertise.project.desc":
      "Leading development projects with modern tools and methodologies for efficient delivery.",
    "expertise.event.title": "Event Organization",
    "expertise.event.desc":
      "Experience in organizing international seminars, training camps, and student events through ETIC club.",

    // Projects
    "projects.title": "What I've Built",
    "projects.unis.title": "Digital University Services Platform - UNIS",
    "projects.unis.desc":
      "UI/UX design of a university platform centralizing student services. Project included technical and financial feasibility study, risk analysis, and prototyping with Figma. User-centered approach with feedback-based iterations.",
    "projects.unis.figma": "View Figma Design",

    "projects.sihati.title": "Electronic Health Records Management - Sihati",
    "projects.sihati.desc":
      "Secure health data management web platform developed by a team of 6 students. Role: Project Manager and Frontend Developer. Technologies: Angular, TypeScript. Interfaces tailored to doctors, nurses, and patients.",
    "projects.sihati.github": "GitHub Links:",
    "projects.sihati.frontend": "• Frontend:",
    "projects.sihati.backend": "• Backend:",
    "projects.sihati.figma": "View Figma Design",

    "projects.selekny.title": "Home Services Mobile App - Selekny",
    "projects.selekny.desc":
      "Mobile app for booking home maintenance services (plumbing, electrical, cleaning). Developed by a team of 6 students using Flutter/Dart, Google Maps integration, review system, and integrated messaging.",
    "projects.selekny.explore": "Project links:",
    "projects.selekny.website": "App Website",
    "projects.selekny.figma": "Figma UI Design",
    "projects.selekny.instagram": "Instagram",

    "projects.speech.title": "Speech Therapy Clinic Management",
    "projects.speech.desc":
      "Java/JavaFX desktop application for speech therapy clinic management. Features: patient tracking, appointment scheduling, and billing management.",

    // CV and Footer
    "cv.button": "View My CV",
    "footer.rights": "All rights reserved.",
  },
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("fr") // Français par défaut

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("portfolio-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
