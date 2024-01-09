'use client';
import { useRouter } from 'next/navigation';

import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Link from 'next/link';

import axios from 'axios';

import {
    AuthAccount,
    AuthButton,
    AuthGoogle,
    AuthInput,
    AuthTitle,
} from '@/components';
import s from './Authorization.module.scss';
import { PAGES_LINK } from '@/constants';
import { setCookie } from 'cookies-next';

export function Authorization() {
    const router = useRouter();

    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    const submitForm = handleSubmit(async (data) => {
        await axios
            .post(`${process.env.NEXT_PUBLIC_HOST}auth/local`,
                {
                    identifier: data.email,
                    password: data.password,
                })
            .then(res => {
                toast.success('Вы успешно вошли')
                router.push(PAGES_LINK.HOME + '?action=refresh')
                setCookie('token', res.data.jwt)
                router.refresh()
            })
            .catch((error: any) => {
                toast.error(error?.response?.data?.error?.message ?? 'Неизвестная ошибка')
            })
    });

    return (
        <form className={s.form} onSubmit={submitForm}>
            <div className={s.form__header}>
                <AuthTitle value={'Авторизоваться'} />
                <AuthAccount value={PAGES_LINK.LOGIN} />
                <AuthGoogle />
            </div>
            <div className={s.form__info}>
                <Controller
                    render={({ field: { onChange, value } }) => (
                        <AuthInput
                            isError={!!errors.email}
                            name='email'
                            placeholder={'Почта'}
                            onChange={onChange}
                            value={value}
                        />
                    )}
                    name='email'
                    control={control}
                />
                <Controller
                    render={({ field: { onChange, value } }) => (
                        <AuthInput
                            isError={!!errors.password}
                            name='password'
                            placeholder={'Пароль'}
                            password
                            onChange={onChange}
                            value={value}
                        />
                    )}
                    name='password'
                    control={control}
                />
                <Link href={PAGES_LINK.RECOVERY}>
                    <AuthButton value='Забыли пароль?' type='button' />
                </Link>
            </div>

            <div className={s.form__button}>
                <AuthButton
                    type='submit'
                    isOutline={true}
                    value='Дальше'
                    size='large'
                />
            </div>
        </form>
    );
}
