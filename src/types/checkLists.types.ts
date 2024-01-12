export interface CheckListsProps {
    title: string
    description: string
    materials: CheckListsMaterial[]
}

interface CheckListsMaterial {
    id: number
    check_list_sources: {
        author: string
        link: string
        name: string
        type: string
    }[]
    theme: {
        title: string,
        description: string,
    }
    title: string
}