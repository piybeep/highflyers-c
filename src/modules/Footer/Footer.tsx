import Link from 'next/link';
import Image from 'next/image';

import { FooterNav, FooterSupport } from '@/modules';

import { SOCIAL } from '@/constants';

import s from './Footer.module.scss';
import { infoViewKeys } from '@/types';

export function Footer({ isAuth, footerInfoView }: { isAuth: boolean, footerInfoView: Record<infoViewKeys, boolean> }) {
    return (
        <footer className={s.wrapper}>
            <div className={s.info}>
                <FooterNav footerInfoView={footerInfoView} isAuth={isAuth} />
                <div className={s.info__list}>
                    {SOCIAL.map((current) => (
                        <Link
                            key={current.id}
                            target='_blank'
                            href={current.link}
                        >
                            <Image
                                className={s.info__img}
                                src={current.img}
                                alt={''}
                                width={35}
                                height={35}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <FooterSupport />
        </footer>
    );
}
