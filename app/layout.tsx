import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"

export const metadata: Metadata = {
  title: "Yousra Fouanat - L3 MIAGE Student & Full Stack Developer",
  description:
    "Portfolio of Yousra Fouanat, a L3 MIAGE student and Full Stack Developer specializing in web and mobile development, seeking internship opportunities.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
