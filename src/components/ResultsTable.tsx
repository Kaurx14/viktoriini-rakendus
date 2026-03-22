import { useTranslation } from 'react-i18next'
import type { Question } from '../data/questions'
import { Button } from './Button'

// Kasutaja vastus
type UserAnswer = {
  questionId: string
  selectedAnswerId: string
  isCorrect: boolean
}

type Props = {
  answers: UserAnswer[]
  questions: Question[]
  onRestart: () => void
}

// Tulemuste tabel
// Kuvab koondskoori, tagasisidesõnumi, küsimuse, valitud vastuse ja selle õigsuse
export function ResultsTable({ answers, questions, onRestart }: Props) {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'en' ? 'en' : 'et'
  const score = answers.filter((answer) => answer.isCorrect).length
  const total = questions.length
  const percentage = total === 0 ? 0 : (score / total) * 100

  const resultMessage =
    percentage === 100
      ? t('resultMessagePerfect')
      : percentage >= 50
        ? t('resultMessageGood')
        : t('resultMessageLow')

  return (
    <section className="mx-auto my-10 w-full max-w-5xl border border-black rounded-none bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">{t('resultsTitle')}</h2>
        <p className="mt-2 text-lg font-medium text-gray-700">
          {t('scoreLabel', { score, total })}
        </p>
        <p className="mt-1 text-sm text-gray-600">{resultMessage}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-black">
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">{t('tableQuestion')}</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">{t('tableSelectedAnswer')}</th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700">{t('tableResult')}</th>
            </tr>
          </thead>
          <tbody>
            {answers.map((answer) => {
              const question = questions.find((item) => item.id === answer.questionId)
              const selectedAnswer = question?.answers.find((item) => item.id === answer.selectedAnswerId)

              if (!question || !selectedAnswer) {
                return null
              }

              return (
                <tr key={`${answer.questionId}-${answer.selectedAnswerId}`} className="border-b border-gray-300">
                  <td className="px-4 py-3 text-sm text-gray-800">{question.question[language]}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{selectedAnswer.text[language]}</td>
                  <td className="px-4 py-3 text-sm font-medium">
                    <span className={answer.isCorrect ? 'text-green-600' : 'text-red-600'}>
                      {answer.isCorrect ? t('tableCorrect') : t('tableIncorrect')}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex justify-center">
        <Button onClick={onRestart}>{t('restartQuiz')}</Button>
      </div>
    </section>
  )
}
