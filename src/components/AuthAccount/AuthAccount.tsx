import Link from 'next/link';

import s from './AuthAccount.module.scss';
import { AuthAccountProps } from './AuthAccount.types';
import { PAGES_LINK } from '@/constants';

export function AuthAccount({ value = PAGES_LINK.REGISTER }: AuthAccountProps) {
    return (
        <div className={s.wrapper}>
            <h2 className={s.wrapper__text}>
                {value === PAGES_LINK.REGISTER
                    ? 'Уже есть аккаунт?'
                    : 'Нет аккаунта?'}
            </h2>
            <Link
                className={s.wrapper__link}
                href={
                    value === PAGES_LINK.REGISTER
                        ? PAGES_LINK.LOGIN
                        : PAGES_LINK.REGISTER
                }
            >
                {value === PAGES_LINK.LOGIN ? 'Зарегистрироваться' : 'Войти'}
            </Link>
        </div>
    );
}
