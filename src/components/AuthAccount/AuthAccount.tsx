import Link from 'next/link';

import s from './AuthAccount.module.scss'
import { AuthAccountProps } from "./AuthAccount.types";

export function AuthAccount({value='registration'}:AuthAccountProps) {
    return (
        <div className={s.wrapper}>
            <h2 className={s.wrapper__text}>{value === 'registration' ?  'Уже есть аккаунт?' : 'Нет аккаунта?'}</h2>
            <Link className={s.wrapper__link} href={value === 'registration' ? '/authorization' : '/registration'}>{value === 'authorization' ? 'Зарегистрироваться' : 'Войти'}</Link>
        </div>
    );
}
