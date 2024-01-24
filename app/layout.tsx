import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
// Lib
import { cn } from "@/lib/utils"
// Styles
import "./globals.css"
// Config
import { SITE } from "@/config"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: SITE.seo.title,
  description: SITE.seo.description,
  authors: SITE.seo.authors,
  keywords: SITE.seo.keywords,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-background text-text",
          fontSans.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
