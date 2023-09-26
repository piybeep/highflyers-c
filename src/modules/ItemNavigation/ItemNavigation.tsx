'use client'

import { ItemNavigationProps } from "./ItemNavigation.types";
import s from './ItemNavigation.module.scss'
import { ButtonBack } from "@/components";

export function ItemNavigation({ title, tags }: ItemNavigationProps) {
    return (
        <div className={s.wrapper}>
            <ButtonBack text={"Назад"} />
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