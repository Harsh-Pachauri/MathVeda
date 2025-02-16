"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    author: "Carl Sagan",
    quote: "Mathematics is the language of the universe.",
  },
  {
    id: 2,
    author: "Terence Tao",
    quote: "Exploring ancient theorems leads to unexpected insights.",
  },
]

export default function Testimonials() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          className="bg-amber-100 rounded-lg shadow-lg p-4 md:p-6 mb-6"
          whileHover={{ scale: 1.02 }}
        >
          <p className="font-handwritten text-base md:text-lg mb-4">"{testimonial.quote}"</p>
          <p className="font-cormorant font-bold text-right text-sm md:text-base">- {testimonial.author}</p>
        </motion.div>
      ))}
    </div>
  )
}

