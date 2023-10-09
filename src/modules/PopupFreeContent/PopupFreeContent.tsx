'use client'

import { AuthButton } from '@/components';
import s from './PopupFreeContent.module.scss'
import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export function PopupFreeContent() {
    const searchParams = useSearchParams()!;
    const open = searchParams.get('popupFreeContent') === 'open' ? true : false

    useEffect(() => {
        open
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'unset'
    }, [open])

    return (
        <div className={classNames(s.wrapper, {
            [s.wrapper__open]: open
        })}>
            <div className={s.info}>
                <p className={s.info__text}>Это платный контент. Для продолжения вы можете оформить подписку на один из подходящих для вас тарифов.</p>
                <AuthButton value={'Смотреть тарифы'} isOutline />
            </div>
        </div>
    );
};