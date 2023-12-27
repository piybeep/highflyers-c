'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Input } from '@/components';

import s from './ProfileData.module.scss';

import profileIcon from '../../../public/svg/profile.svg';
import trash from '../../../public/svg/trash.svg';
import { PAGES_LINK } from '@/constants';
import { Controller, useForm } from 'react-hook-form';
import { UserProps } from '@/types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import toast from 'react-hot-toast';

type FormValues = {
    username: string,
    lastName: string,
    email: string,
    password: string,
}

export function ProfileData({ user }: { user: UserProps }) {
    const { control, reset, handleSubmit, formState: { errors, isValid } } = useForm<FormValues>({
        defaultValues: {
            username: user.username ?? '',
            lastName: user.lastName ?? '',
            email: user.email ?? '',
            password: '',
        },
    });

    useEffect(() => {
        if (user) {
            reset({
                username: user.username,
                lastName: user.lastName,
                email: user.email
            })
        }
    }, [user])

    const submit = async (values: FormValues) => {
        const idUser = user.id
        const token = getCookie('token')
        await axios.put(`${process.env.NEXT_PUBLIC_HOST}users/${idUser}`, values, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                toast.success('Изменения сохранены')
            })
            .catch(error => toast.error(error.response.data.error.message))
    }

    // Для редактирования input
    const [isDisable, setIsDisable] = useState(true)

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>
                <span>Мои данные</span>
                <Image className={s.title__svg} src={profileIcon} alt={''} />
            </h2>
            <div className={s.info}>
                <form className={s.form} autoComplete='off' onSubmit={handleSubmit(submit)}>
                    <Controller
                        render={({ field: { onChange, value } }) => (
                            <Input
                                isBordered
                                placeholder='Имя'
                                isPlaceholder
                                onChange={onChange}
                                value={value}
                                className={'first'}

                                isError={!!errors.username}
                                submit={handleSubmit(submit)}
                                setIsDisable={setIsDisable}
                                isDisable={isDisable}
                                isFormValidate={isValid}
                            />
                        )}
                        name='username'
                        control={control}

                        rules={{ required: true, minLength: 3 }}
                    />
                    <Controller
                        render={({ field: { onChange, value } }) => (
                            <Input
                                isBordered
                                placeholder='Фамилия'
                                isPlaceholder
                                onChange={onChange}
                                value={value}
                                className={'second'}

                                isError={!!errors.lastName}
                                submit={handleSubmit(submit)}
                                setIsDisable={setIsDisable}
                                isDisable={isDisable}
                                isFormValidate={isValid}
                            />
                        )}
                        name='lastName'
                        control={control}
                        rules={{ required: true, minLength: 3 }}
                    />
                    <Controller
                        render={({ field: { onChange, value } }) => (
                            <Input
                                isBordered
                                placeholder='Электронная почта'
                                isPlaceholder
                                inputType='email'
                                onChange={onChange}
                                value={value}
                                className={'email'}

                                isError={!!errors.email}
                                submit={handleSubmit(submit)}
                                setIsDisable={setIsDisable}
                                isDisable={isDisable}
                                isFormValidate={isValid}
                            />
                        )}
                        name='email'
                        control={control}
                        rules={{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}
                    />
                    <Controller
                        render={({ field: { onChange, value } }) => (
                            <Input
                                isBordered
                                placeholder='Пароль'
                                isPlaceholder
                                isPassword
                                onChange={onChange}
                                value={value}
                                className={'password'}

                                isError={!!errors.password}
                                submit={handleSubmit(submit)}
                                setIsDisable={setIsDisable}
                                isDisable={isDisable}
                                isFormValidate={isValid}
                            />
                        )}
                        name='password'
                        control={control}
                        rules={{ required: true, minLength: 6, }}
                    />
                </form>
                <Link
                    href={{
                        pathname: PAGES_LINK.PROFILE,
                        query: { window: 'remove' },
                    }}
                    className={s.remove}
                >
                    <p className={s.remove__title}>Удалить аккаунт</p>
                    <Image className={s.remove__svg} src={trash} alt={''} />
                </Link>
            </div>
        </div>
    );
}
