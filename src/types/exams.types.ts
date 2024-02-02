export interface ExamsItem {
    id: number;
    name: string;
    tags: Tags[];
    tests: ExamsTests[];
}

export interface ExamsTests {
    title: string;
    topic?: string
    type: 'select' | 'insert' | 'question' | 'text';
    list: Test[];
}

export interface Test {
    id: string;
    question: string;
    isSeveral?: boolean;
    description?: string;
    answer: {
        text: string;
        isRight?: boolean;
    }[];
}

export interface Tags {
    id: string;
    name: string;
    value: string;
}
