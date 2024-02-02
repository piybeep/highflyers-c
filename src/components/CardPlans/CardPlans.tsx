import Image from 'next/image';
import s from './CardPlans.module.scss';
import { CardPlansProps } from './CardPlans.types';
import classNames from 'classnames';
import Link from 'next/link';
import { MaterialLayout } from '@/layout';

export function CardPlans({ name, free, time, img, source, isBuy = false, target, level }: CardPlansProps) {
    // На всякий сделал из двух вариантов,
    // ибо я сам совершил ошибку, когда в базе были несколько русский значений,
    // поэтому решил доработать чтобы были ru и eng вариации
    const levelBgColor = {
        // eng
        A1: '#50BCFF',
        A2: '#25ACFF',
        B1: '#72D270',
        B2: '#329C30',
        C1: '#FF7F65',
        C2: '#E64F30',

        // ru
        А1: '#50BCFF',
        А2: '#25ACFF',
        В1: '#72D270',
        В2: '#329C30',
        С1: '#FF7F65',
        С2: '#E64F30',
    }

    return (
        <MaterialLayout>
            <div className={s.wrapper}>
                <div className={s.info}>
                    <h2 className={s.info__title}>{name}</h2>
                    <p className={s.info__time}>{time}</p>
                    <div className={s.description}>

                        <p
                            style={{ backgroundColor: levelBgColor[level] }}
                            className={s.description__level}
                        >
                            {level}
                        </p>
                        {(free || isBuy) && (
                            <p
                                className={classNames(s.description__status, {
                                    [s.description__status_free]: free,
                                })}
                            >
                                {free ? 'Бесплатно' : 'Доступно'}
                            </p>
                        )}
                    </div>

                    <Link href={source}
                        target={target}
                        className={s.info__button}
                        scroll={false}
                    >
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
        </MaterialLayout >
    );
}
