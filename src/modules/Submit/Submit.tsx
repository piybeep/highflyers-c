import { SubmitProps } from "./Submit.types";
import s from './Submit.module.scss'

export function Submit({ }: SubmitProps) {
    return (
        <h1 className={s.title}>
            Мы отправили ссылку на вашу почту! Перейдите по ней чтобы создать новый пароль.
        </h1>
    );
};
