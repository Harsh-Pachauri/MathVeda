import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import MathematicianChat from "@/components/MathematicianChat"
import LifeCarousel from "@/components/LifeCarousel"
import { motion } from "framer-motion"

const mathematicians = {
  aryabhatta: {
    name: "Aryabhatta",
    period: "476-550 CE",
    image: "https://www.thefamouspeople.com/profiles/images/aryabhata-5.jpg",
    bio: "Aryabhata was one of the first Indian mathematicians and astronomers belonging to the classical age. He was born in 476 CE in Kusumapura (present day Patna) in Bihar, India. His most famous works are the Aryabhatiya and the Arya-siddhanta.",
    contributions: [
      "Approximation of π (pi) to four decimal places",
      "Explanation of lunar eclipse and solar eclipse",
      "Rotation of Earth on its axis",
      "Sinusoidal functions",
      "Solution of single variable quadratic equation",
    ],
    lifeEvents: [
      {
        title: "Birth in Kusumapura",
        description: "Aryabhata was born in 476 CE in Kusumapura, present-day Patna, Bihar.",
        image: "https://www.ancient-origins.net/sites/default/files/field/image/baby-sling_0.jpg",
      },
      {
        title: "Writing of Aryabhatiya",
        description:
          "At the age of 23, Aryabhata wrote his famous work, the Aryabhatiya, a significant treatise on mathematics and astronomy.",
        image: "https://images.tv9hindi.com/wp-content/uploads/2022/08/Chanakya-vichar-1.jpg",
      },
      {
        title: "Contributions to Astronomy",
        description:
          "Aryabhata made groundbreaking contributions to astronomy, including the calculation of the Earth's rotation and explanations of eclipses.",
        image: "/aryabhata-astronomy.jpg",
      },
      {
        title: "Mathematical Innovations",
        description:
          "He introduced the concept of zero, developed trigonometric functions, and solved quadratic equations.",
        image: "/aryabhata-math.jpg",
      },
      {
        title: "Legacy",
        description:
          "Aryabhata's work influenced mathematicians and astronomers for centuries, both in India and abroad.",
        image: "/aryabhata-legacy.jpg",
      },
    ],
  },
  ramanujan: {
    name: "Srinivasa Ramanujan",
    period: "1887-1920 CE",
    image: "https://www.cfalindia.com/wp-content/uploads/2023/09/Ramanujan-1.jpg",
    bio: "Srinivasa Ramanujan was an Indian mathematician who made extraordinary contributions to mathematical analysis, number theory, infinite series, and continued fractions. Despite having almost no formal training in pure mathematics, he made substantial contributions to mathematical analysis, number theory, infinite series, and continued fractions.",
    contributions: [
      "Discovered the Ramanujan prime and the Ramanujan theta function",
      "Made groundbreaking discoveries in the field of partition functions",
      "Provided remarkable formulas for pi",
      "Developed the theory of mock theta functions",
      "Made significant contributions to the theory of highly composite numbers",
    ],
    lifeEvents: [
      {
        title: "Birth in Erode",
        description: "Ramanujan was born on December 22, 1887, in Erode, Tamil Nadu, India.",
        image: "/ramanujan-birth.jpg",
      },
      {
        title: "Discovery by G. H. Hardy",
        description:
          "In 1913, Ramanujan began a correspondence with the British mathematician G. H. Hardy, which led to his recognition in the mathematical world.",
        image: "/ramanujan-hardy.jpg",
      },
      {
        title: "Fellowship of the Royal Society",
        description:
          "In 1918, Ramanujan was elected a Fellow of the Royal Society, becoming the second Indian to be so honored.",
        image: "/ramanujan-royal-society.jpg",
      },
      {
        title: "Return to India",
        description: "Ramanujan returned to India in 1919 due to his deteriorating health.",
        image: "/ramanujan-return.jpg",
      },
      {
        title: "Legacy",
        description:
          "Ramanujan's notebooks, containing summaries of his results, have been the source of many mathematical papers since his death.",
        image: "/ramanujan-legacy.jpg",
      },
    ],
  },
  pythagoras: {
    name: "Pythagoras",
    period: "570-495 BCE",
    image: "https://th.bing.com/th/id/OIP.PAIKybglFfmNbmJ5xb_0jQAAAA?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    bio: "Pythagoras was an ancient Ionian Greek philosopher and the eponymous founder of Pythagoreanism. He is best known for the Pythagorean theorem, which bears his name. While he made influential contributions to philosophy and religious teaching in the late 6th century BCE, very little is known about his life with any reliability.",
    contributions: [
      "Formulated the Pythagorean theorem",
      "Discovered the theory of proportions",
      "Developed the theory of means",
      "Contributed to the theory of music",
      "Founded a philosophical and religious movement",
    ],
    lifeEvents: [
      {
        title: "Birth in Samos",
        description: "Pythagoras was born around 570 BCE on the island of Samos, Greece.",
        image: "/pythagoras-birth.jpg",
      },
      {
        title: "Travels and Studies",
        description: "He traveled extensively in his youth, studying with various teachers in Egypt and Babylon.",
        image: "/pythagoras-travels.jpg",
      },
      {
        title: "Founding of the Pythagorean School",
        description: "Around 530 BCE, Pythagoras moved to Croton in southern Italy and founded his famous school.",
        image: "/pythagoras-school.jpg",
      },
      {
        title: "Development of Pythagorean Theorem",
        description: "Although the theorem was known earlier, Pythagoras was credited with its first proof.",
        image: "/pythagoras-theorem.jpg",
      },
      {
        title: "Legacy",
        description:
          "Pythagoras' influence on mathematics, philosophy, and science has been profound and long-lasting.",
        image: "/pythagoras-legacy.jpg",
      },
    ],
  },
  gauss: {
    name: "Carl Friedrich Gauss",
    period: "1777-1855 CE",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Carl_Friedrich_Gauss.jpg",
    bio: "Carl Friedrich Gauss was a German mathematician and physicist who made significant contributions to many fields in mathematics and sciences. He is often referred to as the 'Prince of Mathematicians' and is considered one of the most influential mathematicians of all time.",
    contributions: [
      "Proved the fundamental theorem of algebra",
      "Developed the method of least squares",
      "Made groundbreaking contributions to number theory",
      "Invented the heliotrope",
      "Developed Gaussian elimination and Gaussian distribution",
    ],
    lifeEvents: [
      {
        title: "Birth in Brunswick",
        description: "Gauss was born on April 30, 1777, in Brunswick, in the Duchy of Brunswick-Wolfenbüttel.",
        image: "/gauss-birth.jpg",
      },
      {
        title: "Early Mathematical Discoveries",
        description:
          "As a young man, Gauss made several important discoveries, including the construction of the regular 17-gon.",
        image: "/gauss-early-discoveries.jpg",
      },
      {
        title: "Publication of Disquisitiones Arithmeticae",
        description: "In 1801, Gauss published his seminal work on number theory, Disquisitiones Arithmeticae.",
        image: "/gauss-disquisitiones.jpg",
      },
      {
        title: "Appointment at Göttingen",
        description:
          "In 1807, Gauss was appointed professor of astronomy and director of the astronomical observatory in Göttingen.",
        image: "/gauss-gottingen.jpg",
      },
      {
        title: "Legacy",
        description: "Gauss's work has had a lasting impact on numerous fields of mathematics and science.",
        image: "/gauss-legacy.jpg",
      },
    ],
  },
  euclid: {
    name: "Euclid",
    period: "300 BCE",
    image: "https://cdn.britannica.com/46/8446-050-BC92B998/Euclid-woodcut-1584.jpg",
    bio: "Euclid, often referred to as the 'Father of Geometry', was a Greek mathematician active in Alexandria during the reign of Ptolemy I. His Elements is one of the most influential works in the history of mathematics, serving as the main textbook for teaching mathematics from its publication until the late 19th or early 20th century.",
    contributions: [
      "Wrote 'Elements', a comprehensive treatise on mathematics",
      "Developed the axiomatic method for mathematics",
      "Proved the infinitude of prime numbers",
      "Contributed to the theory of perspective",
      "Developed algorithms for finding the greatest common divisor",
    ],
    lifeEvents: [
      {
        title: "Life in Alexandria",
        description: "Euclid lived and worked in Alexandria, Egypt, during the reign of Ptolemy I (323–283 BCE).",
        image: "/euclid-alexandria.jpg",
      },
      {
        title: "Writing of Elements",
        description:
          "Euclid wrote his famous work, Elements, which became the most widely used mathematics textbook in history.",
        image: "/euclid-elements.jpg",
      },
      {
        title: "Teaching at the Library of Alexandria",
        description: "He taught mathematics at the Great Library of Alexandria.",
        image: "/euclid-teaching.jpg",
      },
      {
        title: "Development of Geometric Proofs",
        description:
          "Euclid developed a system of logical proofs that became the foundation for future mathematical reasoning.",
        image: "/euclid-proofs.jpg",
      },
      {
        title: "Legacy",
        description:
          "Euclid's work has had a lasting impact on mathematics, influencing scholars for over two millennia.",
        image: "/euclid-legacy.jpg",
      },
    ],
  },
}

