'use client'

import classNames from "classnames";

import s from './Header.module.scss'

import { Logo } from "@/components";
import { HeaderNav } from "@/modules";
import useSWR from "swr";
import api from "@/api";
import { useUser } from "@/store";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function Header() {
    const setUser = useUser(state => state.setUser)
    const setIsAuth = useUser(state => state.setIsAuth)
    const user = useUser(state => state.user)
    const { data } = useSWR(`/users/${user?.id}`, { fetcher: api.get, errorRetryCount: 1 })

    console.log(user)

    useEffect(() => {
        if (data && data.status === 200) {
            setUser && setUser(data.data)
            setIsAuth && setIsAuth(true)
        }
    }, [data, setIsAuth, setUser])

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
}
