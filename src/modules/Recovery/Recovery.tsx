'use client'
import Link from 'next/link';

import { AuthButton, AuthInput, AuthTitle } from '@/components';
import s from './Recovery.module.scss'
import { RecoveryProps } from './Recovery.types';

export function Recovery({ }: RecoveryProps) {
    return (
        <form className={s.form}>
            <div className={s.form__info}>
                <AuthTitle value='Восстановление пароля' />
                <AuthInput placeholder={'Введите почту для отправки ссылки'} />
            </div>
            <div className={s.form__buttons}>
                <Link href={'/authorization'}>
                    <AuthButton value={'Назад'} size='small' />
                </Link>
                <AuthButton value={'Отправить'} isOutline size='large' />
            </div>
        </form>
    );
};