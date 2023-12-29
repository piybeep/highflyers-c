export interface Category {
    name: string;
    count: number;
    list:
    | CardPlansProps[]
    | CardCheckProps[]
    | CardArticleProps[]
    | CardTedTalksProps[];
}

export interface CardPlansProps {
    id: number;
    level: string,
    name: string;
    time: number
    isFree: boolean
    img: {
        url: string
    }
    source: {
        url: string
    }
}
export interface CardCheckProps {
    id: Number,
    title: string,
    check_list_sources: {
        type: string
    }[]
}

export interface CardArticleProps {
    id: number;
    title: string;
    description: string;
    text: string,
}

export interface CardTedTalksProps {
    id: string;
    video: string;
    title: string;
    time: string;
    link: string;
}