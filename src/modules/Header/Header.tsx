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
import Link from "next/link";

export function Header() {
    const setUser = useUser(state => state.setUser)
    const setIsAuth = useUser(state => state.setIsAuth)
    const user = useUser(state => state.user)
    const { error, data } = useSWR(`/users/${user?.id}`, { fetcher: api.get, errorRetryCount: 1 })

    console.log(user)

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
                    <Link href={'/authorization'} className={classNames(s.info__button, s.info__button_signIn)}>Войти</Link>
                    <Link href={'/registration'} className={classNames(s.info__button, s.info__button_start)}>Начать!</Link>
                </div>
            </div>
            <div className={s.nav}>
                <HeaderNav />
            </div>
        </header>
    );
}
