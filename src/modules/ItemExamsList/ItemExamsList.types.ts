export interface ItemExamsListProps {
    title: string
    list: {
        question: string
        answer: {
            text: string
            isRight: boolean
        }[]
    }
}