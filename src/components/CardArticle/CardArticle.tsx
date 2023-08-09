import Link from 'next/link';
import s from './CardArticle.module.scss'
import { CardArticleProps } from './CardArticle.types';

export function CardArticle({ id, name, description, ...props }: CardArticleProps) {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>{name}</h2>
            <p className={s.description}>{description}</p>
            <Link href={'#'} className={s.button}>Читать</Link>
        </div>
    );
};