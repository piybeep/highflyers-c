export interface LessonPlansListProps {
    id: string
    title: string
    available: boolean
    materials: ElementLessonPlansListProps[]
}

export interface ElementLessonPlansListProps {
    id: string
    title: string
    time: string
    img: string
}