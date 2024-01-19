export interface Learning {
    id: number;
    title: string;
    time: number;
    level: string;
    isFree: boolean;
    img: Img;
    source: Img;
}

export interface Img {
    id: number;
    name: string;
    url: string;
}
