import s from './CardText.module.scss'
import { CardTextProps } from './CardText.types';

export function CardText({ question }: CardTextProps) {
    return (
        <p className={s.text}>
            {question}
        </p>
    );
};