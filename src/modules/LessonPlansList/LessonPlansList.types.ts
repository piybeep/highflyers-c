export interface LessonPlansListProps {
    isFree: boolean,
    level: string,
    materials: ElementLessonPlansListProps[]
}

export interface ElementLessonPlansListProps {
    isFree: boolean
    level: string
    name: string
    time: number
    img: {
        url: string
    }
    source: {
        url: string
    }
}