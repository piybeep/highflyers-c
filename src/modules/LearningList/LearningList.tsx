'use client'

import { ElementLearningProps } from './LearningList.types';
import s from './LearningList.module.scss';
import { CardPlans } from '@/components';
import { preparedTime } from '@/utils/time';

export function LearningList({ data, levels, userLevels }: { data: ElementLearningProps[], levels: string[], userLevels?: string[] }) {
    const dataCards = levels.map((level: string) => ({
        isFree: userLevels?.includes(level),
        level: level,
        cardsList: data.filter(card => card.level === level)
    }))
        .filter(item => Object.keys(item.cardsList).length != 0)
        .sort((a, b) => a.level.localeCompare(b.level))

    return (
        <div className={s.wrapper}>
            {
                dataCards.map((current, index) => (
                    <div key={index} className={s.info}>
                        <div className={s.header}>
                            <h2 className={s.header__title}>
                                Карточки уровня{' '}
                                <span className={s.header__title_span}>
                                    {current.level}
                                </span>
                            </h2>
                            {current.isFree && (
                                <span className={s.header__slogan}>Доступно</span>
                            )}
                        </div>
                        <div className={s.list}>
                            {current.cardsList.map((card, index) => (
                                <CardPlans
                                    source={process.env.NEXT_PUBLIC_STATIC + card.source.url}
                                    key={index}
                                    id={String(index)}
                                    name={card.title}
                                    free={card.isFree}
                                    time={preparedTime(card.time)}
                                    img={process.env.NEXT_PUBLIC_STATIC + card.img.url}
                                />
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
