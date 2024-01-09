'use client';

import Link from 'next/link';

import { NAVIGATION, PAGES_LINK } from '@/constants';

import { CustomLink, CustomLinkDrop } from './components';

import s from './HeaderNav.module.scss';
import { headerInfoViewKeys } from '@/types';

export function HeaderNav({ isAuth, headerInfoView }: { isAuth: boolean, headerInfoView: Record<headerInfoViewKeys, boolean> }) {
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
            {
                NAVIGATION.map(menu_item => headerInfoView[menu_item.text as headerInfoViewKeys] && (
                    menu_item.type === 'link'
                        ? <CustomLink key={menu_item.text} text={menu_item.text} link={menu_item.link} img={menu_item.img} />
                        : <CustomLinkDrop key={menu_item.text} text={menu_item.text} link={menu_item.link} levels={menu_item.levels} />
                ))
            }
            <Link
                href={
                    isAuth
                        ? PAGES_LINK.PROFILE
                        : PAGES_LINK.LOGIN
                }
                className={s.menu__link}
            >
                {isAuth ? 'Профиль' : 'Войти'}
            </Link>
        </div>
    );
}