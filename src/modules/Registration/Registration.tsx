'use client';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm, Controller } from 'react-hook-form';

import {
    AuthAccount,
    AuthButton,
    AuthGoogle,
    AuthInput,
    AuthTitle,
    Privacy,
} from '@/components';
import s from './Registration.module.scss';
import { useRouter } from 'next/navigation';
import { useUser } from '@/store';
import { PAGES_LINK } from '@/constants';
import { setCookie } from 'cookies-next';

export function Registration() {
    const { control, handleSubmit, reset } = useForm();

    const { setUser } = useUser();

    const router = useRouter();

    const submitForm = handleSubmit(async (data) => {
        if (data.checkbox) {
            axios
                .post(`${process.env.NEXT_PUBLIC_HOST}auth/local/register`,
                    {
                        username: data.name,
                        email: data.email,
                        password: data.password
                    })
                .then(res => {
                    toast.success('Пользователь зарегистрирован');
                    setUser(res.data.user);
                    reset();
                    setCookie('token', res.data.jwt)
                    router.push(PAGES_LINK.HOME);
                })
                .catch(error => {
                    toast.error(error?.response?.data?.error?.details?.errors?.map((i: any) => i.message).join(', ')
                        ?? error?.response?.data?.error?.message
                        ?? 'Неизвестная ошибка')
                })
        }
        else {
            toast.error('Примите политику конфиденциальности');
        }
    });

    return (
        <form className={s.form} onSubmit={submitForm}>
            <div className={s.form__header}>
                <AuthTitle value={'Зарегистрироваться'} />
                <AuthAccount />
                <AuthGoogle />
            </div>
            <div className={s.form__info}>
                <Controller
                    render={({ field: { onChange, value } }) => (
                        <AuthInput
                            name='name'
                            placeholder={'Имя'}
                            isText
                            onChange={onChange}
                            value={value}
                        />
                    )}
                    name='name'
                    control={control}
                    defaultValue=''
                />
                <Controller
                    render={({ field: { onChange, value } }) => (
                        <AuthInput
                            name='email'
                            placeholder={'Почта'}
                            onChange={onChange}
                            value={value}
                        />
                    )}
                    name='email'
                    control={control}
                    defaultValue=''
                />
                <Controller
                    render={({ field: { onChange, value } }) => (
                        <AuthInput
                            name='password'
                            placeholder={'Пароль'}
                            password
                            onChange={onChange}
                            value={value}
                        />
                    )}
                    name='password'
                    control={control}
                    defaultValue=''
                />
                <Controller
                    name='checkbox'
                    control={control}
                    defaultValue={false}
                    render={({ field: { value, onChange } }) => (
                        <Privacy name='checkbox' value={value} onChange={onChange} />
                    )}
                />
            </div>
            <div className={s.form__button}>
                <AuthButton value={'Дальше'} isOutline size='large' />
            </div>
        </form>
    );
}
