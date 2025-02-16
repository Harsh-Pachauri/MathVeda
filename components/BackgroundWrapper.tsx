import type React from "react"

interface BackgroundWrapperProps {
  children: React.ReactNode
  className?: string
  backgroundImage?: string
}

export function BackgroundWrapper({ children, className = "", backgroundImage }: BackgroundWrapperProps) {
  const style: React.CSSProperties = {}

  if (backgroundImage) {
    style.backgroundImage = `url(${backgroundImage})`
    style.backgroundSize = "cover"
    style.backgroundPosition = "center"
    style.backgroundRepeat = "no-repeat"
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}

