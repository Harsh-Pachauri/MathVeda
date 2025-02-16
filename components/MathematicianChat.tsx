"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"

export default function MathematicianChat({ mathematicianId }: { mathematicianId: string }) {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const response = await fetch("https://mathematecian-api.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mathematician: mathematicianId,
          message: input.trim(),
        }),
      })

      const data = await response.json()

      const assistantMessage = {
        role: "assistant" as const,
        content: data.response || "I couldn't process that. Please try again!",
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error fetching response:", error)
      setMessages((prev) => [...prev, { role: "assistant" as const, content: "An error occurred. Please try again." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="card space-y-4">
      <h2 className="font-cormorant text-2xl font-semibold">
        Chat with {mathematicianId.charAt(0).toUpperCase() + mathematicianId.slice(1)}
      </h2>
      <div className="h-64 overflow-y-auto space-y-4 p-4 bg-white rounded-md">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${message.role === "user" ? "bg-amber-200 ml-auto" : "bg-white"} max-w-[80%]`}
          >
            {message.content}
          </div>
        ))}
        {loading && <div className="text-gray-500">Thinking...</div>}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 p-2 rounded border border-amber-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
          disabled={loading}
        />
        <button type="submit" className="btn-primary" disabled={loading}>
          <Send size={20} />
        </button>
      </form>
    </div>
  )
}

