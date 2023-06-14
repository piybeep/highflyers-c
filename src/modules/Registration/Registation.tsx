'use client'

import { AuthAccount, AuthButton, AuthGoogle, AuthInput, AuthTitle, Privacy } from '@/components';
import s from './Registation.module.scss'
import { RegistationProps } from './Registation.types';

export function Registation({ }: RegistationProps) {
    return (
        <form className={s.form}>
            <div className={s.form__header}>
                <AuthTitle value={'Зарегистрироваться'} />
                <AuthAccount />
                <AuthGoogle />
            </div>
            <div className={s.form__info}>
                <AuthInput placeholder={'Почта'} />
                <AuthInput placeholder={'Пароль'} password />
                <Privacy />
            </div>
            <div className={s.form__button}>
                <AuthButton value={'Дальше'} isOutline size='large' />
            </div>
        </form>
    );
};