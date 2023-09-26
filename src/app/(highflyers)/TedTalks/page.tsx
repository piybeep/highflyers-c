import { HeaderItem, TedTalksList } from '@/modules';
import s from './page.module.scss';
import { dataTedTalks } from '@/constants';

export default function page() {
    const res = dataTedTalks;

    const data = ['Грамматика', 'Части речи', 'Фонетика'];

    return (
        <div className={s.wrapper}>
            <HeaderItem
                data={data}
                title={'TedTalks'}
                theme='Выбор темы'
                checkbox='Показать доступные'
                text={'TedTalks - вдохновляющие лекции и истории от людей со всего мира, которые проводятся в рамках фонда TED. Мы предоставляем современные и красочные материалы, которые доступны в формате видео с заданиями к ним. Все это поможет для развития и отработки лексико-грамматических знаний, навыков и умений, что необходимо в процессе формирования коммуникативной компетенции обучающихся.'}
            />
            <TedTalksList data={res} />
        </div>
    );
}
