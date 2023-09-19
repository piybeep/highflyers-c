'use client';

import { PopupChecklists } from '@/modules';
import s from './page.module.scss';

import { useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { CHECKLISTS_LITERATULE } from '@/constants';

export default function CheckListPage() {
    const res = CHECKLISTS_LITERATULE;

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
            Check-list
            <button
                onClick={() =>
                    router.push(pathname + '?' + createQueryString('open'), {
                        scroll: false,
                    })
                }
            >
                открыть popup
            </button>
            <PopupChecklists data={res} />
        </div>
    );
}
