'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Material } from '@/types';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import classNames from 'classnames';

import check from '../../../public/svg/check.svg';
import s from './Materials.module.scss';
import { PAGES_LINK } from '@/constants';
import { useEffect, useState } from 'react';

import preloader from '../../../public/svg/preloader.svg';

export function Materials({ materials }: { materials: Material[] }) {
    const [isLoaded, setIsLoaded] = useState(false);

    const ending = ['материал', 'материала', 'материалов'];

    const numToEnding = (value: number) => {
        let n = Math.abs(value);
        n %= 100;
        if (n >= 5 && n <= 20) {
            return ending[2];
        }
        n %= 10;
        if (n === 1) {
            return ending[0];
        }
        if (n >= 2 && n <= 4) {
            return ending[1];
        }
        return ending[2];
    };

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={s.wrapper}>
            {isLoaded ? (
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 950: 2, 1300: 3 }}
                >
                    <Masonry columnsCount={3} gutter='20px'>
                        {materials.map((current) => (
                            <div
                                key={current.id}
                                style={{
                                    backgroundColor: `${
                                        current.acess > 0
                                            ? '#329C3022'
                                            : '#06F2'
                                    }`,
                                }}
                                className={s.item}
                            >
                                <div className={s.header}>
                                    <h2
                                        style={{
                                            color:
                                                current.acess > 0
                                                    ? '#329C30'
                                                    : '#06F',
                                        }}
                                        className={s.header__title}
                                    >
                                        {current.title}
                                    </h2>
                                    <p
                                        style={{
                                            color:
                                                current.acess > 0
                                                    ? '#329C30'
                                                    : '#06F',
                                        }}
                                        className={s.header__price}
                                    >
                                        {current.priceForOne.toLocaleString()} ₽
                                    </p>
                                </div>
                                <div className={s.items}>
                                    {current.list.map((current) => (
                                        <div
                                            key={current.id}
                                            className={s.items__info}
                                        >
                                            <p className={s.items__description}>
                                                {current.description}
                                            </p>
                                            <Image
                                                className={s.items__icon}
                                                src={check}
                                                alt=''
                                            />
                                        </div>
                                    ))}
                                </div>
                                {current.acess === current.total ? (
                                    <Link
                                        href={{
                                            pathname: PAGES_LINK.MY_MATERIALS,
                                            query: {
                                                material: `${current.id}`,
                                            },
                                        }}
                                        style={{ color: '#329C30' }}
                                        className={classNames(
                                            s.buttons__button,
                                            s.buttons__button_all,
                                        )}
                                    ></Link>
                                ) : current.acess > 0 ? (
                                    <div
                                        className={s.buttons}
                                        style={{ color: '#329C30' }}
                                    >
                                        <Link
                                            href={{
                                                pathname:
                                                    PAGES_LINK.MY_MATERIALS,
                                                query: {
                                                    material: `${current.id}`,
                                                },
                                            }}
                                            style={{ color: '#329C30' }}
                                            className={classNames(
                                                s.buttons__text,
                                                s.buttons__text_watch,
                                            )}
                                            data-count={`${
                                                current.acess
                                            } ${numToEnding(current.acess)}`}
                                        ></Link>
                                        <Link
                                            href={{
                                                pathname: PAGES_LINK.LEARNING,
                                            }}
                                            style={{
                                                backgroundColor: '#329C30',
                                            }}
                                            className={classNames(
                                                s.buttons__button,
                                                s.buttons__button_buy,
                                            )}
                                            data-text='Хочу ещё'
                                        ></Link>
                                    </div>
                                ) : current.total === 1 ? (
                                    <Link
                                        href={{ pathname: PAGES_LINK.BUY }}
                                        style={{ backgroundColor: '#06F' }}
                                        className={classNames(
                                            s.buttons__button,
                                            s.buttons__button_chapter,
                                        )}
                                    >
                                        Весь раздел за {current.priceForOne} ₽
                                    </Link>
                                ) : (
                                    <div
                                        className={s.buttons}
                                        style={{ borderColor: '#06F' }}
                                    >
                                        <Link
                                            href={{
                                                pathname:
                                                    PAGES_LINK.CHECK_LISTS,
                                            }}
                                            style={{ color: '#06F' }}
                                            className={classNames(
                                                s.buttons__text,
                                                s.buttons__text_checklist,
                                            )}
                                        >
                                            Каждый чек-лист за{' '}
                                            {current.priceForOne}
                                        </Link>
                                        <Link
                                            href={{ pathname: PAGES_LINK.BUY }}
                                            style={{ backgroundColor: '#06F' }}
                                            className={classNames(
                                                s.buttons__button,
                                                s.buttons__text_checklist,
                                            )}
                                        >
                                            <span
                                                className={
                                                    s.buttons__button_span
                                                }
                                            >
                                                Выгода{' '}
                                                {Math.round(
                                                    (100 /
                                                        current.priceForOne) *
                                                        (current.fullPrice /
                                                            current.total),
                                                )}{' '}
                                                %
                                            </span>
                                            Весь раздел за {current.fullPrice} ₽
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            ) : (
                // Пока тестовый preloader
                <Image
                    className={s.wrapper__preloader}
                    src={preloader}
                    alt={'Загрузчик'}
                />
            )}
        </div>
    );
}
