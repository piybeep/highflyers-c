import { PasswordChangeProps } from "./PasswordChange.types";
import s from './PasswordChange.module.scss'
import { AuthButton, AuthInput, AuthTitle } from "@/components";

export function PasswordChange({ }: PasswordChangeProps) {
    return (
        <form className={s.form}>
            <div className={s.form__info}>
                <AuthTitle value="Смена пароля"/>
                <AuthInput placeholder={"Пароль"} password />
            </div>
            <div className={s.form__button}>
                <AuthButton value={"Продолжить"} isOutline size="large"/>
            </div>
        </form>
    );
};