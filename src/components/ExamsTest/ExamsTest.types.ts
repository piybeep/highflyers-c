export interface ExamsTestProps {
    onChange: ({ text, isRight }: { text: string, isRight: boolean }) => void
    isShow: boolean
    value: { isRight: boolean, text: string }
    question: string
    answer: {
        text: string
        isRight: boolean
    }[]
}