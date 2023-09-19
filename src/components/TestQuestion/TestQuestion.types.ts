export interface TestQuestionProps {
    isShow: boolean;
    description: string;
    question: string;
    onChange: (value: string) => void;
    value: string;
    answer: {
        text: string;
    }[];
}
