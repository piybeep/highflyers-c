'use client'

import { ElementLessonPlansListProps, LessonPlansListProps } from './LessonPlansList.types';
import s from './LessonPlansList.module.scss'
import { CardPlans } from '@/components';
import { preparedTime } from '@/utils/time';

export function LessonPlansList({ data, levels }: { data: ElementLessonPlansListProps[], levels: string[] }) {
    console.log(data)
    const lessonPlanstData = levels.map((level: string) => ([
        {
            isFree: true,
            level: level,
            materials: data.filter((material: ElementLessonPlansListProps) => material.level === level && material.isFree)
        },
        {
            isFree: false,
            level: level,
            materials: data.filter((material: ElementLessonPlansListProps) => material.level === level && !material.isFree)
        }
    ]))
        .map(item => item.filter(itemFilter => Object.keys(itemFilter.materials).length !== 0))
    // Почему-то не работает, не могу понять почему
    // .sort((a, b) => a.level > b.level ? -1 : 1 ?? 0)

    return (
        <div className={s.wrapper}>
            {
                lessonPlanstData.map((test: any) => (
                    test.map((current: LessonPlansListProps, index: number) => (
                        <div key={index} className={s.info}>
                            <div className={s.header}>
                                <h2 className={s.header__title}>Карточки уровня <span className={s.header__title_span}>{current.level}</span></h2>
                                {
                                    current.isFree && <span className={s.header__slogan}>Доступно</span>
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
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                ))
            }
        </div>
    );
};