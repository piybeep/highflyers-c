import Image from 'next/image';

import s from './AuthGoogle.module.scss'
import { AuthGoogleProps } from './AuthGoogle.types';

import icon from '../../public/img/GoogleLogo.png'

export function AuthGoogle({}:AuthGoogleProps) {
    return (
        <button className={s.button}>
            <Image width={36} height={36} className={s.button__icon} src={icon.src} alt={'иконка'}/>
            <h3 className={s.button__text}>Авторизоваться с Google</h3>
        </button>
    );
};