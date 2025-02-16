"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const exercises = [
  { id: 1, name: "Pythagorean Theorem", description: "Test your knowledge of the famous a² + b² = c² theorem." },
  { id: 2, name: "Aryabhata's Approximation of Pi", description: "Explore Aryabhata's method for calculating Pi." },
  { id: 3, name: "Brahmagupta's Formula", description: "Learn about the area of cyclic quadrilaterals." },
  { id: 4, name: "Bhaskara's Sine Approximation", description: "Understand Bhaskara II's accurate sine function." },
]

export default function LearnPage() {
  return (
    <div
      className="min-h-screen bg-saffron-50 py-12
    "
    >
      <div className="container mx-auto px-4 ">
        <h1 className="font-cormorant text-5xl font-bold text-maroon-100 mb-8 text-center">Interactive Learning</h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6
        
        "
        >
          {exercises.map((exercise) => (
            <motion.div
              key={exercise.id}
              className="bg-saffron-100 p-6 rounded-lg shadow-md bg-[url('https://th.bing.com/th/id/R.1b365026f7fc12e09451fb053710b308?rik=Gc98qhM71H1P6g&riu=http%3a%2f%2fmyfreetextures.com%2fwp-content%2fuploads%2f2014%2f11%2fold-brown-paper-texture-image.jpg&ehk=TW%2bYZNeeX6rFFbFP7iZCNj2pClHNRS2qy3x3sVvPzYk%3d&risl=1&pid=ImgRaw&r=0')] bg-cover bg-center"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="font-cormorant text-2xl font-semibold text-maroon-700 mb-2">{exercise.name}</h2>
              <p className="text-maroon-900 mb-4">{exercise.description}</p>
              <Link
                href={`/learn/exercise/${exercise.id}`}
                className="inline-block bg-maroon-700 text-saffron-50 px-4 py-2 rounded hover:bg-maroon-900 transition-colors"
              >
                Start Exercise
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

