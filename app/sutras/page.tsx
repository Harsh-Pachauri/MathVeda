"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const sutras = [
  {
    id: 1,
    sanskrit: "एकाधिकेन पूर्वेण",
    english: "By one more than the previous one",
    explanation: "This sutra is used for squaring numbers ending in 5 and in some cases of multiplication.",
  },
  {
    id: 2,
    sanskrit: "निखिलं नवतश्चरमं दशतः",
    english: "All from 9 and the last from 10",
    explanation: "This sutra is used for subtraction from powers of 10 and in some cases of division.",
  },
  {
    id: 3,
    sanskrit: "ऊर्ध्वतिर्यग्भ्याम्",
    english: "Vertically and crosswise",
    explanation: "This sutra is used for multiplication, division, and factorization.",
  },
  // Add the remaining 13 sutras here with their explanations
]

export default function SutrasPage() {
  const [selectedSutra, setSelectedSutra] = useState<number | null>(null)

  return (
    <div className="space-y-8">
      <h1 className="font-cormorant text-4xl font-bold text-center">Vedic Math Sutras</h1>
      <p className="text-center max-w-2xl mx-auto">
        The 16 Vedic Sutras are the fundamental principles of Vedic Mathematics. Each sutra encapsulates a method for
        solving complex calculations quickly and efficiently.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sutras.map((sutra) => (
          <motion.div
            key={sutra.id}
            className="card cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedSutra(sutra.id)}
          >
            <h2 className="font-cormorant text-xl font-semibold text-orange-600 mb-2">{sutra.sanskrit}</h2>
            <p className="text-sm text-gray-600 mb-2">{sutra.english}</p>
            <p className="text-sm">{sutra.explanation}</p>
          </motion.div>
        ))}
      </div>
      {selectedSutra && <SutraDetails sutraId={selectedSutra} onClose={() => setSelectedSutra(null)} />}
    </div>
  )
}

function SutraDetails({ sutraId, onClose }: { sutraId: number; onClose: () => void }) {
  const sutra = sutras.find((s) => s.id === sutraId)

  if (!sutra) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
        <h2 className="font-cormorant text-2xl font-bold text-orange-600 mb-2">{sutra.sanskrit}</h2>
        <p className="text-gray-600 mb-4">{sutra.english}</p>
        <p className="mb-4">{sutra.explanation}</p>
        <h3 className="font-cormorant text-xl font-semibold mb-2">Example</h3>
        <p className="mb-4">
          {/* Add a specific example for each sutra */}
          For instance, using the "{sutra.english}" sutra, we can quickly calculate...
        </p>
        <button onClick={onClose} className="btn-primary">
          Close
        </button>
      </div>
    </motion.div>
  )
}

