import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  title: "GlitzFair Anniversary Edition — Business · Family · Fun",
  description:
    "Kano’s first family funfair turns ten. GlitzFair, launched by Bells Nigeria in 2016, is the MSME marketplace and family day Northern Nigeria keeps coming back to.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className={`${nunito.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
