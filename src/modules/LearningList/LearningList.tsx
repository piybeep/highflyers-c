'use client'

import s from './LearningList.module.scss';
import { CardPlans } from '@/components';
import { Learning } from '@/types';
import { preparedTime } from '@/utils/time';
import { usePathname } from 'next/navigation';

export function LearningList({ data, levels, userLevels }: { data: Learning[], levels: string[], userLevels?: string[] }) {
    const dataCards = levels?.map(level => ({
        isFree: !!userLevels?.includes(level),
        level: level,
        cardsList: data?.filter(card => card.level === level)
    }))
        .filter(item => Object.keys(item.cardsList).length != 0)

    const pathname = usePathname()

    return (
        <div className={s.wrapper}>
            {
                dataCards?.map((card, index) => (
                    <div key={index} className={s.info}>
                        <div className={s.header}>
                            <h2 className={s.header__title}>
                                Карточки уровня{' '}
                                <span className={s.header__title_span}>
                                    {card.level}
                                </span>
                            </h2>
                            {card.isFree && (
                                <span className={s.header__slogan}>Доступно</span>
                            )}
                        </div>
                        <div className={s.list}>
                            {card?.cardsList?.map((item: any, index: any) => (
                                <CardPlans
                                    source={card.isFree ? process.env.NEXT_PUBLIC_STATIC + item.source.url : `${pathname}?popup=access`}
                                    key={index}
                                    name={item.title}
                                    free={false}
                                    time={preparedTime(item.time)}
                                    img={process.env.NEXT_PUBLIC_STATIC + item.img.url}
                                    target={card.isFree ? '_blank' : '_self'}
                                />
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
