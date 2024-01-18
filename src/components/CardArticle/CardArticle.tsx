import Link from 'next/link';
import s from './CardArticle.module.scss';
import { MaterialLayout } from '@/layout';
import { ArticlesProps } from '@/types';

export function CardArticle({ id, title, description, href }: ArticlesProps) {
    return (
        <MaterialLayout>
            <div className={s.wrapper}>
                <h2 className={s.title}>{title}</h2>
                <p className={s.description}>{description}</p>
                <Link href={`${href}/${id}`} className={s.button}>
                    Читать
                </Link>
            </div>
        </MaterialLayout>
    );
}
