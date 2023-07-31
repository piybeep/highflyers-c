import { SubmitProps } from "./Submit.types";
import s from './Submit.module.scss'
import classNames from "classnames";

export function Submit({ isSubmitted }: SubmitProps) {
    return (
        <h1 className={classNames(s.title, {
            [s.title__hidden]: !isSubmitted
        })}>
            Мы отправили ссылку на вашу почту! Перейдите по ней чтобы создать новый пароль.
        </h1>
    );
}
