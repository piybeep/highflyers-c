'use client';

import Link from 'next/link';
import s from './CardExams.module.scss';
import { CardExamsProps } from './CardExams.types';
import { usePathname } from 'next/navigation';
import { MaterialLayout } from '@/layout';

export function CardExams({ title, id }: CardExamsProps) {
    const pathname = usePathname();

    return (
        <MaterialLayout>
            <div className={s.card}>
                <h2 className={s.card__title}>{title}</h2>
                <Link
                    className={s.card__link}
                    href={pathname === '/ege' ? `/ege/${id}` : `/oge/${id}`}
                >
                    Смотреть
                </Link>
            </div>
        </MaterialLayout>
    );
}
