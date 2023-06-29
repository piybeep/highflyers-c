'use client'
import { useRouter } from 'next/navigation';

import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Link from 'next/link';

import axios from 'axios';

import { AuthAccount, AuthButton, AuthGoogle, AuthInput, AuthTitle } from '@/components';
import s from './Authorization.module.scss'
import { AuthorizationProps } from './Authorization.types';

export function Authorization({ }: AuthorizationProps) {

    const route = useRouter()

    const { handleSubmit, control } = useForm();

    const submitForm = handleSubmit(async (data) => {
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_HOST}/auth`, { email: data.email, password: data.password })
            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            route.push('/')
        } catch (error: any) {
            toast.error(error?.response?.data?.message ?? 'Неизвестная ошибка')
        }
    })

    return (
        <form className={s.form} onSubmit={submitForm}>
            <div className={s.form__header}>
                <AuthTitle value={'Авторизоваться'} />
                <AuthAccount value={'authorization'} />
                <AuthGoogle/>
            </div>
            <div className={s.form__info}>
                <Controller
                    render={({ field: {onChange, value} }) => <AuthInput placeholder={'Почта'} onChange={onChange} value={value} />}
                    name="email"
                    control={control}
                    defaultValue=""
                />
                <Controller
                    render={({ field: {onChange, value} }) => <AuthInput placeholder={'Пароль'} password onChange={onChange} value={value} />}
                    name="password"
                    control={control}
                    defaultValue=""
                />
                <Link href={'/recovery'}>
                    <AuthButton value='Забыли пароль?' type='button' />
                </Link>
            </div>

            <div className={s.form__button}>
                <AuthButton type='submit' isOutline={true} value='Дальше' size='large' />
            </div>
        </form>
    );
}
