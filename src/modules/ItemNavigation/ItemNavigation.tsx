'use client'

import { ItemNavigationProps } from "./ItemNavigation.types";
import s from './ItemNavigation.module.scss'
import { ButtonBack } from "@/components";
import { useRouter } from "next/navigation";

export function ItemNavigation({ title, tags }: ItemNavigationProps) {
    const router = useRouter()
    return (
        <div className={s.wrapper}>
            <ButtonBack text={"Назад"} onClick={() => router.back()} />
            <div className={s.info}>
                <h2 className={s.info__title}>{title}</h2>
                <div className={s.list}>
                    {
                        tags.map(current => (
                            <p key={current.name} className={s.list__theme}># {current.name}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};