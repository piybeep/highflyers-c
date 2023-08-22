import { CardTedTalks } from '@/components';
import s from './TedTalksList.module.scss'

export function TedTalksList() {

    const data = [
        {
            title: 'Грамматика',
            materials: [
                {
                    video: '',
                    title: 'Правильные и неправильные глаголы',
                    time: '50 минут'
                },
                {
                    video: '',
                    title: 'Сравнение прилагательных',
                    time: '50 минут'
                },
            ]
        },
        {
            title: 'Фонетика',
            materials: [
                {
                    video: '',
                    title: 'Правильные и неправильные глаголы',
                    time: '50 минут'
                },
                {
                    video: '',
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
                        <div className={s.item}>
                            <h2 className={s.item__title}>{current.title}</h2>
                            <div className={s.item__list}>
                                {
                                    current.materials.map(current => (
                                        <CardTedTalks video={current.video} title={current.time} time={current.time} link={'#'} />
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