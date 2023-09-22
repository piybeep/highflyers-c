export interface ExamsTestProps {
    onChange: (value: { text: string; isRight: boolean }) => void;
    isShow: boolean;
    description: string;
    value: { isRight: boolean; text: string };
    question: string;
    answer: {
        text: string;
        isRight?: boolean;
    }[];
}
