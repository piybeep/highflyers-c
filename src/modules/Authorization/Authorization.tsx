'use client'
import Link from 'next/link';

import { AuthAccount, AuthButton, AuthGoogle, AuthInput, AuthTitle } from '@/components';
import s from './Authorization.module.scss'
import { AuthorizationProps } from './Authorization.types';

export function Authorization({ }: AuthorizationProps) {
    return (
        <form className={s.form}>
            <div className={s.form__header}>
                <AuthTitle value={'Авторизоваться'} />
                <AuthAccount value={'authorization'} />
                <AuthGoogle />
            </div>
            <div className={s.form__info}>
                <AuthInput placeholder={'Почта'} />
                <AuthInput placeholder={'Пароль'} password />
                <Link href={'/recovery'}>
                    <AuthButton value='Забыли пароль?' />
                </Link>
            </div>

            <div className={s.form__button}>
                <AuthButton isOutline={true} value='Дальше' size='large' />
            </div>
        </form>
    );
};