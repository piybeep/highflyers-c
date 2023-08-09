export interface Category {
    id: string
    name: string
    count: number
    materials: Material[]
}

interface Material {
    id: string
    name: string
    free?: boolean
    time?: string
    img?: string
    youtube?: string
    iTunes?: string
    books?: string
    description?: string
}