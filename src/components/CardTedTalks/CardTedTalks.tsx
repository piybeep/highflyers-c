import Image from 'next/image';
import Link from 'next/link';

import s from './CardTedTalks.module.scss'
import { CardTedTalksProps } from './CardTedTalks.types';

export function CardTedTalks({ img, title, time, link }: CardTedTalksProps) {
    return (
        <Link href={link} className={s.wrapper}>
            <Image className={s.img} src={img} alt={'Картинка'} width={433} height={242} />
            <div className={s.info}>
                <h2 className={s.info__title}>{title}</h2>
                <p className={s.info__time}>{time}</p>
            </div>
        </Link>
    );
};