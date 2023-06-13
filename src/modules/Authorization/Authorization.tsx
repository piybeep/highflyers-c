import { AuthAccount, AuthButton, AuthGoogle, AuthInput, AuthTitle, Privacy } from '@/components';
import s from './Authorization.module.scss'
import { AuthorizationProps } from './Authorization.types';

export function Authorization({ }: AuthorizationProps) {
    return (
        <div className={s.wrapper}>
            <form className={s.form}>
                <div className={s.form__header}>
                    <AuthTitle value={'Авторизоваться'} />
                    <AuthAccount value={'authorization'} />
                    <AuthGoogle />
                </div>
                <div className={s.form__info}>
                    <AuthInput placeholder={'Почта'} password={false} />
                    <AuthInput placeholder={'Пароль'} password={false} />
                    <AuthButton value='Забыли пароль?' />
                </div>

                <div className={s.form__button}>
                    <AuthButton isOutline={true} value='Дальше' />
                </div>
            </form>
        </div>
    );
};