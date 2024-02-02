'use client'

import axios from "axios"
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function CheckToken() {
    const router = useRouter()
    const [token, setToken] = useState<string | undefined>()

    useEffect(() => {
        setToken(getCookie('token'))
    }, [])

    const removeToken = () => {
        deleteCookie('token')
        setToken(getCookie('token'))
        router.refresh()
    }

    const auth = async () => {
        await axios
            .post(`${process.env.NEXT_PUBLIC_HOST}auth/local`,
                {
                    identifier: 'lolgurda@mail.ru',
                    password: '20ediras',
                })
            .then(res => {
                setCookie('token', res.data.jwt)
                setToken(res.data.jwt)
                router.refresh()
            })
            .catch((error: any) => {
                console.error(error)
            })
    }

    return (
        <div style={{ position: 'fixed', top: '0px', left: '0px', display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '500px', overflow: 'hidden' }}>
            <h2>token: {token}</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button onClick={() => removeToken()}>Удалить токен</button>
                <button onClick={() => auth()}>Добавить токен</button>
            </div>
        </div>
    )
};