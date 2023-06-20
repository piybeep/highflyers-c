'use client'

import Link from "next/link";
import Image from "next/image";

import { FooterNav } from "../FooterNav";

import { SUPPORT } from "@/constants/support";
import { SOCIAL } from "@/constants/social";

import { FooterProps } from "./Footer.types";
import s from './Footer.module.scss'
import { POLICY } from "@/constants/policy";

export function Footer({ }: FooterProps) {
    return (
        <footer className={s.wrapper}>
            <div className={s.info}>
                <FooterNav />
                <div className={s.info__list}>
                    {SOCIAL.map(current => (
                        <Link key={current.id} target="_blank" href={current.link}>
                            <Image className={s.info__img} src={current.img} alt={'картинка'} width={35} height={35} />
                        </Link>
                    ))}
                </div>
            </div>

            <div className={s.support}>
                <div className={s.support__info}>
                    <div className={s.support__email}>
                        <h2 className={s.support__title}>Свяжитесь с нами</h2>
                        <a className={s.support__link} href="mailTo: support@mail.com">support@mail.com</a>
                    </div>
                    <div className={s.support__payment}>
                        <h2 className={s.support__title}>Способы оплаты</h2>
                        <div className={s.support__list}>
                            {SUPPORT.map(current => (
                                <Image key={current.id} src={current.img} alt={"Картинка"} className={s.support__img} width={70} height={30} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={s.support__policy}>
                    <div className={s.support__items}>
                        {POLICY.map(current => (
                            <a key={current.id} href={current.link} className={s.support__item}>{current.text}</a>
                        ))}
                    </div>
                    <h2 className={s.support__piybeep}>Сделано в студии <a href="https://piybeep.com" className={s.support__piybeep_link} target='_blank'>Piybeep</a></h2>
                </div>
            </div>
        </footer>
    );
};