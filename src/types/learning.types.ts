export interface LearningType {
    id: number;
    title: string;
    time: number;
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
    isFree: boolean;
    img: Img;
    source: Img;
}

export interface Img {
    id: number;
    name: string;
    url: string;
}
