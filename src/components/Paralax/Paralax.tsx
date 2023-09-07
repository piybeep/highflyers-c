'use client'

import Image from 'next/image';

import s from './Paralax.module.scss'

import site from '../../../public/img/paralax/paralaxSite.png'
import { useEffect, useRef } from 'react';

export function Paralax() {

    const refWrapper = useRef<any>()
    const refImg = useRef<any>()

    useEffect(() => {
        if (window) {
            window.addEventListener('scroll', e => {
                const paralaxHeight = refWrapper.current.clientHeight
                const paralaxScrollTop = refWrapper.current.offsetTop
                const wrapperPadding = 28 * 2

                const imgHeight = refImg.current.clientHeight

                // Рабочий вариант
                // const top = (paralaxScrollTop - paralaxHeight) - window.scrollY
                // Тестовый вариант
                const top = (paralaxScrollTop - paralaxHeight / 2) - window.scrollY - wrapperPadding
                const topZero = top < 0
                const topHeight = top > (paralaxHeight - imgHeight - wrapperPadding)
                if (topZero && topHeight) {
                    document.body.style.cssText = `--scrollTop: ${top}px`
                }
            })
        }
    }, [])

    return (
        <div ref={refWrapper} className={s.wrapper}>
            <div className={s.wrapper__ipad}></div>
            <Image ref={refImg} className={s.wrapper__img} src={site.src} alt={'картинка'} width={770} height={1045} />
        </div>
    );
};