import s from './CorrectParagraf.module.scss'
import { CorrectParagrafProps } from './CorrectParagraf.types';

export function CorrectParagraf({ correctAnswer, total }: CorrectParagrafProps) {
    return (
        <p className={s.paragraf}><span className={s.paragraf__correct}>{correctAnswer}</span> правильных ответов из {total}</p>
    );
};