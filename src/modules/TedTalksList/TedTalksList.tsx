import { CardTedTalks } from '@/components';
import s from './TedTalksList.module.scss'

import img from '../../../public/img/cover.png'

export function TedTalksList() {

    const data = [
        {
            title: 'Грамматика',
            materials: [
                {
                    video: img.src,
                    title: 'Правильные и неправильные глаголы',
                    time: '50 минут'
                },
                {
                    video: img.src,
                    title: 'Сравнение прилагательных',
                    time: '50 минут'
                },
                {
                    video: img.src,
                    title: 'Правильные и неправильные глаголы',
                    time: '50 минут'
                },
                {
                    video: img.src,
                    title: 'Сравнение прилагательных',
                    time: '50 минут'
                },
            ]
        },
        {
            title: 'Фонетика',
            materials: [
                {
                    video: img.src,
                    title: 'Правильные и неправильные глаголы',
                    time: '50 минут'
                },
                {
                    video: img.src,
                    title: 'Сравнение прилагательных',
                    time: '50 минут'
                },
            ]
        }
    ]

    return (
        <div className={s.wrapper}>
            <div className={s.list}>
                {
                    data.map(current => (
                        <div key={current.title} className={s.item}>
                            <h2 className={s.item__title}>{current.title}</h2>
                            <div className={s.item__list}>
                                {
                                    current.materials.map(current => (
                                        <CardTedTalks key={current.title} video={current.video} title={current.title} time={current.time} link={'#'} />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};