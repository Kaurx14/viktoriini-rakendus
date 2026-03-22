export type LocalizedText = {
    et: string
    en: string
}

export type Answer = {
    id: string
    text: LocalizedText
    isCorrect: boolean
}
  
export type Question = {
    id: string
    question: LocalizedText
    answers: Answer[]
}
  
// Küsimuste pank
export const questions: Question[] = [
    {
        id: "1",
        question: {
            et: "Kui palju inimesi elab Eestis?",
            en: "How many people live in Estonia?",
        },
        answers: [
            { id: "a", text: { et: "1 362 954", en: "1 362 954" }, isCorrect: true },
            { id: "b", text: { et: "1 483 231", en: "1 483 231" }, isCorrect: false },
            { id: "c", text: { et: "1 276 403", en: "1 276 403" }, isCorrect: false },
        ],
    },
    {
        id: "2",
        question: {
            et: "Mis on Eesti pealinn?",
            en: "What is the capital of Estonia?",
        },
        answers: [
            { id: "a", text: { et: "Tallinn", en: "Tallinn" }, isCorrect: true },
            { id: "b", text: { et: "Tartu", en: "Tartu" }, isCorrect: false },
            { id: "c", text: { et: "Narva", en: "Narva" }, isCorrect: false },
        ],
    },
    {
        id: "3",
        question: {
            et: "Milline on Eesti keskmine brutokuupalk (2025 IV kvartali seisuga)?",
            en: "What is the average monthly gross salary of Estonia (by 2025 IV quarter)",
        },
        answers: [
            { id: "a", text: { et: "1974€", en: "1974€" }, isCorrect: false },
            { id: "b", text: { et: "2155€", en: "2155€" }, isCorrect: true },
            { id: "c", text: { et: "2398€", en: "2398€" }, isCorrect: false },
        ],
    },
    {
        id: "4",
        question: {
            et: "Milline on töötuse määr Eestis (2025 aasta seisuga)?",
            en: "What is the unemployment rate in Estonia (according to year 2025)",
        },
        answers: [
            { id: "a", text: { et: "7,5%", en: "7,5%" }, isCorrect: true },
            { id: "b", text: { et: "9,8%", en: "9,8%" }, isCorrect: false },
            { id: "c", text: { et: "10,5%", en: "10,5%" }, isCorrect: false },
        ],
    },
    {
        id: "5",
        question: {
            et: "Milline on absoluutse vaesuse määr Eestis (2024 aasta seisuga)?",
            en: "What is the absolute poverty rate in Estonia (according to year 2024)",
        },
        answers: [
            { id: "a", text: { et: "1,2%", en: "1,2%" }, isCorrect: false },
            { id: "b", text: { et: "3,4%", en: "3,4%" }, isCorrect: true },
            { id: "c", text: { et: "5,1%", en: "5,1%" }, isCorrect: false },
        ],
    },
]
