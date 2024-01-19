export interface LessonPlansTypes {
    id:     number;
    level:  string;
    name:   string;
    time:   number;
    isFree: boolean;
    img:    Img;
    source: Img;
}

export interface Img {
    id:   number;
    name: string;
    url:  string;
}