'use client';

import { useState } from 'react';

import classNames from 'classnames';
import declOfNum from '@/utils/declOfNum';

import { CardArticle, CardCheck, CardPlans, CardTedTalks } from '@/components';

import s from './MyMaterials.module.scss';
import { preparedTime } from '@/utils/time';
import { useRouter } from 'next/navigation';
import { PAGES_LINK } from '@/constants';

import { ArticlesProps, Category, CheckListCard, LearningType } from '@/types';

export function MyMaterials({ list }: { list: Category[] }) {
    const router = useRouter();

    const names = ['материал', 'материала', 'материалов'];

    const [isOpen, setIsOpen] = useState('');

    const handleClickItem = (id: string) => {
        if (id != isOpen) {
            setIsOpen(id);
        } else {
            setIsOpen('');
        }
    };

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <h1 className={s.header__title}>Доступны для изучения</h1>
                <button className={s.header__button}>Хочу еще</button>
            </div>

            {list.map(current => (
                <div
                    key={current.name}
                    className={classNames(s.item, {
                        [s.item_active]: isOpen === current.name,
                    })}
                >
                    <div
                        onClick={() => handleClickItem(current.name)}
                        className={classNames(s.item__header, {
                            [s.item__header_active]: isOpen === current.name,
                        })}
                    >
                        <h2 className={s.item__title}>{current.name}</h2>
                        <p
                            className={classNames(s.item__count, {
                                [s.item__count_all]: current.count === current.list.length,
                            })}
                        >
                            {`${current.list.length != current.count
                                ? current.list.length +
                                ' ' +
                                declOfNum(current.list.length, names)
                                : 'доступен весь'
                                }`}
                        </p>
                        <svg
                            className={classNames(s.item__arrow, {
                                [s.item__arrow_active]: isOpen === current.name,
                            })}
                            width='20'
                            height='21'
                            viewBox='0 0 20 21'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M18 7.5L10 15.5L2 7.5'
                                stroke='#252525'
                                strokeWidth='3'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </div>
                    <div
                        className={classNames(s.item__info, {
                            [s.item__info_open]: isOpen === current.name,
                        })}
                    >
                        <div
                            className={classNames(s.item__list, {
                                [s.item__list_plans]:
                                    current.name === 'Планы уроков',
                                [s.item__list_check]:
                                    current.name === 'Чек-листы',
                                [s.item__list_article]:
                                    current.name === 'Полезные статьи',
                                [s.item__list_tedTalks]:
                                    current.name === 'TedTalks',
                            })}
                            style={{ minHeight: 0 }}
                        >

                            {current.name === 'Обучение' &&
                                (current?.list as LearningType[])?.map(current => (
                                    <CardPlans
                                        key={current.id}
                                        name={current.title}
                                        free={current.isFree}
                                        isBuy={!current.isFree}
                                        time={preparedTime(current.time)}
                                        img={process.env.NEXT_PUBLIC_STATIC + current.img.url}
                                        source={process.env.NEXT_PUBLIC_STATIC + current.source.url}
                                        target='_blank'
                                    />
                                ),
                                )}

                            {current.name === 'Планы уроков' &&
                                (current?.list as LearningType[]).map(current => (
                                    <CardPlans
                                        key={current.id}
                                        name={current.title}
                                        free={current.isFree}
                                        isBuy={!current.isFree}
                                        time={preparedTime(current.time)}
                                        img={process.env.NEXT_PUBLIC_STATIC + current.img.url}
                                        source={process.env.NEXT_PUBLIC_STATIC + current.source.url}
                                        target='_blank'
                                    />
                                ),
                                )}
                            {current.name === 'Чек-листы' &&
                                (current.list as CheckListCard[]).map(current => {
                                    return (
                                        <CardCheck
                                            open={() => {
                                                router.push(PAGES_LINK.CHECK_LISTS + `?id=${current.id}&popup=open`)
                                            }}
                                            key={current.title}
                                            check_list_source={current.check_list_sources}
                                            title={current.title}
                                        />
                                    )
                                },
                                )}
                            {current.name === 'Полезные статьи' &&
                                (current.list as ArticlesProps[]).map(current => (
                                    <CardArticle
                                        key={current.id}
                                        id={Number(current.id)}
                                        title={current.title}
                                        description={current.description}
                                        href='articles'
                                    />
                                ),
                                )}
                            {/* В дальнейшем оно будет, пока тип для него не прописан */}
                            {/* {current.name === 'TedTalks' &&
                                (current.list as CardTedTalksProps[]).map(
                                    (current) => (
                                        <CardTedTalks
                                            key={current.id}
                                            video={current.video}
                                            title={current.title}
                                            time={current.time}
                                            link={current.link}
                                        />
                                    ),
                                )} */}
                            {/* В дальнейшем оно будет, пока тип для него не прописан */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
