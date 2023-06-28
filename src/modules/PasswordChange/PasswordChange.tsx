'use client'

import { useRouter } from "next/navigation";

import { Controller, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";

import { AuthButton, AuthInput, AuthTitle } from "@/components";

import { PasswordChangeProps } from "./PasswordChange.types";
import s from './PasswordChange.module.scss'



export function PasswordChange({ userId, resetCode, ...props }: PasswordChangeProps) {

    const { control, handleSubmit } = useForm()
    const router = useRouter()

    const onSubmit = handleSubmit(async (data) => {
        try {
            axios.patch(`${process.env.NEXT_PUBLIC_HOST}/auth/recovery`, { id: userId, code: resetCode, ...data }).then(response => {
                localStorage.setItem('accessToken', response.data.accessToken)
                localStorage.setItem('refreshToken', response.data.refreshToken)
                toast.success('Пароль обновлён')
                router.push('/')
            }).catch((error) => toast.error(error?.response?.data?.message ?? 'Неизвестная ошибка'))
        } catch (error: any) {
            toast.error(error?.response?.data?.message ?? 'Неизвестная ошибка')
        }
    })

    return (
        <form className={s.form} onSubmit={onSubmit}>
            <div className={s.form__info}>
                <AuthTitle value="Смена пароля" />
                <Controller
                    name="new_password"
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => <AuthInput placeholder={"Пароль"} password value={value} onChange={onChange} />}
                />
            </div>
            <div className={s.form__button}>
                <AuthButton value={"Продолжить"} isOutline size="large" type='submit' />
            </div>
        </form>
    );
};