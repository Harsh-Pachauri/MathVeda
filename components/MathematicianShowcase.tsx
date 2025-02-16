"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const mathematicians = [
  {
    id: "euclid",
    name: "Euclid",
    discovery: "Father of Geometry",
    image: "https://cdn.britannica.com/46/8446-050-BC92B998/Euclid-woodcut-1584.jpg",
  },
  {
    id: "pythagoras",
    name: "Pythagoras",
    discovery: "Pythagorean Theorem",
    image: "https://th.bing.com/th/id/OIP.PAIKybglFfmNbmJ5xb_0jQAAAA?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: "archimedes",
    name: "Archimedes",
    discovery: "Principle of Buoyancy",
    image: "https://cdn.britannica.com/58/187758-050-09C50136/Archimedes-canvas-Giuseppe-Nogari-Pushkin-Fine-Arts.jpg",
  },
  {
    id: "newton",
    name: "Isaac Newton",
    discovery: "Calculus",
    image: "https://th.bing.com/th/id/OIP.2AJj2jAiy3um-EVocR7OSQHaJO?w=148&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    id: "ramanujan",
    name: "Srinivasa Ramanujan",
    discovery: "Infinite Series",
    image: "https://www.cfalindia.com/wp-content/uploads/2023/09/Ramanujan-1.jpg",
  },
];

export default function MathematicianShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % mathematicians.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[550px] flex flex-col items-center justify-center px-4">
      
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {mathematicians.map((mathematician, index) => (
          <motion.div
            key={mathematician.id}
            className="absolute w-40 h-60 md:w-64 md:h-80 lg:w-72 lg:h-96 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden cursor-pointer border border-white/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: index === activeIndex ? 1 : 0.8,
              opacity: index === activeIndex ? 1 : 0.3,
              x: `${(index - activeIndex) * 120}%`,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={mathematician.image || "/placeholder.svg"}
              alt={mathematician.name}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 hover:opacity-80"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
              <h3 className="text-amber-100 text-lg md:text-2xl font-cormorant font-bold">
                {mathematician.name}
              </h3>
              <p className="text-amber-300 text-sm md:text-base">{mathematician.discovery}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-4 flex space-x-3">
        {mathematicians.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-amber-300 scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

