'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import s from './PopupContent.module.scss'
import classNames from 'classnames';
import { useEffect } from 'react';

export function PopupContent({ text, link }: { text: string, link: string }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        searchParams.get('popup') === 'access'
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'auto'
    }, [searchParams])

    return (
        <div className={classNames(s.wrapper, {
            [s.wrapper__visible]: searchParams.get('popup') === 'access'
        })}
            onClick={() => router.push(pathname, { query: {}, scroll: false })}
        >
            <div className={s.content} onClick={e => e.stopPropagation()}>
                <div className={s.info}>
                    <p className={s.info__text}>{text}</p>
                    <Link href={link} className={s.info__link}>
                        Смотреть тарифы
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.92532 2.09222C8.2794 1.73814 8.85347 1.73814 9.20754 2.09222L13.4742 6.35888C13.8283 6.71296 13.8283 7.28703 13.4742 7.6411L9.20754 11.9078C8.85347 12.2618 8.2794 12.2618 7.92532 11.9078C7.57125 11.5537 7.57125 10.9796 7.92532 10.6256L10.6442 7.90666H2.16643C1.66569 7.90666 1.25977 7.50073 1.25977 6.99999C1.25977 6.49926 1.66569 6.09333 2.16643 6.09333H10.6442L7.92532 3.37444C7.57125 3.02036 7.57125 2.44629 7.92532 2.09222Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};