"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [input, setInput] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Here you would typically make an API call to your AI service
    // For this example, we'll simulate a response
    setTimeout(() => {
      const assistantMessage = {
        role: "assistant" as const,
        content:
          "Greetings, seeker of knowledge. I am an ancient Vedic scholar, here to share the wisdom of Vedic mathematics. How may I assist you on your journey of learning?",
      }
      setMessages((prev) => [...prev, assistantMessage])
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-saffron-50 flex flex-col">
      <div className="flex-1 p-4 bg-[url('/temple-backdrop.jpg')] bg-cover bg-center">
        <div className="max-w-3xl mx-auto bg-saffron-100 bg-opacity-90 rounded-lg shadow-lg p-6 h-full flex flex-col">
          <h1 className="font-cormorant text-3xl font-bold text-maroon-900 mb-6 text-center">Ask the Vedic Gurus</h1>
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  message.role === "user" ? "bg-gold-200 ml-auto" : "bg-maroon-700 text-saffron-50"
                } max-w-[80%]`}
              >
                {message.content}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your question..."
              className="flex-1 p-2 rounded border border-maroon-700 focus:outline-none focus:ring-2 focus:ring-gold-600"
            />
            <button
              type="submit"
              className="bg-maroon-700 text-saffron-50 p-2 rounded hover:bg-maroon-900 transition-colors"
            >
              <Send size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

