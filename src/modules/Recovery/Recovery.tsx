'use client'
import Link from 'next/link';

import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

import { AuthButton, AuthInput, AuthTitle } from '@/components';
import s from './Recovery.module.scss'
import { RecoveryProps } from './Recovery.types';
import classNames from 'classnames';

export function Recovery({ isSubmitted, setIsSubmitted }: RecoveryProps) {

    const { control, handleSubmit } = useForm()
    const submitForm = handleSubmit(async (data) => {
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_HOST}/auth/recovery`, { email: data.email })
            setIsSubmitted(true)

        } catch (error: any) {
            toast.error(error?.response?.data?.message ?? 'Неизвестная ошибка')
        }
    })

    return (
        <form className={classNames(s.form, {
            [s.form__hidden]: isSubmitted
        })} onSubmit={submitForm}>
            <div className={s.form__info}>
                <AuthTitle value='Восстановление пароля' />
                <Controller
                    render={({ field: {onChange, value} }) => <AuthInput placeholder={'Введите почту для отправки ссылки'} onChange={onChange} value={value} />}
                    name="email"
                    control={control}
                    defaultValue=""
                />
            </div>
            <div className={s.form__buttons}>
                <Link href={'/authorization'}>
                    <AuthButton value={'Назад'} size='small' type='button' />
                </Link>
                <AuthButton type='submit' value={'Отправить'} isOutline size='large' />
            </div>
        </form>
    );
}
