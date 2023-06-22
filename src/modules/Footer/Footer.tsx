'use client'

import Link from "next/link";
import Image from "next/image";

import { FooterNav } from "../FooterNav";

import { SOCIAL } from "@/constants";

import { FooterProps } from "./Footer.types";
import s from './Footer.module.scss'
import { FooterSupport } from "../FooterSupport";

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
            <FooterSupport />
        </footer>
    );
};