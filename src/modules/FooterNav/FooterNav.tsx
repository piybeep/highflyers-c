'use client'

import { useUser } from "@/store";

import classNames from "classnames";

import Link from "next/link";

import { NAVIGATION, NAVIGATION_WITH_AUTH } from "@/constants/links";

import { FooterNavProps } from "./FooterNav.types";
import s from './FooterNav.module.scss'

export function FooterNav({ }: FooterNavProps) {

    const {isAuth} = useUser(state => state)

    return (
        <div className={s.menu}>
            {(!isAuth ? NAVIGATION : NAVIGATION_WITH_AUTH).map((current) => (
                current.type === 'link'
                    ?
                    <Link key={current.text} href={current.link} className={s.menu__link}>
                        {current.text}
                    </Link>
                    :
                    <div key={current.text} className={s.menu__info}>
                        <Link href={current.link} className={classNames(s.menu__link, s.menu__link_drop)}>{current.text}</Link>
                        <div className={s.list}>
                            {current.level?.map(current => (
                                <Link key={current.text} className={s.list__link} href={{ query: { level: current.text }, pathname: '/learn' }}>
                                    {current.text}
                                </Link>
                            ))}
                        </div>
                    </div>
            ))}
        </div>
    );
};