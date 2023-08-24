'use client';

import { Material } from '@/types';
import { Materials, ProfileData, RemoveProfile } from '@/modules';

import s from './Profile.module.scss';

import material from '../../../public/svg/material.svg';
import Image from 'next/image';

export function Profile({ materials }: { materials: Material[] }) {
    return (
        <div className={s.wrapper}>
            <RemoveProfile />
            <ProfileData />
            <div className={s.material}>
                <h2 className={s.material__title}>
                    Материалы для изучения
                    <Image
                        className={s.material__icon}
                        src={material}
                        alt={'Иконка'}
                    />
                </h2>
                <Materials materials={materials} />
            </div>
        </div>
    );
}
