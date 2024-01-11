'use client'

import { useEffect } from 'react';
import s from './ConfirmChange.module.scss'
import classNames from 'classnames';
import { AuthButton, AuthInput } from '@/components';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';

export function ConfirmChange({ formValue, isVisible, setIsVisible, token, idUser, handleResetValue, setIsDisabelInput }:
    {
        formValue: string,
        isVisible: boolean,
        setIsVisible: (value: { value: string, isOpen: boolean }) => void,
        token: string | undefined,
        idUser: number,
        handleResetValue: () => void
        setIsDisabelInput: () => void
    }) {
    useEffect(() => {
        isVisible
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'auto'
    }, [isVisible])

    const { handleSubmit, control, formState: { errors } } = useForm()

    const handleConfirmPassword = (value: any) => {
        if (value.password == '123') {
            axios.put(`${process.env.NEXT_PUBLIC_HOST}users/${idUser}`, formValue, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(() => {
                    toast.success('Данные сохранены')
                    setIsDisabelInput()
                    setIsVisible({ value: formValue, isOpen: false })
                })
                .catch(error => {
                    console.error(error)
                    toast.error('Произошла ошибка')
                })
        } else {
            toast.error('Пароль неверный')
        }
    }

    return (
        <div
            onClick={() => { setIsVisible({ value: formValue, isOpen: false }), handleResetValue() }}
            className={classNames(s.wrapper, {
                [s.wrapper__open]: isVisible
            })}
        >
            <form
                onSubmit={handleSubmit(handleConfirmPassword)}
                onClick={e => e.stopPropagation()}
                className={s.container}
            >
                <div className={s.info}>
                    <p className={s.info__title}>Подтвердите, что это вы</p>
                    <Controller
                        render={({ field: { onChange, value } }) => (
                            <AuthInput
                                id={formValue}
                                isError={!!errors.password}
                                name='password'
                                placeholder={'Введите текущий пароль'}
                                password
                                onChange={onChange}
                                value={value}
                            />
                        )}
                        defaultValue=''
                        name='password'
                        control={control}
                    />
                </div>
                <AuthButton
                    isOutline
                    isArrow={false}
                    value={'Продолжить'} />
            </form>
        </div>
    );
};