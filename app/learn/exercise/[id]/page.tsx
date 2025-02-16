"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const exercises = {
  1: {
    name: "Pythagorean Theorem",
    questions: [
      {
        id: 1,
        question: "In a right-angled triangle, if a = 3 and b = 4, what is c?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which of the following sets of numbers represents a Pythagorean triple?",
        options: ["3, 4, 5", "5, 6, 7", "6, 8, 10", "7, 24, 25"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question:
          "If the hypotenuse of a right-angled triangle is 13 and one side is 5, what is the length of the other side?",
        options: ["8", "10", "11", "12"],
        correctAnswer: 3,
      },
    ],
  },
  2: {
    name: "Aryabhata's Approximation of Pi",
    questions: [
      {
        id: 1,
        question: "What was Aryabhata's approximation of Pi?",
        options: ["3.14159", "3.1416", "3.1410", "3.1420"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "How many decimal places did Aryabhata's approximation of Pi have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "Which century did Aryabhata live in?",
        options: ["3rd century CE", "4th century CE", "5th century CE", "6th century CE"],
        correctAnswer: 2,
      },
    ],
  },
  // Add more exercises here
}

export default function ExercisePage({ params }: { params: { id: string } }) {
  const exerciseId = Number.parseInt(params.id)
  const exercise = exercises[exerciseId as keyof typeof exercises]

  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(exercise.questions.length).fill(-1))
  const [submitted, setSubmitted] = useState(false)

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    if (!submitted) {
      const newAnswers = [...userAnswers]
      newAnswers[questionIndex] = optionIndex
      setUserAnswers(newAnswers)
    }
  }

  const handleSubmit = () => {
    // Check if all questions are answered
    if (userAnswers.includes(-1)) {
      alert("Please answer all questions before submitting.")
      return
    }
    setSubmitted(true)
  }

  const calculateScore = () => {
    return exercise.questions.reduce((score, question, index) => {
      return score + (question.correctAnswer === userAnswers[index] ? 1 : 0)
    }, 0)
  }

  return (
    <div className="min-h-screen bg-amber-50 py-12 ">
      <div className="container mx-auto px-4">
        <h1 className="font-cormorant text-4xl font-bold text-maroon-900 mb-8 text-center">{exercise.name}</h1>
        <div className="space-y-8 ">
          {exercise.questions.map((question, questionIndex) => (
            <motion.div
              key={question.id}
              className="bg-saffron-100 p-6 rounded-lg shadow-md "
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
                      id={`q${question.id}-o${optionIndex}`}
                      name={`question-${question.id}`}
                      value={optionIndex}
                      checked={userAnswers[questionIndex] === optionIndex}
                      onChange={() => handleOptionSelect(questionIndex, optionIndex)}
                      disabled={submitted}
                      className="h-4 w-4 text-maroon-700 focus:ring-maroon-500"
                    />
                    <label
                      htmlFor={`q${question.id}-o${optionIndex}`}
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
            href="/learn"
            className="bg-maroon-700 text-saffron-50 px-4 py-2 rounded hover:bg-maroon-900 transition-colors"
          >
            Back to Exercises
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
              Score: {calculateScore()} / {exercise.questions.length}
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
              Score: {calculateScore()} out of {exercise.questions.length}
            </p>
            {userAnswers.some((answer, index) => answer !== exercise.questions[index].correctAnswer) && (
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Incorrect Answers:</h3>
                <ul className="list-disc list-inside">
                  {exercise.questions.map((question, index) => {
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

