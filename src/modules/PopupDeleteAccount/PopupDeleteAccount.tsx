'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { AuthButton } from '@/components';
import s from './PopupDeleteAccount.module.scss'
import classNames from 'classnames';
import { useEffect } from 'react';

export function PopupDeleteAccount() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const open = searchParams.get('popupDeleteAccount') === 'open' ? true : false

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
                <div className={s.header}>
                    <p className={s.header__title}>Удаление аккаунта</p>
                    <p className={s.header__text}>Данные будут удалены с данного сайта и ваш профиль будет невозможно восстановить</p>
                </div>
                <div className={s.footer}>
                    <AuthButton onClick={() => router.push(pathname, { scroll: false })} type='button' value={'Отмена'} />
                    <AuthButton value={'Удалить'} isOutline isArrow={false} />
                </div>
            </div>
        </div>
    );
};