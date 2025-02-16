"use client"

import "./globals.css"
import { Inter, Cormorant_Garamond } from "next/font/google"
import Sidebar from "@/components/Sidebar"
import { SidebarProvider } from "@/components/sidebar-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cormorant = Cormorant_Garamond({ weight: "400", subsets: ["latin"], variable: "--font-cormorant" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans bg-amber-50 text-brown-900`}>
        {/* ✅ Wrap everything inside SidebarProvider */}
        <SidebarProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
