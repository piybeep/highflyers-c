'use client'

import { PropsWithChildren, useEffect } from "react";

import s from './PopupLayout.module.scss'
import classNames from "classnames";
import { useRouter, useSearchParams } from "next/navigation";

export function PopupLayout({ children }: PropsWithChildren) {

    const params = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        params.has('window') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [params])

    return (
        <div onClick={() => router.push('/profile')} className={classNames(s.wrapper, {
            [s.wrapper__show]: params.has('window')
        })}>
            <div onClick={e => e.stopPropagation()} className={s.wrapper__container}>
                {children}
            </div>
        </div>
    );
};