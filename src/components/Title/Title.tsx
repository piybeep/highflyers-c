import s from './Title.module.scss'
import { TitleProps } from './Title.types';

export function Title({ text }: TitleProps) {
    return (
        <h2 className={s.title}>{text}</h2>
    );
};