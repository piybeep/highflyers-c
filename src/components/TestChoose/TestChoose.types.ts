export interface TestChooseProps {
    isSeveral: boolean
    onChange: (payload: { text: string, isRight: boolean } | { text: string, isRight: boolean }[]) => void
    isShow: boolean
    value: { isRight: boolean, text: string }
    question: string
    answer: {
        text: string
        isRight: boolean
    }[]
}