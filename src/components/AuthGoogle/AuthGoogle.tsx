'use client'

import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import Image from 'next/image';

import s from './AuthGoogle.module.scss'
import { AuthGoogleProps } from './AuthGoogle.types';

import icon from '../../../public/img/GoogleLogo.png'

export function AuthGoogle({ ...props }: AuthGoogleProps) {

    const googleLogin = useGoogleLogin({
        onSuccess: async ({ code }) => {
            const tokens = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/auth`, {
                code,
            });

            
        },
        onError: errorResponse => console.log(errorResponse),
        flow: 'auth-code',
    });
    return (
        <button onClick={() => googleLogin()} {...props} className={s.button}>
            <Image width={36} height={36} className={s.button__icon} src={icon.src} alt={'иконка'} />
            <h3 className={s.button__text}>Авторизоваться с Google</h3>
        </button>
    );
};