export default function MathematicianPage({ params }: { params: { id: string } }) {
  const mathematician = mathematicians[params.id as keyof typeof mathematicians]

  if (!mathematician) {
    notFound()
  }

  return (
    <div className="space-y-8 bg-amber-50 min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card bg-parchment shadow-lg"
      >
        <div className="md:flex">
          <Image
            src={mathematician.image || "/placeholder.svg"}
            alt={mathematician.name}
            width={300}
            height={300}
            className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none shadow-md"
          />
          <div className="p-6">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-cormorant text-4xl font-bold text-brown-900"
            >
              {mathematician.name}
            </motion.h1>
            <p className="text-gray-600 font-serif">{mathematician.period}</p>
            <p className="mt-4 font-serif text-brown-800">{mathematician.bio}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="card bg-parchment shadow-lg"
      >
        <h2 className="font-cormorant text-2xl font-semibold mb-4 text-brown-900">Key Contributions</h2>
        <ul className="list-disc list-inside space-y-2 font-serif text-brown-800">
          {mathematician.contributions.map((contribution, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              {contribution}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="card bg-parchment shadow-lg"
      >
        <h2 className="font-cormorant text-2xl font-semibold mb-4 text-brown-900">Life Events</h2>
        <LifeCarousel events={mathematician.lifeEvents} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <MathematicianChat mathematicianId={params.id} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="text-center"
      >
        <Link
          href={`/mathematicians/${params.id}/quiz`}
          className="inline-block bg-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition-colors text-lg font-semibold"
        >
          Take Quiz on {mathematician.name}
        </Link>
      </motion.div>
    </div>
  )
}

