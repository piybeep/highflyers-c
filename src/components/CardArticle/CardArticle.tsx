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
                <div className={s.info}>
                    <Link href={`${href}/${id}`} className={s.info__button}>
                        Читать
                    </Link>
                    <p className={s.info__access}>Бесплатно</p>
                </div>
            </div>
        </MaterialLayout>
    );
}
