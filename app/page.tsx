"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { MessageCircle } from "lucide-react"
import MathematicianShowcase from "@/components/MathematicianShowcase"
import Timeline from "@/components/Timeline"
import FeaturedDiscoveries from "@/components/FeaturedDiscoveries"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-parchment text-brown-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 px-4">
        {/* Background Layers */}
        <motion.div
          className="absolute inset-0 z-0 opacity-90"
          style={{
            backgroundImage: "url('https://wallpaperaccess.com/full/2796643.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.8) contrast(1.1)",
            y: y1,
          }}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/thumbnails/022/429/681/small_2x/abstract-low-poly-geometric-shapes-background-png.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: y2,
          }}
        />

        {/* Content */}
        <div className="relative z-20 text-center space-y-6 max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-7xl font-merriweather font-bold text-brown-900 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              textShadow: "2px 2px 10px rgba(139, 69, 19, 0.5)",
            }}
          >
            Discover the Minds That Shaped Mathematics
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-ubuntu text-brown-800 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            From Euclid to Ramanujan, explore the theorems, puzzles, and genius of history's greatest mathematicians.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link
              href="#showcase"
              className="inline-block bg-gradient-to-r from-[#5A1E1E] to-[#3B0F0F] text-[#FFD700] px-6 py-3 md:px-10 md:py-4 rounded-full font-cormorant text-lg md:text-xl font-semibold border-2 border-[#FFD700] 
                hover:bg-[#7A2929] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110"
              style={{
                boxShadow: "0 4px 10px rgba(255, 215, 0, 0.5)",
              }}
            >
              Begin Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mathematician Showcase */}
      <section id="showcase" className="relative py-16 px-4 bg-amber-50">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('https://storage.needpix.com/rsynced_images/parchment-2692342_1280.jpg')] bg-cover bg-center"
          style={{ opacity: 0.5 }}
        ></div>

        {/* Content Wrapper to Ensure Text is Readable */}
        <div className="relative z-10">
          <h2 className="text-5xl md:text-5xl font-cormorant font-bold text-center ">Legendary Mathematicians</h2>
          <MathematicianShowcase />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-parchment">
        <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-center mb-8">Mathematics Through the Ages</h2>
        <Timeline />
      </section>

      {/* Featured Discoveries */}
      <section className="py-16 px-4 bg-amber-50">
        <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-center mb-8">Timeless Theorems & Puzzles</h2>
        <FeaturedDiscoveries />
      </section>

      {/* AI Chatbot Widget */}
      <Link href="/chat-with-mathematician" className="fixed bottom-4 right-4 z-50">
        <button className="bg-brown-900 text-amber-100 p-4 rounded-full shadow-lg hover:bg-brown-800 transition-colors duration-300">
          <MessageCircle size={24} />
        </button>
      </Link>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-parchment">
        <h2 className="text-3xl md:text-4xl font-cormorant font-bold text-center mb-8">Mathematical Legacy</h2>
        <Testimonials />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

