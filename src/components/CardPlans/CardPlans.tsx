import Image from 'next/image';
import s from './CardPlans.module.scss';
import { CardPlansProps } from './CardPlans.types';
import classNames from 'classnames';
import Link from 'next/link';
import { MaterialLayout } from '@/layout';

export function CardPlans({ name, free, time, img, source }: CardPlansProps) {
    return (
        <MaterialLayout>
            <div className={s.wrapper}>
                <div className={s.info}>
                    <h2 className={s.info__title}>{name}</h2>
                    <p className={s.info__time}>{time}</p>
                    {free && (
                        <p
                            className={classNames(s.info__status, {
                                [s.info__status_free]: free,
                            })}
                        >
                            {free ? 'Бесплатно' : 'Доступно'}
                        </p>
                    )}
                    <Link href={source} target='_blank' className={s.info__button}>
                        Читать
                    </Link>
                </div>
                <Image
                    width={260}
                    height={250}
                    className={s.img}
                    src={img}
                    alt={'Картинка'}
                />
            </div>
        </MaterialLayout>
    );
}
