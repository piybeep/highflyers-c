'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { CHECKLISTS_LITERATULE_PROPS } from '@/constants/checklists';

import { ButtonBack, HeaderTitle } from '@/components';

import s from './PopupChecklists.module.scss'
import Link from 'next/link';
import classNames from 'classnames';
import { useCallback, useEffect } from 'react';

export function PopupChecklists({ data }: { data: CHECKLISTS_LITERATULE_PROPS[] }) {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()!
    const open = searchParams.get('popup')

    const createQueryString = useCallback(
        (value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set('popup', value)

            return params.toString()
        },
        [searchParams]
    )

    useEffect(() => {
        open === 'open' ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    }, [open])

    return (
        <div className={classNames(s.wrapper, {
            [s.wrapper__open]: open === 'open'
        })}>
            <div className={s.content}>
                <div className={s.header}>
                    <HeaderTitle text={'Литература'} />
                    <ButtonBack onClick={() => router.push(pathname + '?' + createQueryString('close'), { scroll: false })} text={'Закрыть'} />
                </div>
                {
                    data.map(currentData => (
                        <div key={currentData.title} className={s.info}>
                            <h3 className={s.info__title}>{currentData.title}</h3>
                            <div className={s.info__list}>
                                {
                                    currentData.materials.map(currentMaterials => (
                                        currentData.title === 'Книги'
                                            ?
                                            <div key={currentMaterials.title} className={s.link}>
                                                <Link className={s.link} href={currentMaterials.link}>{currentMaterials.title}</Link>
                                                <span className={s.link__span}>{currentMaterials.subtitle}</span>
                                            </div>
                                            :
                                            <Link key={currentMaterials.title} href={currentMaterials.link} className={classNames(s.link, s.link__underline)}>
                                                {currentMaterials.title}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M9 9L9 1M9 1L1 1M9 1L1.00001 8.99999" stroke="#666666" strokeWidth="1.45455" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};