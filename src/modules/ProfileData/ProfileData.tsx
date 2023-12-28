'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Input } from '@/components';

import s from './ProfileData.module.scss';

import profileIcon from '../../../public/svg/profile.svg';
import trash from '../../../public/svg/trash.svg';
import { PAGES_LINK } from '@/constants';
import { UserProps } from '@/types';

export function ProfileData({ user }: { user: UserProps }) {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>
                <span>Мои данные</span>
                <Image className={s.title__svg} src={profileIcon} alt={''} />
            </h2>
            <div className={s.info}>
                <div className={s.form}>
                    <Input
                        isBordered
                        placeholder='Имя'
                        className={'first'}
                        idUser={user.id}
                        name='username'
                        initialValue={user.username}

                        validation={{
                            required: true,
                            minLength: 3
                        }}
                    />
                    <Input
                        isBordered
                        placeholder='Фамилия'
                        className={'second'}
                        idUser={user.id}

                        name='lastName'
                        initialValue={user.lastName}
                    />
                    <Input
                        isBordered
                        placeholder='Электронная почта'
                        className={'email'}
                        idUser={user.id}
                        name='email'

                        initialValue={user.email}

                        validation={{
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        }}
                    />
                    <Input
                        isBordered
                        placeholder='Пароль'
                        className={'password'}
                        idUser={user.id}
                        name='password'
                        type='password'

                        validation={{
                            required: true,
                            minLength: 6
                        }}
                    />
                </div>
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
