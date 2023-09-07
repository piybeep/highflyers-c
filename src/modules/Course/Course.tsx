import { Title } from '@/components';
import s from './Course.module.scss';
import { COURSE_LIST } from '@/constants/course';
import Link from 'next/link';

export function Course() {
    return (
        <div className={s.wrapper}>
            <Title text={'Какой курс подойдет вам?'} />
            <div className={s.list}>
                {COURSE_LIST.map((current) => (
                    <Link
                        className={s.link}
                        key={current.title}
                        href={current.href}
                    >
                        <h3 className={s.link__title}>{current.title}</h3>
                        <p className={s.link__description}>
                            {current.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
