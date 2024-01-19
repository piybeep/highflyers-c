'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Input } from '@/components';

import s from './ProfileData.module.scss';

import profileIcon from '../../../public/svg/profile.svg';
import trash from '../../../public/svg/trash.svg';
import { PAGES_LINK } from '@/constants';
import { UserProps } from '@/types';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export function ProfileData({ user }: { user: UserProps }) {
    const router = useRouter()
    const handleLogOut = () => {
        deleteCookie('token')
        router.push(PAGES_LINK.HOME)
        router.refresh()
    }

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

                        isConfirm={true}

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

                        isConfirm={true}

                        validation={{
                            required: true,
                            minLength: 6
                        }}
                    />
                </div>
                <div className={s.buttons}>
                    <button
                        onClick={() => handleLogOut()}
                        className={s.buttons__logout}
                    >
                        Выйти из аккаунта
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.4996 2.10965H3.10965V12.8896H10.4996C10.8365 12.8896 11.1096 13.1628 11.1096 13.4996C11.1096 13.8365 10.8365 14.1096 10.4996 14.1096H2.99965C2.38661 14.1096 1.88965 13.6127 1.88965 12.9996V1.99965C1.88965 1.38661 2.38661 0.889648 2.99965 0.889648H10.4996C10.8365 0.889648 11.1096 1.16275 11.1096 1.49965C11.1096 1.83654 10.8365 2.10965 10.4996 2.10965ZM12.681 4.81831C12.4428 4.58009 12.0565 4.58009 11.8183 4.81831C11.5801 5.05653 11.5801 5.44276 11.8183 5.68098L13.027 6.88965H6.49965C6.16276 6.88965 5.88965 7.16276 5.88965 7.49965C5.88965 7.83654 6.16276 8.10965 6.49965 8.10965H13.027L11.8183 9.31831C11.5801 9.55653 11.5801 9.94276 11.8183 10.181C12.0565 10.4192 12.4428 10.4192 12.681 10.181L14.931 7.93098C15.1692 7.69276 15.1692 7.30653 14.931 7.06831L12.681 4.81831Z" fill="#666666" />
                        </svg>
                    </button>
                    <Link
                        href={{
                            pathname: PAGES_LINK.PROFILE,
                            query: { window: 'remove' },
                        }}
                        className={s.buttons__remove}
                    >
                        <p className={s.buttons__title}>Удалить аккаунт</p>
                        <Image className={s.buttons__svg} src={trash} alt={''} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
