"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import MathematicianChat from "@/components/MathematicianChat"

const mathematicians = [
  { id: "aryabhatta", name: "Aryabhatta" },
  { id: "ramanujan", name: "Srinivasa Ramanujan" },
  { id: "pythagoras", name: "Pythagoras" },
  { id: "gauss", name: "Carl Friedrich Gauss" },
  { id: "euclid", name: "Euclid" },
]

export default function ChatWithMathematicianPage() {
  const [selectedMathematician, setSelectedMathematician] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-cormorant text-4xl font-bold text-maroon-900 mb-8 text-center"
        >
          Chat with a Mathematician
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <label htmlFor="mathematician-select" className="block text-lg font-semibold mb-2 text-maroon-800">
            Select a Mathematician:
          </label>
          <select
            id="mathematician-select"
            value={selectedMathematician || ""}
            onChange={(e) => setSelectedMathematician(e.target.value)}
            className="w-full p-2 border border-amber-300 rounded-md bg-amber-100 text-maroon-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">-- Select a Mathematician --</option>
            {mathematicians.map((mathematician) => (
              <option key={mathematician.id} value={mathematician.id}>
                {mathematician.name}
              </option>
            ))}
          </select>
        </motion.div>
        {selectedMathematician && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <MathematicianChat mathematicianId={selectedMathematician} />
          </motion.div>
        )}
      </div>
    </div>
  )
}

