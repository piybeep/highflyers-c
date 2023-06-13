import { AuthAccount, AuthButton, AuthGoogle, AuthInput, AuthTitle, Privacy } from '@/components';
import s from './Registation.module.scss'

export function Registation() {
    return (
        <div className={s.wrapper}>
            <div className={s.form}>
                <div className={s.form__header}>
                    <AuthTitle value={'Зарегистрироваться'} />
                    <AuthAccount />
                    <AuthGoogle />
                </div>
                <div className={s.form__info}>
                    <AuthInput placeholder={'Почта'} />
                    <AuthInput placeholder={'Пароль'} />
                    <Privacy />
                </div>
                <div className={s.form__button}>
                    <AuthButton value={'Дальше'} isOutline />
                </div>
            </div>
        </div>
    );
};