import { CardTedTalks } from '@/components';
import s from './TedTalksList.module.scss'
import { TedTalksProps } from './TedTalksList.types';

export function TedTalksList({ data }: { data: TedTalksProps[] }) {
    const arrayTheme = data.map(i => i.theme).filter((currentTheme, index, currentArray) => currentArray.indexOf(currentTheme) === index)
    const arrayList = arrayTheme.map(currentTheme => ({ title: currentTheme, list: data.filter(current => current.theme === currentTheme) }))

    return (
        <div className={s.wrapper}>
            <div className={s.list}>
                {
                    arrayList.map(current => (
                        <div key={current.title} className={s.item}>
                            <h2 className={s.item__title}>{current.title}</h2>
                            <div className={s.item__list}>
                                {
                                    current.list.map(current => (
                                        <CardTedTalks key={current.id} video={current.preview} title={current.name} time={current.read_time} link={'#'} />
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