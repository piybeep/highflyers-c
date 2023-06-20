'use client'

import classNames from "classnames";

import { HeaderProps } from "./Header.types";
import s from './Header.module.scss'

import { Logo } from "@/components";
import { HeaderNav } from "../HeaderNav";

export function Header({ }: HeaderProps) {
    return (
        <header className={s.wrapper}>
            <div className={s.info}>
                <div className={s.info__logo}>
                    <Logo position="row" />
                </div>
                <div className={s.info__buttons}>
                    <button className={classNames(s.info__button, s.info__button_signIn)}>Войти</button>
                    <button className={classNames(s.info__button, s.info__button_start)}>Начать!</button>
                </div>
            </div>
            <div className={s.nav}>
                <HeaderNav />
            </div>
        </header>
    );
};