"use client"

import Link from "next/link"
import { Home, Users, GraduationCap, Info, X, MessageCircle } from "lucide-react"
import { useSidebar } from "@/components/sidebar-provider"

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/mathematicians", icon: Users, label: "Mathematicians" },
  { href: "/learn", icon: GraduationCap, label: "Interactive Learning" },
  { href: "/chat-with-mathematician", icon: MessageCircle, label: "Chat with Mathematician" },
  { href: "/about", icon: Info, label: "About" },
]

export default function Sidebar() {
  // ✅ This must be inside SidebarProvider (which is now fixed)
  const { isOpen, isMinimized, toggleSidebar } = useSidebar()

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 border-r-2 border-amber-800 shadow-xl
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      ${isMinimized ? "w-16" : "w-64"} 
      bg-[#2c0704] text-amber-200 p-6 space-y-6 md:relative md:translate-x-0`}
    >
      {/* Sidebar Header */}
      <div className="flex justify-between items-center">
        {!isMinimized && (
          <h1 className="font-cormorant text-2xl font-bold tracking-wider text-amber-300 drop-shadow-lg">
            MathVeda
          </h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-full bg-amber-900 hover:bg-amber-700 text-amber-100 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-all duration-300 border border-transparent
                ${isMinimized ? "justify-center" : ""}
                hover:text-amber-400 hover:border-amber-600 hover:shadow-md`}
              >
                <item.icon size={22} className="text-amber-300 hover:text-amber-400 transition-colors" />
                {!isMinimized && <span className="text-lg font-medium tracking-wide">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
