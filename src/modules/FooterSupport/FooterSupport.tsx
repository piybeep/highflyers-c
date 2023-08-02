import Image from 'next/image';

import { POLICY, SUPPORT } from '@/constants';

import s from './FooterSupport.module.scss'

export function FooterSupport() {
    return (
        <div className={s.support}>
            <div className={s.support__info}>
                <div className={s.support__email}>
                    <h2 className={s.support__title}>Свяжитесь с нами</h2>
                    <a className={s.support__link} href="mailTo:support@mail.com">support@mail.com</a>
                </div>
                <div className={s.support__payment}>
                    <h2 className={s.support__title}>Способы оплаты</h2>
                    <div className={s.support__list}>
                        {SUPPORT.map(current => (
                            <Image key={current.id} src={current.img} alt={"Картинка"} className={s.support__img} width={70} height={30} />
                        ))}
                    </div>
                </div>
            </div>

            <div className={s.support__policy}>
                <div className={s.support__items}>
                    {POLICY.map(current => (
                        <a key={current.id} href={current.link} className={s.support__item}>{current.text}</a>
                    ))}
                </div>
                <h2 className={s.support__piybeep}>Сделано в студии <a href="https://piybeep.com" className={s.support__piybeep_link} target='_blank'>Piybeep</a></h2>
            </div>
        </div>
    );
}
