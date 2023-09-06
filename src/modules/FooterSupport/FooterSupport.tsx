import Image from 'next/image';
import Link from 'next/link';

import { POLICY, SUPPORT } from '@/constants';
import s from './FooterSupport.module.scss';

4;

export function FooterSupport() {
    return (
        <div className={s.support}>
            <div className={s.support__info}>
                <div className={s.support__email}>
                    <h2 className={s.support__title}>Свяжитесь с нами</h2>
                    <Link
                        className={s.support__link}
                        href='mailto:support@mail.com'
                    >
                        support@mail.com
                    </Link>
                </div>
                <div className={s.support__payment}>
                    <h2 className={s.support__title}>Способы оплаты</h2>
                    <div className={s.support__list}>
                        {SUPPORT.map((current) => (
                            <Image
                                key={current.id}
                                src={current.img}
                                alt={''}
                                className={s.support__img}
                                width={70}
                                height={30}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className={s.support__policy}>
                <div className={s.support__items}>
                    {POLICY.map((current) => (
                        <Link
                            key={current.text}
                            href={current.link}
                            className={s.support__item}
                        >
                            {current.text}
                        </Link>
                    ))}
                </div>
                <h2 className={s.support__piybeep}>
                    Сделано в студии{' '}
                    <Link
                        href='https://piybeep.com'
                        className={s.support__piybeep_link}
                        target='_blank'
                    >
                        Piybeep
                    </Link>
                </h2>
            </div>
        </div>
    );
}
