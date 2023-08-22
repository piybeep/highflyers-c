import Link from 'next/link';
import s from './CardEge.module.scss'
import { CardEgeProps } from './CardEge.types';

export function CardEge({ title }: CardEgeProps) {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>{title}</h2>
            <Link href='#' className={s.button}>Смотреть</Link>
        </div>
    );
};