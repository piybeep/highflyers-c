'use client';

import classNames from 'classnames';
import Link from 'next/link';

import { NAVIGATION, PAGES_LINK } from '@/constants';

import s from './FooterNav.module.scss';

export function FooterNav({ isAuth }: { isAuth: boolean }) {
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
                        <div className={s.list}>
                            {menu_item.levels?.map((list_item) => (
                                <Link
                                    key={list_item.text}
                                    className={s.list__link}
                                    href={{
                                        query: { list: list_item.text },
                                        pathname: menu_item.link,
                                    }}
                                >
                                    {list_item.text}
                                </Link>
                            ))}
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
