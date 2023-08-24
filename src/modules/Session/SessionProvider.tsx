'use client'

import {PropsWithChildren, useEffect} from "react";
import {useUser} from "@/store";
import axios from "axios";

export function SessionProvider({children}: PropsWithChildren) {
    const {setUser, setStatus} = useUser()

    useEffect(() => {
        setStatus("loading")
        axios.get('/api/refresh', {withCredentials: true}).then(res => {
            setUser(res.data.user)
            setStatus("authenticated")
        }).catch(() => {
            setStatus("unauthenticated")
        })
    }, []);

    return <>
        {children}
    </>
}
