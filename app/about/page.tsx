import { Mail } from "lucide-react"
import Image from "next/image"
import { BackgroundWrapper } from "@/components/BackgroundWrapper"

const teamMembers = [
  {
    name: "Harsh Pachuri",
    role: "Team Leader",
    image:
      "https://res.cloudinary.com/dzffxmfsu/image/upload/v1739717984/WhatsApp_Image_2025-02-16_at_20.25.54_a8c21d6a_xcr5yl.jpg",
    contribution: "Web development and project management",
  },
  {
    name: "Kawaljeet Singh",
    role: "Team Member",
    image:
      "https://res.cloudinary.com/dzffxmfsu/image/upload/v1739715858/WhatsApp_Image_2025-02-16_at_19.53.52_6cce8004_vuqcmt.jpg",
    contribution: "AI integration, Backend and API deployment and integration",
  },
  {
    name: "Mayank Jangra",
    role: "Team Member",
    image: "https://res.cloudinary.com/dzffxmfsu/image/upload/v1739719118/WhatsApp_Image_2025-02-16_at_20.44.31_48be4ab4_u1szp6.jpg",
    contribution: "Web development and design",
  },
  {
    name: "Gaurav Jakhar",
    role: "Team Member",
    image:
      "https://res.cloudinary.com/dzffxmfsu/image/upload/v1739717605/WhatsApp_Image_2025-02-16_at_20.22.39_b28a2b1b_vtul3a.jpg",
    contribution: "Web development and content",
  },
]

export default function AboutPage() {
  return (
    <BackgroundWrapper
      backgroundImage="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      className="min-h-screen bg-cover bg-center bg-fixed"
    >
      <div className="min-h-screen bg-black bg-opacity-70 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-cormorant text-4xl font-bold text-amber-300 mb-8 text-center">About MathVeda</h1>

          <div className="max-w-4xl mx-auto bg-amber-100 bg-opacity-90 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="font-cormorant text-2xl font-semibold text-maroon-900 mb-4">Our Mission</h2>
            <p className="text-maroon-800 mb-4">
              MathVeda is a revolutionary platform dedicated to preserving and promoting the ancient wisdom of Vedic
              mathematics. Our mission is to make this powerful mathematical system accessible to learners worldwide
              through interactive lessons, AI-powered guidance, and a comprehensive repository of Vedic mathematical
              knowledge.
            </p>
            <p className="text-maroon-800">
              We believe that by combining the ancient techniques of Vedic math with modern technology, we can enhance
              mathematical understanding and problem-solving skills for students of all ages.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-amber-100 bg-opacity-90 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="font-cormorant text-2xl font-semibold text-maroon-900 mb-4">Features</h2>
            <ul className="list-disc list-inside text-maroon-800 space-y-2">
              <li>Interactive lessons on Vedic mathematical techniques</li>
              <li>AI-powered chatbot for personalized learning assistance</li>
              <li>Comprehensive biographies of legendary mathematicians</li>
              <li>Quizzes to test and reinforce your knowledge</li>
              <li>Timeline of mathematical discoveries</li>
              <li>Mobile-responsive design for learning on-the-go</li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto bg-amber-100 bg-opacity-90 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="font-cormorant text-2xl font-semibold text-maroon-900 mb-4">Our Tech Stack</h2>
            <p className="text-maroon-800 mb-4">
              MathVeda is built using cutting-edge technologies to provide a seamless and interactive learning
              experience:
            </p>
            <ul className="list-disc list-inside text-maroon-800 space-y-2">
              <li>Frontend: Next.js with React for a fast and responsive user interface</li>
              <li>Styling: Tailwind CSS for beautiful and consistent design</li>
              <li>Backend: Flask for a lightweight and efficient server</li>
              <li>AI Integration: LangChain for advanced language model capabilities</li>
              <li>LLM: Groq for open-source large language model integration</li>
              <li>Animations: Framer Motion for smooth and engaging user interactions</li>
            </ul>
          </div>

          <div className="max-w-4xl mx-auto bg-amber-100 bg-opacity-90 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="font-cormorant text-2xl font-semibold text-maroon-900 mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-amber-50 p-4 rounded-lg shadow flex flex-col md:flex-row">
                  <div className="md:w-1/2 mb-4 md:mb-0">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 md:pl-4">
                    <h3 className="font-cormorant text-xl font-semibold text-maroon-900">{member.name}</h3>
                    <p className="text-maroon-700">{member.role}</p>
                    <p className="text-maroon-800 mt-2">{member.contribution}</p>
                    <p className="text-maroon-600 mt-2 text-sm">
                      University School of Information, Communication and Technology, Dwarka Sec-16
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-amber-100 bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="font-cormorant text-2xl font-semibold text-maroon-900 mb-4">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-maroon-800 mb-1">
                  Name
                </label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-amber-300 rounded" />
              </div>
              <div>
                <label htmlFor="email" className="block text-maroon-800 mb-1">
                  Email
                </label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-amber-300 rounded" />
              </div>
              <div>
                <label htmlFor="message" className="block text-maroon-800 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 border border-amber-300 rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-maroon-700 text-amber-100 px-4 py-2 rounded hover:bg-maroon-800 transition-colors flex items-center"
              >
                <Mail className="mr-2" size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  )
}

