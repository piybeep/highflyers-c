'use client';

import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import { useUser } from '@/store';
import { NAVIGATION, PAGES_LINK } from '@/constants';

import s from './HeaderNav.module.scss';

export function HeaderNav({ isAuth }: { isAuth: boolean }) {
    return (
        <div className={s.menu}>
            {isAuth ? (
                <Link href={PAGES_LINK.MY_MATERIALS} className={s.menu__link}>
                    Мои материалы
                </Link>
            ) : (
                <Link href={PAGES_LINK.HOME} className={s.menu__link}>
                    Главная
                </Link>
            )}
            {NAVIGATION.map((menu_item) =>
                menu_item.type === 'link' ? (
                    <Link
                        key={menu_item.text}
                        href={menu_item.link}
                        className={s.menu__link}
                    >
                        {menu_item.text}
                        {menu_item.img && (
                            <Image
                                className={s.menu__img}
                                src={menu_item.img}
                                alt={''}
                                width={26}
                                height={9}
                            />
                        )}
                    </Link>
                ) : (
                    <div key={menu_item.text} className={s.menu__info}>
                        <Link
                            href={menu_item.link}
                            className={classNames(
                                s.menu__link,
                                s.menu__link_drop,
                            )}
                        >
                            {menu_item.text}
                        </Link>
                        <div className={s.info}>
                            <h2 className={s.info__header}>уровень</h2>
                            <div className={s.info__list}>
                                {menu_item.levels?.map((list_item, index) =>
                                    index % 2 != 0 ? (
                                        <div
                                            key={list_item.text}
                                            className={s.info__item}
                                        >
                                            <Link
                                                className={s.info__link}
                                                href={{
                                                    query: {
                                                        list: list_item.text,
                                                    },
                                                    pathname: menu_item.link,
                                                }}
                                            >
                                                {list_item.text}
                                            </Link>
                                            <div
                                                className={s.info__circle}
                                                style={{
                                                    width:
                                                        index === 1
                                                            ? index * 8
                                                            : index * 4,
                                                    height:
                                                        index === 1
                                                            ? index * 8
                                                            : index * 4,
                                                }}
                                            ></div>
                                        </div>
                                    ) : (
                                        <Link
                                            key={list_item.text}
                                            className={s.info__link}
                                            href={{
                                                query: {
                                                    list: list_item.text,
                                                },
                                                pathname: menu_item.link,
                                            }}
                                        >
                                            {list_item.text}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                ),
            )}
            <Link
                href={
                    isAuth
                        ? PAGES_LINK.PROFILE
                        : PAGES_LINK.LOGIN
                }
                className={s.menu__link}
            >
                Профиль
            </Link>
        </div>
    );
}
