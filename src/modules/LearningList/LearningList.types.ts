export interface LearningListProps {
    title: string;
    materials: ElementLearningProps[];
}

export interface ElementLearningProps {
    title: string;
    time: number;
    img: {
        url: string
    };
    level: string
    source: {
        url: string
    };
    isFree: boolean
}
