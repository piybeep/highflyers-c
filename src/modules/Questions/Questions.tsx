import Image from 'next/image';

import classNames from 'classnames';

import { GradientLink, Title } from '@/components';
import { CHAT_LIST } from '@/constants/chat';

import img from '../../../public/img/questions/questionsImg.png';

import s from './Questions.module.scss';
import { PAGES_LINK } from '@/constants';

export function Questions() {
    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <Image
                    className={s.info__img}
                    src={img.src}
                    alt={'Картинка'}
                    width={400}
                    height={400}
                />
                <h2 className={s.info__title}>Личный профиль</h2>
                <p className={s.info__description}>
                    После авторизации станет доступно большинство функций
                    Highflyers.
                </p>
                <GradientLink
                    text={'Авторизоваться'}
                    href={PAGES_LINK.LOGIN}
                    icon={'door'}
                    borderRadius={12}
                />
            </div>
            <div className={s.chat}>
                <Title text={'Частые вопросы'} />
                <div className={s.chat__list}>
                    {CHAT_LIST.map((current, index) => (
                        <h3
                            key={current}
                            className={classNames(
                                s.chat__item,
                                index % 2
                                    ? s.chat__item_left
                                    : s.chat__item_right,
                            )}
                        >
                            {current}
                        </h3>
                    ))}
                </div>
            </div>
        </div>
    );
}
