'use client';

import classNames from 'classnames';

import s from './Header.module.scss';

import { Logo } from '@/components';
import { HeaderNav } from '@/modules';
import { PAGES_LINK } from '@/constants';
import Link from 'next/link';

export function Header() {
    return (
        <header className={s.wrapper}>
            <div className={s.info}>
                <div className={s.info__logo}>
                    <Logo position='row' />
                </div>
                <div className={s.info__buttons}>
                    <Link
                        href={PAGES_LINK.LOGIN}
                        className={classNames(
                            s.info__button,
                            s.info__button_signIn,
                        )}
                    >
                        Войти
                    </Link>
                    <Link
                        href={PAGES_LINK.REGISTER}
                        className={classNames(
                            s.info__button,
                            s.info__button_start,
                        )}
                    >
                        Начать!
                    </Link>
                </div>
            </div>
            <div className={s.nav}>
                <HeaderNav />
            </div>
        </header>
    );
}
