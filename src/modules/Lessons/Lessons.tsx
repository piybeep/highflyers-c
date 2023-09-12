import { Title } from '@/components';
import s from './Lessons.module.scss';
import Image from 'next/image';
import { LESSON__CHOISE } from '@/constants';

export function Lessons() {
    return (
        <div className={s.wrapper}>
            <Title text={'Для чего подойдут занятия?'} />
            <div className={s.list}>
                {LESSON__CHOISE.map((current) => (
                    <div key={current.title} className={s.item}>
                        <Image
                            className={s.item__img}
                            width={256}
                            height={230}
                            src={current.img}
                            alt={'Картинка'}
                        />
                        <div className={s.item__info}>
                            <h3 className={s.item__title}>{current.title}</h3>
                            <p className={s.item__description}>
                                {current.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
