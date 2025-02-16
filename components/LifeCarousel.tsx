"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Event {
  title: string
  description: string
  image: string
}

interface LifeCarouselProps {
  events: Event[]
}

export default function LifeCarousel({ events }: LifeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        prevSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, events.length]) // Added dependencies

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="w-1/2 pr-4">
            <Image
              src={events[currentIndex].image || "/placeholder.svg"}
              alt={events[currentIndex].title}
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
          <div className="w-1/2 pl-4">
            <h3 className="font-cormorant text-xl font-semibold mb-2 text-brown-900">{events[currentIndex].title}</h3>
            <p className="font-serif text-brown-800">{events[currentIndex].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-amber-100 p-2 rounded-full shadow-md hover:bg-amber-200 transition-colors"
      >
        <ChevronLeft className="text-brown-900" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-amber-100 p-2 rounded-full shadow-md hover:bg-amber-200 transition-colors"
      >
        <ChevronRight className="text-brown-900" />
      </button>
    </div>
  )
}

