'use client'

import { PopupChecklists } from '@/modules';
import s from './page.module.scss'
import { CHECKLISTS_LITERATULE } from '@/constants/checklists';

import { useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function page() {
    const res = CHECKLISTS_LITERATULE

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set('popup', value)

            return params.toString()
        },
        [searchParams]
    )

    return (
        <div className={s.wrapper}>
            Check-list
            <button onClick={() => router.push(pathname + '?' + createQueryString('open'), { scroll: false })}>открыть popup</button>
            <PopupChecklists data={res} />
        </div>
    );
};