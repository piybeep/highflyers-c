'use client'

import { ProfileData, ProfileMaterial, RemoveProfile } from "@/modules";

import s from './Profile.module.scss'

export function Profile() {

    return (
        <div className={s.wrapper}>
            <RemoveProfile />
            <ProfileData />
            <ProfileMaterial />
        </div>
    );
};