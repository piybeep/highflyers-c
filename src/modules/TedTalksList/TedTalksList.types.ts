export interface TedTalksProps {
    id: string;
    name: string;
    theme: string;
    read_time: string;
    link: string;
    preview: string;
    tags: TedTalksTags[];
}

export interface TedTalksTags {
    id: string;
    name: string;
    value: string;
}
