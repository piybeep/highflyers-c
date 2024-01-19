'use client'

import s from './LessonPlansList.module.scss'
import { CardPlans } from '@/components';
import { preparedTime } from '@/utils/time';
import { usePathname } from 'next/navigation';
import { LessonPlansTypes } from '@/types/lessonPlans.types';

export function LessonPlansList({ data, levels, userLessonPlansId }: { data: LessonPlansTypes[], levels: string[], userLessonPlansId?: number[] }) {
    const lessonPlansData = levels?.map(level => ({
        isFree: data?.filter(material => material.level === level).every(i => i.isFree),
        level: level,
        materials: data
            ?.filter(material => material.level === level)
            .map(material => ({ ...material, isBuy: userLessonPlansId?.includes(material.id) }))
    }))
        .filter(item => Object.keys(item.materials).length !== 0)

    const pathname = usePathname()

    return (
        <div className={s.wrapper}>
            {
                lessonPlansData?.map((card, index: number) => (
                    <div key={index} className={s.info}>
                        <div className={s.header}>
                            <h2 className={s.header__title}>Карточки уровня <span className={s.header__title_span}>{card.level}</span></h2>
                        </div>
                        <div className={s.list}>
                            {
                                card.materials &&
                                card.materials.map((material, index: number) => (
                                    <CardPlans
                                        key={index}
                                        isBuy={material.isBuy}
                                        name={material.name}
                                        free={material.isFree}
                                        time={preparedTime(material.time)}
                                        img={process.env.NEXT_PUBLIC_STATIC + material.img.url}
                                        source={(material.isBuy || material.isFree) ? process.env.NEXT_PUBLIC_STATIC + material.source.url : `${pathname}?popup=access`}
                                        target={(material.isBuy || material.isFree) ? '_blank' : '_self'}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};