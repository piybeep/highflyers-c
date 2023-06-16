import { SubmitProps } from "./Submit.types";
import s from './Submit.module.scss'
import classNames from "classnames";

export function Submit({ isSubmited }: SubmitProps) {
    return (
        <h1 className={classNames(s.title, {
            [s.title__hidden]: !isSubmited
        })}>
            Мы отправили ссылку на вашу почту! Перейдите по ней чтобы создать новый пароль.
        </h1>
    );
};
