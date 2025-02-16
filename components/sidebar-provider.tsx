"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface SidebarContextProps {
  isOpen: boolean
  isMinimized: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    setIsMinimized(!isMinimized)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, isMinimized, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
