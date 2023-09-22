export interface LearningListProps {
    id: string;
    title: string;
    available: boolean;
    materials: ElementLearningProps[];
}

export interface ElementLearningProps {
    id: string;
    title: string;
    time: string;
    img: string;
}
