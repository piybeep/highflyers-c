'use client'

import { ElementLessonPlansListProps, LessonPlansListProps } from './LessonPlansList.types';
import s from './LessonPlansList.module.scss'
import { CardPlans } from '@/components';
import { preparedTime } from '@/utils/time';
import { useSearchParams } from 'next/navigation';

export function LessonPlansList({ data, levels }: { data: ElementLessonPlansListProps[], levels: string[] }) {
    const lessonPlansData = levels.map((level: string) => ({
        isFree: data.filter(material => material.level === level).every(i => i.isFree),
        level: level,
        materials: data.filter((material: ElementLessonPlansListProps) => material.level === level)
    }))
        .filter(item => Object.keys(item.materials).length !== 0)
        .sort((a, b) => a.level.localeCompare(b.level))

    const searchParams = useSearchParams()

    return (
        <div className={s.wrapper}>
            {
                lessonPlansData.map((current: LessonPlansListProps, index: number) => (
                    <div key={index} className={s.info}>
                        <div className={s.header}>
                            <h2 className={s.header__title}>Карточки уровня <span className={s.header__title_span}>{current.level}</span></h2>
                            {
                                !searchParams.get('checkbox') && current.isFree && <span className={s.header__slogan}>Доступно</span>
                            }
                        </div>
                        <div className={s.list}>
                            {
                                current.materials &&
                                current.materials.map((current: ElementLessonPlansListProps, index: number) => (
                                    <CardPlans
                                        key={index}
                                        id={current.name}
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