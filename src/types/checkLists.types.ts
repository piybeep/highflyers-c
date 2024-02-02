
type CheckListTypes = 'Подкасты (iTunes)' | 'YouTube-каналы' | 'Книги'
export interface CheckListProps {
    open: () => void;
    check_list_source?: CheckListSource[];
    title: CheckListCard['title']
    isAccess?: boolean
}

export interface CheckListCard {
    id: number;
    title: string;
    theme?: CheckListTheme;
    check_list_sources?: CheckListSource[];
}

export interface CheckListSource {
    id: number;
    name: string;
    author?: string;
    link: string;
    type: CheckListTypes;
}

export interface CheckListTheme {
    id: number;
    title: string;
    description: string;
}