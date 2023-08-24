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

export function Registration() {
    const { control, handleSubmit, reset } = useForm();

    const { setUser } = useUser();

    const router = useRouter();

    const submitForm = handleSubmit(async (data) => {
        if (data.checkbox) {
            try {
                const response = await axios.post(
                    `/api/register`,
                    { email: data.email, password: data.password },
                    { withCredentials: true },
                );
                toast.success('Пользователь зарегистрирован');
                setUser(response.data);
                reset();
                router.push('/');
            } catch (error: any) {
                if (Array.isArray(error?.response?.data?.message)) {
                    error?.response?.data?.message.map((current: any) =>
                        toast.error(current),
                    );
                } else {
                    toast.error(
                        error?.response?.data?.message ?? 'Неизвестная ошибка',
                    );
                }
            }
        } else {
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
                        <Privacy value={value} onChange={onChange} />
                    )}
                />
            </div>
            <div className={s.form__button}>
                <AuthButton value={'Дальше'} isOutline size='large' />
            </div>
        </form>
    );
}
