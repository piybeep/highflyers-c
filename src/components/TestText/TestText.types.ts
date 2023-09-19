export interface TestTextProps {
    question: string;
    isShow: boolean;
    onChange: (
        text: {
            textUser: string;
            textTest: string;
            index: number;
            isRight: boolean;
        }[],
    ) => void;
    answer: {
        text: string;
    }[];
    value: {
        textUser: string;
        textTest: string;
    }[];
}
