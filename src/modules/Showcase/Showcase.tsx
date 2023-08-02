'use client'

import { Material } from "@/types";
import { Materials } from "../Materials";

import Link from "next/link";

import s from './Showcase.module.scss'
import { useEffect, useState } from "react";

export function Showcase({ materials }: { materials: Material[] }) {

    const [discount, setDiscount] = useState('')


    useEffect(() => {
        const funcDiscount = () => {
            const num = 100

            const sumAllCard = materials.reduce((accum, currentAccum) => accum + currentAccum.priceForOne, 0)
            const countServices = materials.reduce((accum, currentAccum) => accum + currentAccum.list.length, 0)

            const sumAllChapter = materials.reduce((accum, currentAccum) => accum + currentAccum.fullPrice, 0)
            const lengthMaterial = materials.length

            const left = (num / (sumAllCard / countServices))
            const rigth = sumAllChapter / lengthMaterial

            setDiscount(Math.round(left * rigth).toLocaleString())
        }
        funcDiscount()
    }, [])

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>Изучайте английский!</h2>
            <p className={s.description}>Чтобы начать обучение, выберите любой доступный вариант: возможна покупка одного обучающего материала, например, план урока по теме “Weather” или одного раздела со всеми темами, например, «Обучение по карточкам», что предоставит вам полный доступ ко всем материалам и темам определенного уровня данного раздела. Также возможно приобретение двух разделов, к примеру, «Обучение по карточкам» и «ОГЭ/ЕГЭ» или доступна покупка всех материалов платформы, которая обновляется на постоянной основе.</p>
            <div className={s.info}>
                <Materials materials={materials} />
                <Link className={s.info__button} href={'#buy'}>
                    <span className={s.info__button_span}>Выгода {discount}%</span>
                    {`Приобрести все разделы за ${materials.reduce((accumulator, currentValue) => accumulator + currentValue.fullPrice, 0)} ₽`}
                </Link>
            </div>
        </div>
    );
};