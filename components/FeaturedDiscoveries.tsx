"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const discoveries = [
  {
    id: "pythagoras",
    title: "Pythagorean Theorem",
    description:
      "In a right triangle, the square of the hypotenuse is equal to the sum of squares of the other two sides.",
  },
  {
    id: "euler",
    title: "Euler's Identity",
    description: "e^(iπ) + 1 = 0, connecting five fundamental mathematical constants.",
  },
  {
    id: "archimedes",
    title: "Archimedes' Principle",
    description:
      "A body immersed in a fluid experiences a buoyant force equal to the weight of the fluid it displaces.",
  },
]

export default function FeaturedDiscoveries() {
  const [activeDiscovery, setActiveDiscovery] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {discoveries.map((discovery) => (
        <motion.div
          key={discovery.id}
          className="bg-amber-100 rounded-lg shadow-lg overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveDiscovery(activeDiscovery === discovery.id ? null : discovery.id)}
        >
          <div className="p-6">
            <h3 className="font-cormorant font-bold text-xl md:text-2xl mb-2">{discovery.title}</h3>
            {activeDiscovery === discovery.id && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="text-sm md:text-base"
              >
                {discovery.description}
              </motion.p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

