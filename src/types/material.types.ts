interface Points {
    id: number
    description: string
}

export interface Material {
    id: number
    title: string
    priceForOne: number
    fullPrice: number
    acess: number
    total: number
    list: Points[]
}