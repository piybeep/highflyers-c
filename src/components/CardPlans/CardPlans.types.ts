export interface CardPlansProps {
    name: string;
    free: boolean;
    isBuy?: boolean;
    time: string;
    img: string;
    source: string;
    target: '_blank' | '_self',
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
}
