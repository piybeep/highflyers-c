'use client'

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

import Image from 'next/image';

import s from './AuthGoogle.module.scss'
import { AuthGoogleProps } from './AuthGoogle.types';

import icon from '../../../public/img/GoogleLogo.png'

export function AuthGoogle({ ...props }: AuthGoogleProps) {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/'
    return (
        <button onClick={() => signIn('google', { callbackUrl })} {...props} className={s.button}>
            <Image width={36} height={36} className={s.button__icon} src={icon.src} alt={'иконка'} />
            <h3 className={s.button__text}>Авторизоваться с Google</h3>
        </button>
    );
};