'use client'

import { Category } from '@/types';

import s from './MyMaterials.module.scss'

import declOfNum from '@/utils/declOfNum';
import classNames from 'classnames';
import { useState } from 'react';
import { CardArticle, CardCheck, CardPlans } from '@/components';

export function MyMaterials({ list }: { list: Category[] }) {

    const names = ['материал', 'материала', 'материалов']

    const [isOpen, setIsOpen] = useState('')

    const handleClickItem = (id: string) => {
        if (id != isOpen) {
            setIsOpen(id)
        } else {
            setIsOpen('')
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <h1 className={s.header__title}>Доступны для изучения</h1>
                <button className={s.header__button}>Хочу еще</button>
            </div>

            {
                list.map(current => (
                    <div key={current.id} className={classNames(s.item, {
                        [s.item_active]: isOpen === current.id
                    })}>
                        <div onClick={() => handleClickItem(current.id)} className={classNames(s.item__header, {
                            [s.item__header_active]: isOpen === current.id
                        })}>
                            <h2 className={s.item__title}>{current.name}</h2>
                            <p className={classNames(s.item__count, {
                                [s.item__count_all]: current.count === current.materials.length
                            })}>
                                {`${current.materials.length != current.count ? current.materials.length + ' ' + declOfNum(current.materials.length, names) : 'доступен весь'}`}
                            </p>
                            <svg className={classNames(s.item__arrow, {
                                [s.item__arrow_active]: isOpen === current.id
                            })} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 7.5L10 15.5L2 7.5" stroke="#252525" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className={classNames(s.item__info, {
                            [s.item__info_open]: isOpen === current.id
                        })}>
                            <div className={s.item__list} style={{ minHeight: 0 }}>
                                {
                                    current.name === 'Планы уроков' && current.materials.map(current => (
                                        <CardPlans id={current.id} name={current.name} free={current.free} time={current.time} img={current.img} />
                                    ))
                                }
                                {
                                    current.name === 'Чек-листы' && current.materials.map(current => (
                                        <CardCheck id={current.id} name={current.name} youtube={current.youtube} iTunes={current.iTunes} books={current.books} />
                                    ))
                                }
                                {
                                    current.name === 'Полезные статьи' && current.materials.map(current => (
                                        <CardArticle id={current.id} name={current.name} description={current.description}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};