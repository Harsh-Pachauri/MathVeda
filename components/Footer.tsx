import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-amber-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-cormorant font-bold text-2xl mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mathematicians" className="hover:text-amber-200 transition-colors">
                  Mathematicians
                </Link>
              </li>
              <li>
                <Link href="/discoveries" className="hover:text-amber-200 transition-colors">
                  Discoveries
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="hover:text-amber-200 transition-colors">
                  Timeline
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-cormorant font-bold text-2xl mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-200 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-amber-200 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-cormorant font-bold text-2xl mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-amber-100 text-brown-900"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded bg-amber-200 text-brown-900 hover:bg-amber-300 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 Mathematical Minds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

