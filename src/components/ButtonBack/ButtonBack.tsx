'use client'

import { ButtonBackProps } from './ButtonBack.types';
import s from './ButtonBack.module.scss'
import { useParams, useRouter } from 'next/navigation';

export function ButtonBack({ text, ...props }: ButtonBackProps) {
    // Пока тестовый вариант можно использовать router.back(), но он будет криво работать если перейти на страницу извне
    const params = useParams()
    const router = useRouter()
    return (
        <button {...props} onClick={() => { router.push(params.egeItem ? '/ege' : '/oge') }} className={s.button}>{text}</button>
    );
};