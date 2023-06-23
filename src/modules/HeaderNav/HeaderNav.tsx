'use client'

import Link from 'next/link';
import Image from 'next/image';

import classNames from 'classnames';

import { NAVIGATION, NAVIGATION_WITH_AUTH } from '@/constants/links';

import { HeaderNavProps } from './HeaderNav.types';
import s from './HeaderNav.module.scss'

export function HeaderNav({ }: HeaderNavProps) {
    // Пока костыль
    const status = 'unauthenticated'

    return (
        <div className={s.menu}>
            {(status === 'unauthenticated' ? NAVIGATION : NAVIGATION_WITH_AUTH).map((current) => (
                current.type === 'link'
                    ?
                    <Link key={current.text} href={current.link} className={s.menu__link}>
                        {current.text}
                        {current.img && <Image className={s.menu__img} src={current.img} alt={'картинка'} width={26} height={9} />}
                    </Link>
                    :
                    <div key={current.text} className={s.menu__info}>
                        <Link href={current.link} className={classNames(s.menu__link, s.menu__link_drop)}>{current.text}</Link>
                        <div className={s.info}>
                            <h2 className={s.info__header}>уровень</h2>
                            <div className={s.info__list}>
                                {current.level?.map(current => (
                                    current.id % 2 != 0 ?
                                        <div key={current.text} className={s.info__item}>
                                            <Link className={s.info__link} href={{ query: { level: current.text }, pathname: '/learn' }}>
                                                {current.text}
                                            </Link>
                                            <div className={s.info__circle} style={{ width: current.id === 1 ? current.id * 8 : current.id * 4, height: current.id === 1 ? current.id * 8 : current.id * 4 }}></div>
                                        </div>
                                        :
                                        <Link key={current.text} className={s.info__link} href={{ query: { level: current.text }, pathname: '/learn' }}>
                                            {current.text}
                                        </Link>
                                ))}
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    );
};