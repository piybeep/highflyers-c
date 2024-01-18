export interface ArticlesProps {
    id: number;
    title: string;
    text?: string
    description: string;
    article_type?: ArticleType;
    tags?: ArticleTags[]
    href?: string
}

export interface ArticleType {
    id: number;
    type?: string;
    name?: string;
}

export interface ArticleTags {
    id: number,
    name: string,
}