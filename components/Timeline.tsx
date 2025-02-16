"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const timelineEvents = [
  { year: "300 BCE", event: "Euclid's Elements", description: "Foundational work in geometry" },
  { year: "500 CE", event: "Indian numerals", description: "Development of the decimal system" },
  { year: "1600s", event: "Calculus", description: "Newton and Leibniz invent calculus" },
  { year: "1900s", event: "Modern mathematics", description: "Rapid advancements in various fields" },
]

export default function Timeline() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null)

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-x-auto py-8">
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.year}
            className="flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveEvent(activeEvent === index ? null : index)}
          >
            <div className="w-full md:w-32 h-32 md:h-40 bg-amber-100 rounded-lg shadow-md flex items-center justify-center p-4 text-center">
              <span className="font-cormorant font-bold text-lg">{event.year}</span>
            </div>
            {activeEvent === index && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-brown-900 text-amber-100 p-4 rounded-lg shadow-lg max-w-xs"
              >
                <h3 className="font-cormorant font-bold text-lg mb-2">{event.event}</h3>
                <p className="text-sm">{event.description}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

