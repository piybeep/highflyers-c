'use client'

import { CardCheck } from '@/components';
import s from './CheckLists.module.scss'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { CheckListDataProps, CheckListResourcesProps } from '@/constants';

export function CheckLists({ list, setLiterature }: {
    list: CheckListDataProps[], setLiterature: (value: CheckListResourcesProps[]) => void
}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set('popup', value);

            return params.toString();
        },
        [searchParams],
    );
    return (
        <div className={s.wrapper}>
            {
                list.map(current => (
                    <div className={s.wrapper__item} key={current.theme}>
                        <h2 className={s.title}>{current.theme}</h2>
                        <ul className={s.info}>
                            {
                                current.points.map(current => (
                                    <li key={current} className={s.info__text}>{current}</li>
                                ))
                            }
                        </ul>
                        <div className={s.list}>
                            {
                                current.cards.map(current => (
                                    <CardCheck open={() => {
                                        setLiterature(current.resources)
                                        router.push(`${pathname}?${createQueryString('open')}`, { scroll: false })
                                    }}
                                        key={current.name}
                                        id={current.name}
                                        name={current.name} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div >
    );
};