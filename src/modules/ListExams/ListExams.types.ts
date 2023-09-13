export interface ListExamsProps {
    list: ListExamsElement[]
}

interface ListExamsElement {
    title: string
    group: string
    tag: string
}