"use client"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const mathematicians = [
  {
    id: "aryabhatta",
    name: "Aryabhatta",
    period: "476-550 CE",
    image: "https://www.thefamouspeople.com/profiles/images/aryabhata-5.jpg",
    brief: "Known for the concept of zero, place value system, and approximation of π.",
  },
  {
    id: "ramanujan",
    name: "Srinivasa Ramanujan",
    period: "1887-1920 CE",
    image: "https://www.cfalindia.com/wp-content/uploads/2023/09/Ramanujan-1.jpg",
    brief:
      "Made extraordinary contributions to mathematical analysis, number theory, infinite series, and continued fractions.",
  },
  {
    id: "pythagoras",
    name: "Pythagoras",
    period: "570-495 BCE",
    image: "https://th.bing.com/th/id/OIP.PAIKybglFfmNbmJ5xb_0jQAAAA?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    brief: "Best known for the Pythagorean theorem, which relates to right-angled triangles.",
  },
  {
    id: "gauss",
    name: "Carl Friedrich Gauss",
    period: "1777-1855 CE",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Carl_Friedrich_Gauss.jpg",
    brief:
      "Known as the 'Prince of Mathematicians', made significant contributions to many fields in mathematics and sciences.",
  },
  {
    id: "euclid",
    name: "Euclid",
    period: "300 BCE",
    image: "https://cdn.britannica.com/46/8446-050-BC92B998/Euclid-woodcut-1584.jpg",
    brief:
      "Known as the 'Father of Geometry', his work 'Elements' is one of the most influential works in mathematics.",
  },
]

export default function MathematiciansPage() {
  const router = useRouter()
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('https://wallpaperaccess.com/full/1971461.jpg')] bg-cover bg-center opacity-10" />

      <div className="relative space-y-8 p-8">
        <h1 className="font-cormorant text-5xl font-bold text-center text-yellow-600">Legendary Mathematicians</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mathematicians.map((mathematician) => (
            <div
              key={mathematician.id}
              className="relative card hover:shadow-lg transition-shadow bg-white bg-opacity-90 rounded-lg overflow-hidden"
            >
              <Image
                src={mathematician.image || "/placeholder.svg"}
                alt={mathematician.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
                onClick={() => router.push(`/mathematicians/${mathematician.id}`)}
              />
              <div
                className="p-4 bg-[url('https://st.depositphotos.com/1006269/3829/i/950/depositphotos_38292999-stock-photo-old-parchment-paper-texture.jpg')] bg-cover bg-center cursor-pointer"
                onClick={() => router.push(`/mathematicians/${mathematician.id}`)}
              >
                <h2 className="font-cormorant text-2xl font-semibold">{mathematician.name}</h2>
                <p className="text-gray-600">{mathematician.period}</p>
                <p className="mt-2">{mathematician.brief}</p>
                <Link
                  href={`/mathematicians/${mathematician.id}/quiz`}
                  className="mt-4 inline-block bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors"
                >
                  Take Quiz
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

