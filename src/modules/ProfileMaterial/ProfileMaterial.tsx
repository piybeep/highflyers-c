'use client'

import Image from 'next/image';

import material from '../../public/svg/material.svg'
import check from '../../public/svg/check.svg'

import s from './ProfileMaterial.module.scss'
import classNames from 'classnames';

export function ProfileMaterial() {

    const data = [
        {
            id: 0,
            title: 'Обучение по карточкам',
            price: '4 899 ₽',
            color: '#329C30',
            background: 'rgba(50, 156, 48, 0.10)',
            list: [
                {
                    id: 0,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 1,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 2,
                    description: 'Обучение по уровням А1 - С2'
                }
            ],
            acess: 5,
            total: 5,
        },
        {
            id: 1,
            title: 'Планы уроков',
            price: '299 ₽',
            color: '#329C30',
            background: 'rgba(50, 156, 48, 0.10)',
            list: [
                {
                    id: 0,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 1,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 2,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 3,
                    description: 'Обучение по уровням А1 - С2'
                }
            ],
            acess: 2,
            total: 5,
        },
        {
            id: 2,
            title: 'Чек-листы',
            price: '99 ₽',
            priceForOne: 'Каждый чек-лист за 99 ₽',
            fullPrice: 'Весь раздел за 999 ₽',
            color: '#06F',
            discount: 'Выгода 17%',
            background: '#EDF8FF',
            list: [
                {
                    id: 0,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 1,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 2,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 3,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 4,
                    description: 'Обучение по уровням А1 - С2'
                }
            ],
            acess: 0,
            total: 5,
        },
        {
            id: 3,
            title: 'Ted talks',
            price: '99 ₽',
            priceForOne: 'Каждый материал за 299 ₽',
            fullPrice: 'Весь раздел за 2 499 ₽',
            color: '#06F',
            background: '#EDF8FF',
            discount: 'Выгода 18%',
            list: [
                {
                    id: 0,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 1,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 2,
                    description: 'Обучение по уровням А1 - С2'
                },
            ],
            acess: 0,
            total: 5,
        },
        {
            id: 4,
            title: 'ОГЭ',
            price: '99 ₽',
            fullPrice: 'Весь раздел за 1 999 ₽',
            color: '#06F',
            background: '#EDF8FF',
            list: [
                {
                    id: 0,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 1,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 2,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 3,
                    description: 'Обучение по уровням А1 - С2'
                },
            ],
            acess: 0,
            total: 5,
        },
        {
            id: 5,
            title: 'ЕГЭ',
            price: '99 ₽',
            fullPrice: 'Весь раздел за 1 999 ₽',
            color: '#06F',
            background: '#EDF8FF',
            list: [
                {
                    id: 0,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 1,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 2,
                    description: 'Обучение по уровням А1 - С2'
                },
                {
                    id: 3,
                    description: 'Обучение по уровням А1 - С2'
                },
            ],
            acess: 0,
            total: 5,
        }
    ]

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>
                Материалы для изучения
                <Image className={s.title__icon} src={material} alt={'Иконка'} />
            </h2>
            <div className={s.list}>
                {data.map(current => (
                    <div key={current.id} style={{ backgroundColor: `${current.background}` }} className={s.item}>
                        <div className={s.header}>
                            <h2 style={{ color: `${current.color}` }} className={s.header__title}>{current.title}</h2>
                            <p style={{ color: `${current.color}` }} className={s.header__price}>{current.price}</p>
                        </div>
                        <div className={s.items}>
                            {current.list.map(current => (
                                <div key={current.id} className={s.items__info}>
                                    <p className={s.items__description}>{current.description}</p>
                                    <Image className={s.items__icon} src={check} alt='Иконка' />
                                </div>
                            ))}
                        </div>
                        <div className={s.buttons}>
                            {
                                current.acess === current.total
                                && <button style={{ color: `${current.color}`, borderColor: `${current.color}` }} className={s.buttons__all}>Доступен весь</button>
                            }
                            {
                                current.acess != current.total && !current.fullPrice && !current.priceForOne
                                &&
                                <div style={{ borderColor: `${current.color}` }} className={s.buttons__info}>
                                    <p style={{ color: current.color }} className={s.buttons__text}>Доступно {current.total - current.acess} материала</p>
                                    <button style={{ backgroundColor: current.color }} className={s.buttons__acess}>Хочу ещё</button>
                                </div>
                            }
                            {
                                current.fullPrice && current.priceForOne
                                &&
                                <div style={{ borderColor: current.color }} className={s.buttons__info}>
                                    <p style={{ color: current.color }} className={s.buttons__text}>{current.priceForOne}</p>
                                    <button style={{ backgroundColor: current.color }} className={s.buttons__chapter}>
                                        <span className={s.buttons__discount}>{current.discount}</span>
                                        {current.fullPrice}
                                    </button>
                                </div>
                            }
                            {
                                current.fullPrice && !current.priceForOne
                                &&
                                <button style={{ backgroundColor: current.color }} className={s.buttons__full}>{current.fullPrice}</button>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};