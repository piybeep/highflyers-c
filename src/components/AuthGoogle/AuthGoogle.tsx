'use client'

import {toast} from 'react-hot-toast';

import {useRouter} from 'next/navigation';

import {GoogleLogin} from '@react-oauth/google';
import axios from 'axios';

import {AuthGoogleProps} from './AuthGoogle.types';
import {useUser} from '@/store';

export function AuthGoogle({}: AuthGoogleProps) {
    const route = useRouter()
    const {setUser} = useUser()
    return (
        <GoogleLogin
            onSuccess={async (credentialResponse) => {
                axios.post(
                    `${process.env.NEXT_PUBLIC_HOST}/auth/google`,
                    {
                        token: credentialResponse.credential,
                    }
                ).then((response) => {
                    setUser(response.data.user)
                    route.push('/')
                })
                    .catch((error) => {
                        toast.error('Что-то пошло не так')
                        console.error(error)
                        setUser(null)
                    })
            }}
            onError={() => {
                console.log("Login Failed");
            }}
        />
    );
}
