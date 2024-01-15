'use client'

import { ElementLessonPlansListProps, LessonPlansListProps } from './LessonPlansList.types';
import s from './LessonPlansList.module.scss'
import { CardPlans } from '@/components';
import { preparedTime } from '@/utils/time';

export function LessonPlansList({ data, levels, userLessonPlansId }: { data: ElementLessonPlansListProps[], levels: string[], userLessonPlansId?: number[] }) {
    const lessonPlansData = levels?.map((level: string) => ({
        isFree: data?.filter(material => material.level === level).every(i => i.isFree),
        level: level,
        materials: data
            ?.filter((material: ElementLessonPlansListProps) => material.level === level)
            .map((material: ElementLessonPlansListProps) => ({ ...material, isBuy: userLessonPlansId?.includes(material.id) }))
    }))
        .filter(item => Object.keys(item.materials).length !== 0)

    return (
        <div className={s.wrapper}>
            {
                lessonPlansData?.map((current: LessonPlansListProps, index: number) => (
                    <div key={index} className={s.info}>
                        <div className={s.header}>
                            <h2 className={s.header__title}>Карточки уровня <span className={s.header__title_span}>{current.level}</span></h2>
                        </div>
                        <div className={s.list}>
                            {
                                current.materials &&
                                current.materials.map((current: ElementLessonPlansListProps, index: number) => (
                                    <CardPlans
                                        key={index}
                                        isBuy={current.isBuy}
                                        name={current.name}
                                        free={current.isFree}
                                        time={preparedTime(current.time)}
                                        img={process.env.NEXT_PUBLIC_STATIC + current.img.url}
                                        source={process.env.NEXT_PUBLIC_STATIC + current.source.url}
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