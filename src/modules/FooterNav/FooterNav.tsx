'use client';

import classNames from 'classnames';
import Link from 'next/link';

import { NAVIGATION, PAGES_LINK } from '@/constants';

import s from './FooterNav.module.scss';
import { infoViewKeys } from '@/types';
import { CustomLink, CustomLinkDrop } from './components';

export function FooterNav({ isAuth, footerInfoView }: { isAuth: boolean, footerInfoView: Record<infoViewKeys, boolean> }) {
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
                NAVIGATION.map(menu_item => footerInfoView[menu_item.text as infoViewKeys] && (
                    menu_item.type === 'link'
                        ? <CustomLink key={menu_item.text} text={menu_item.text} link={menu_item.link} />
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
                Профиль
            </Link>
        </div>
    );
}
