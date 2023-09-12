'use client'

import { ButtonBackProps } from './ButtonBack.types';
import s from './ButtonBack.module.scss'

export function ButtonBack({ text, ...props }: ButtonBackProps) {
    return (
        <button {...props} className={s.button}>{text}</button>
    );
};