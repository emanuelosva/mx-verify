import type { Metadata } from "next"
import { Inter } from "next/font/google"
// Lib
import { cn } from "@/lib/utils"
// Styles
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Es un link seguro?",
  description: "Verifica si un link o url es legítimo o no. Protegete de las estafas y fraudes en internet.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
