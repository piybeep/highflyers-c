'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Input } from '@/components';

import s from './ProfileData.module.scss';

import profileIcon from '../../../public/svg/profile.svg';
import trash from '../../../public/svg/trash.svg';
import { PAGES_LINK } from '@/constants';
import { useUser } from '@/store';
import { Controller, useForm } from 'react-hook-form';

export function ProfileData() {
    const user = useUser((state) => state.user);
    const status = useUser((state) => state.status);

    const { control } = useForm({
        defaultValues: {
            first_name: user?.first_name ?? '',
            second_name: user?.second_name ?? '',
            email: user?.email,
            new_password: '',
        },
    });

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>
                <span>Мои данные</span>
                <Image className={s.title__svg} src={profileIcon} alt={''} />
            </h2>
            {status === 'loading' ? (
                <div>Загрузка данных</div>
            ) : (
                <div className={s.info}>
                    <form className={s.form}>
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    isBordered
                                    placeholder='Имя'
                                    isPlaceholder
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                            name='first_name'
                            control={control}
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
                                />
                            )}
                            name='email'
                            control={control}
                        />
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    isBordered
                                    placeholder='Фамилия'
                                    isPlaceholder
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                            name='second_name'
                            control={control}
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
                                />
                            )}
                            name='new_password'
                            control={control}
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
            )}
        </div>
    );
}
