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
    const { error, data } = useSWR('/users/8f26396b-8b26-417a-81e6-e7cbc391a7d5', { fetcher: api.get, errorRetryCount: 1 })

    useEffect(() => {
        if (data && data.status === 200) {
            setUser && setUser(data.data)
            setIsAuth && setIsAuth(true)
        }
    }, [data, setIsAuth, setUser])

    useEffect(() => {
        if (error) {
            console.log(error)
            toast.error((error?.response?.data?.message || error?.message) ?? 'Произошла ошибка')
        }
    }, [error])


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
