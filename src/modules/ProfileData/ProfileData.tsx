'use client'

import Image from 'next/image';
import Link from 'next/link';

import { Input } from '@/components';

import s from './ProfileData.module.scss'

import profileIcon from '../../../public/svg/profile.svg'
import trash from '../../../public/svg/trash.svg'

export function ProfileData({ ...props }) {
    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>
                <span>Мои данные</span>
                <Image className={s.title__svg} src={profileIcon} alt={'Иконка'} />
            </h2>
            <div className={s.info}>
                <div className={s.form}>
                    <Input isBordered placeholder='Имя' isPlaceholder />
                    <Input isBordered placeholder='Электронная почта' isPlaceholder inputType='email' />
                    <Input isBordered placeholder='Фамилия' isPlaceholder />
                    <Input isBordered placeholder='Пароль' isPlaceholder isPassword />
                </div>
                <Link href={{ pathname: '/profile', query: { window: 'remove' } }} className={s.remove}>
                    <p className={s.remove__title}>Удалить аккаунт</p>
                    <Image className={s.remove__svg} src={trash} alt={'Иконка'} />
                </Link>
            </div>
        </div>
    );
};