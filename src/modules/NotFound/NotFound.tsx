import Image from 'next/image';

import svg from '../../public/svg/notFound.svg'

import s from './NotFound.module.scss'
import Link from 'next/link';

export function NotFound() {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Страница недоступна</h1>
            <div className={s.info}>
                <p className={s.info__title}>4</p>
                <Image src={svg} alt={'Картинка'} className={s.info__img} />
                <p className={s.info__title}>4</p>
            </div>
            <Link href={'/'} className={s.link} >Перейти на главную</Link>
        </div>
    );
};