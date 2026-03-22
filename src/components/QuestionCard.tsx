import { useState } from "react"
import type { Question } from "../data/questions"
import { useTranslation } from 'react-i18next'

type Props = {
    question: Question
    questionIndex: number
    totalQuestions: number
    onAnswer: (isCorrect: boolean, selectedId: string) => void
}
  

export function QuestionCard({ question, questionIndex, totalQuestions, onAnswer } : Props) {
    const [selected, setSelected] = useState<string | null>(null)
    const [showFeedback, setShowFeedback] = useState(false)

    const { i18n, t } = useTranslation()
    const language = i18n.resolvedLanguage === 'en' ? 'en' : 'et'
    const progress = ((questionIndex + 1) / totalQuestions) * 100

    // Kasutaja valib vastuse
    const handleClick = (answerId: string, isCorrect: boolean) => {
        if (selected) return // Et ei saaks topelt klikkida
    
        setSelected(answerId)
        setShowFeedback(true)
        onAnswer(isCorrect, answerId)
    }

    return (
        <div className="max-w-xl w-full bg-white border border-black rounded-none p-6 shadow-sm">
            <div className="text-sm text-gray-500 mb-2">
                {t('questionLabel', { current: questionIndex + 1, total: totalQuestions })}
            </div>

            <div className="mb-6 h-2 w-full overflow-hidden rounded-none bg-gray-200">
                <div
                    className="h-full rounded-full bg-black transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <h2 className="text-xl font-medium text-gray-900 mb-6">
                {question.question[language]}
            </h2>

            <div className="flex flex-col gap-3">
                {question.answers.map((answer) => {
                    const isSelected = selected === answer.id

                    return (
                        <button
                            key={answer.id}
                            onClick={() => handleClick(answer.id, answer.isCorrect)}
                            className={`
                                w-full text-left px-4 py-3 border border rounded-none transition
                                ${
                                !showFeedback
                                    ? "hover:bg-blue-50 border-gray-500"
                                    : answer.isCorrect
                                    ? "bg-green-50 border-green-400"
                                    : isSelected
                                    ? "bg-red-50 border-red-400"
                                    : "border-gray-500"
                                }`}>
                            <span className="text-gray-800">{answer.text[language]}</span>
                        </button>
                    )
                })}
            </div>

            {showFeedback && (
                <div className="mt-6 text-sm font-medium">
                    {question.answers.find((a) => a.id === selected)?.isCorrect ? (
                        <span className="text-green-600">{t('correctAnswer')}</span>
                    ) : (
                        <span className="text-red-600">
                            {t('wrongAnswer')}{" "}
                            {
                                question.answers.find((a) => a.isCorrect)?.text[language]
                            }
                        </span>
                    )}
                </div>
            )}
        </div>
    )
}
