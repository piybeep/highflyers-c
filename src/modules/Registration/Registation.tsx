'use client'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm, Controller } from 'react-hook-form';

import { AuthAccount, AuthButton, AuthGoogle, AuthInput, AuthTitle, Privacy } from '@/components';
import s from './Registation.module.scss'
import { RegistationProps } from './Registation.types';

export function Registation({ }: RegistationProps) {
    const { control, handleSubmit, reset, setValue } = useForm();

    const submitForm = handleSubmit(async (data) => {
        if (data.checkbox) {
            try {
                const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/auth`, { email: data.email, password: data.password })
                localStorage.setItem('accessToken', response.data.accessToken)
                localStorage.setItem('refreshToken', response.data.refreshToken)
                reset()
            } catch (error: any) {
                toast.error(error?.response?.data?.message ?? 'Неизвестная ошибка')
            }
        } else {
            toast.error('Примите политику конфиденциальности')
        }
    })

    return (
        <form className={s.form} onSubmit={submitForm}>
            <div className={s.form__header}>
                <AuthTitle value={'Зарегистрироваться'} />
                <AuthAccount />
                <AuthGoogle />
            </div>
            <div className={s.form__info}>
                <Controller
                    render={({ field: { onChange, value } }) => <AuthInput placeholder={'Почта'} onChange={onChange} value={value} />}
                    name="email"
                    control={control}
                    defaultValue=""
                />
                <Controller
                    render={({ field: { onChange, value } }) => <AuthInput placeholder={'Пароль'} password onChange={onChange} value={value} />}
                    name="password"
                    control={control}
                    defaultValue=""
                />
                <Controller
                    name="checkbox"
                    control={control}
                    defaultValue={false}
                    render={({ field: {value, onChange} }) => (<Privacy value={value}  onChange={onChange}/>)}
                />
            </div>
            <div className={s.form__button}>
                <AuthButton value={'Дальше'} isOutline size='large' />
            </div>
        </form>
    );
};