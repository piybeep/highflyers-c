export interface HeaderExamsProps {
    title: string
    subtitle: string
    list: headerExamsElement[]
}

interface headerExamsElement {
    title: string
    group?: string
    tag: string
}