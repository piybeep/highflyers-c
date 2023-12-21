export interface LessonPlansListProps {
    isFree: boolean,
    level: string,
    materials: ElementLessonPlansListProps[]
}

export interface ElementLessonPlansListProps {
    id: number
    isFree: boolean
    level: string
    isBuy?: boolean
    name: string
    time: number
    img: {
        url: string
    }
    source: {
        url: string
    }
}