'use client'

import Image from 'next/image';

import s from './Paralax.module.scss'

import site from '../../../public/img/paralax/paralaxSite.png'
import ipad from '../../../public/svg/paralax/IpadBg.svg'
import { useEffect, useRef } from 'react';

export function Paralax() {
    const refWrapper = useRef<any>()
    const refIpad = useRef<any>()
    const refSite = useRef<any>()

    useEffect(() => {
        if (window) {
            window.addEventListener('scroll', () => {
                const wrapperScrollTop = refWrapper.current.offsetTop

                const ipadHeight = refIpad.current.clientHeight

                const siteHeight = refSite.current.clientHeight

                const marginSIte = parseInt(window.getComputedStyle(refSite.current).margin) * 2

                const top = (wrapperScrollTop - ipadHeight / 2) - window.scrollY - marginSIte
                const topZero = top < 0
                const topHeight = top > ipadHeight - siteHeight - marginSIte

                if (topZero && topHeight) {
                    document.body.style.cssText = `--scrollTop: ${top}px`
                }
            })
        }
    }, [])

    return (
        <div ref={refWrapper} className={s.wrapper} >
            <Image ref={refIpad} className={s.wrapper__ipad} src={ipad.src} alt={'картинка'} width={621} height={815} />
            <Image ref={refSite} src={site.src} alt={'картинка'} className={s.wrapper__site} width={770} height={1045} />
        </div >
    );
};