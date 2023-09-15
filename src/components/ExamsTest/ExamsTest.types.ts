export interface ExamsTestProps {
    onChange: ({ text, isRight }: { text: string, isRight: boolean }) => void
    isShow: boolean
    type?: 'button' | 'submit' | 'reset'
    value: { isRight: boolean, text: string }
    question: string
    answer: {
        text: string
        isRight: boolean
    }[]
}