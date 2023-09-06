import Link from 'next/link';

import { GradientLinkProps } from './GradientLink.types';
import s from './GradientLink.module.scss'

export function GradientLink({ text }: GradientLinkProps) {
    return (
        <Link href='/registration' className={s.link}>
            {text}
            <svg className={s.link__svg} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path className={s.link__svg} fillRule="evenodd" clipRule="evenodd" d="M5.62655 0.582407C6.11716 0.122465 6.88773 0.147322 7.34767 0.637928L14.4065 8.16734C14.8456 8.63571 14.8456 9.36456 14.4065 9.83293L7.34767 17.3623C6.88773 17.8529 6.11716 17.8778 5.62655 17.4179C5.13595 16.9579 5.11109 16.1873 5.57103 15.6967L11.8491 9.00013L5.57103 2.30352C5.11109 1.81292 5.13595 1.04235 5.62655 0.582407Z" fill="white" />
            </svg>
        </Link>
    );
};