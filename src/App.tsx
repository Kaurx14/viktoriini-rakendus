import { useState } from "react"
import { Header } from './components/Header'
import { QuestionCard } from './components/QuestionCard'
import { ResultsTable } from './components/ResultsTable'
import { Footer } from './components/Footer'
import { questions } from './data/questions'

// Info kasutaja vastuse kohta
type UserAnswer = {
  questionId: string
  selectedAnswerId: string
  isCorrect: boolean
}

function App() {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<UserAnswer[]>([])

  const handleAnswer = (
    isCorrect: boolean,
    selectedId: string,
  ) => {
    const currentQuestion = questions[index]

    // Salvestame kasutaja vastuse, et tabelis hiljem kuvada
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedAnswerId: selectedId,
        isCorrect,
      },
    ])

    // 3 sekki ja siis järgmine küsimus
    setTimeout(() => {
      setIndex((prev) => prev + 1)
    }, 3000)
  }

  // Kui kasutaja alustab viktoriini uuesti
  const handleRestart = () => {
    setIndex(0)
    setAnswers([])
  }


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="mt-10 flex justify-center">
          {questions[index] && (
            <QuestionCard
              key={questions[index].id}
              question={questions[index]}
              questionIndex={index}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
            />
          )}
        </div>

        {!questions[index] && (
          <ResultsTable answers={answers} questions={questions} onRestart={handleRestart} />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
