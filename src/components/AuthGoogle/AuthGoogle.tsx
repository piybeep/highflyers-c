'use client'

import { toast } from 'react-hot-toast';

import { useRouter } from 'next/navigation';

import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import { AuthGoogleProps } from './AuthGoogle.types';

export function AuthGoogle({ }: AuthGoogleProps) {
    const route = useRouter()
    return (
        <GoogleLogin
            onSuccess={async (credentialResponse) => {
                axios.post(
                    `${process.env.NEXT_PUBLIC_HOST}/auth/google`,
                    {
                        token: credentialResponse.credential,
                    }
                ).then((data) => {
                    route.push('/')
                })
                    .catch((error) => {
                        toast.error('Что-то пошло не так')
                        console.error(error)
                    })
            }}
            onError={() => {
                console.log("Login Failed");
            }}
        />
    );
};