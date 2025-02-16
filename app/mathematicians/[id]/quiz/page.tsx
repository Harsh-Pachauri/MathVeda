"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const quizzes = {
  aryabhatta: [
    {
      question: "What is Aryabhatta most famous for?",
      options: [
        "Inventing zero",
        "Approximating the value of pi",
        "Explaining solar and lunar eclipses",
        "All of the above",
      ],
      correctAnswer: 3,
    },
    {
      question: "In which century did Aryabhatta live?",
      options: ["3rd century CE", "4th century CE", "5th century CE", "6th century CE"],
      correctAnswer: 2,
    },
    {
      question: "What is the name of Aryabhatta's most famous work?",
      options: ["Surya Siddhanta", "Aryabhatiya", "Brahma Sphuta Siddhanta", "Lilavati"],
      correctAnswer: 1,
    },
  ],
  ramanujan: [
    {
      question: "What is the Ramanujan number?",
      options: ["1729", "1728", "1730", "1731"],
      correctAnswer: 0,
    },
    {
      question: "Which famous British mathematician recognized Ramanujan's genius?",
      options: ["Isaac Newton", "Alan Turing", "G.H. Hardy", "Bertrand Russell"],
      correctAnswer: 2,
    },
    {
      question: "What mathematical constant is named after Ramanujan?",
      options: ["Ramanujan constant", "Ramanujan number", "Ramanujan-Hardy constant", "Ramanujan theta function"],
      correctAnswer: 0,
    },
  ],
  pythagoras: [
    {
      question: "What is Pythagoras best known for?",
      options: ["Pythagorean theorem", "Theory of evolution", "Law of gravity", "Theory of relativity"],
      correctAnswer: 0,
    },
    {
      question: "In which century did Pythagoras live?",
      options: ["8th century BCE", "7th century BCE", "6th century BCE", "5th century BCE"],
      correctAnswer: 2,
    },
    {
      question: "What shape is associated with the Pythagorean theorem?",
      options: ["Circle", "Square", "Triangle", "Rectangle"],
      correctAnswer: 2,
    },
  ],
  gauss: [
    {
      question: "What is Gauss often referred to as?",
      options: ["The Wizard of Math", "The Prince of Mathematicians", "The King of Numbers", "The Father of Algebra"],
      correctAnswer: 1,
    },
    {
      question: "Which mathematical distribution is named after Gauss?",
      options: ["Poisson distribution", "Binomial distribution", "Normal distribution", "Exponential distribution"],
      correctAnswer: 2,
    },
    {
      question: "What theorem did Gauss prove at the age of 19?",
      options: [
        "Pythagorean theorem",
        "Fundamental theorem of algebra",
        "Central limit theorem",
        "Fermat's last theorem",
      ],
      correctAnswer: 1,
    },
  ],
  euclid: [
    {
      question: "What is Euclid's most famous work?",
      options: ["Principia Mathematica", "Elements", "Arithmetica", "Almagest"],
      correctAnswer: 1,
    },
    {
      question: "What is Euclid known as?",
      options: ["Father of Geometry", "Father of Algebra", "Father of Calculus", "Father of Trigonometry"],
      correctAnswer: 0,
    },
    {
      question: "How many books are there in Euclid's Elements?",
      options: ["10", "13", "15", "20"],
      correctAnswer: 1,
    },
  ],
}

export default function QuizPage({ params }: { params: { id: string } }) {
  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(3).fill(-1))
  const [submitted, setSubmitted] = useState(false)

  const quiz = quizzes[params.id as keyof typeof quizzes]
  const mathematicianName = params.id.charAt(0).toUpperCase() + params.id.slice(1)

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    if (!submitted) {
      const newAnswers = [...userAnswers]
      newAnswers[questionIndex] = optionIndex
      setUserAnswers(newAnswers)
    }
  }

  const handleSubmit = () => {
    if (userAnswers.includes(-1)) {
      alert("Please answer all questions before submitting.")
      return
    }
    setSubmitted(true)
  }

  const calculateScore = () => {
    return quiz.reduce((score, question, index) => {
      return score + (question.correctAnswer === userAnswers[index] ? 1 : 0)
    }, 0)
  }

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-cormorant text-4xl font-bold text-maroon-900 mb-8 text-center">
          Quiz on {mathematicianName}
        </h1>
        <div className="space-y-8">
          {quiz.map((question, questionIndex) => (
            <motion.div
              key={questionIndex}
              className="bg-saffron-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: questionIndex * 0.1 }}
            >
              <h2 className="font-cormorant text-2xl font-semibold text-maroon-700 mb-4">{question.question}</h2>
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id={`q${questionIndex}-o${optionIndex}`}
                      name={`question-${questionIndex}`}
                      value={optionIndex}
                      checked={userAnswers[questionIndex] === optionIndex}
                      onChange={() => handleOptionSelect(questionIndex, optionIndex)}
                      disabled={submitted}
                      className="h-4 w-4 text-maroon-700 focus:ring-maroon-500"
                    />
                    <label
                      htmlFor={`q${questionIndex}-o${optionIndex}`}
                      className={`flex-1 p-2 rounded cursor-pointer ${
                        submitted && optionIndex === question.correctAnswer
                          ? "text-green-700 font-semibold"
                          : submitted && userAnswers[questionIndex] === optionIndex
                            ? "text-red-700"
                            : "text-maroon-900"
                      }`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              {submitted && userAnswers[questionIndex] !== question.correctAnswer && (
                <p className="text-red-500 mt-2">Correct answer: {question.options[question.correctAnswer]}</p>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-between items-center">
          <Link
            href={`/mathematicians/${params.id}`}
            className="bg-maroon-700 text-saffron-50 px-4 py-2 rounded hover:bg-maroon-900 transition-colors"
          >
            Back to {mathematicianName}
          </Link>
          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="bg-maroon-700 text-saffron-50 px-4 py-2 rounded hover:bg-maroon-900 transition-colors"
            >
              Submit Answers
            </button>
          ) : (
            <div className="text-2xl font-bold text-maroon-900">
              Score: {calculateScore()} / {quiz.length}
            </div>
          )}
        </div>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-saffron-100 p-6 rounded-lg shadow-md"
          >
            <h2 className="font-cormorant text-2xl font-semibold text-maroon-700 mb-4">Results Summary</h2>
            <p className="text-lg mb-2">
              Score: {calculateScore()} out of {quiz.length}
            </p>
            {userAnswers.some((answer, index) => answer !== quiz[index].correctAnswer) && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Incorrect Answers:</h3>
                <ul className="list-disc list-inside">
                  {quiz.map((question, index) => {
                    if (userAnswers[index] !== question.correctAnswer) {
                      return (
                        <li key={index} className="text-red-700">
                          Question {index + 1}: You selected "{question.options[userAnswers[index]]}", correct answer
                          was "{question.options[question.correctAnswer]}"
                        </li>
                      )
                    }
                    return null
                  })}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}

