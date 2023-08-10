export interface Category {
    id: string
    name: string
    count: number
    materials: CardPlansProps[] | CardCheckProps[] | CardArticleProps[]
}

export interface CardPlansProps {
    id: string,
    name: string,
    free: boolean,
    time: string,
    img: string,
}
export interface CardCheckProps {
    id: string,
    name: string,
    youtube?: string,
    iTunes?: string,
    books?: string
}

export interface CardArticleProps {
    id: string
    name: string
    description: string
}