'use client';

import { useSearchParams } from 'next/navigation';
import s from './TedTalksHeader.module.scss';
import {
    HeaderButton,
    HeaderCheckbox,
    HeaderText,
    HeaderTheme,
    HeaderTitle,
} from '@/components';
import { useMutateQuery } from '@/utils/mutateQueryString';

export function TedTalksHeader() {
    const searchParams = useSearchParams();

    const data = ['Грамматика', 'Части речи', 'Фонетика'];
    const { pushQueryString } = useMutateQuery();
    const resultData = data.map((current) => (
        <HeaderButton
            key={current}
            text={current}
            isActive={
                searchParams.get('list')?.includes(current) ? true : false
            }
            onClick={() => pushQueryString(current)}
        />
    ));

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <HeaderTitle text={'TedTalks'} />
            </div>
            <div className={s.info}>
                <HeaderTheme text={'Выбор темы'} />
                <HeaderCheckbox text={'Показать доступные'} />
                <div className={s.list}>{resultData}</div>
            </div>
            <div className={s.description}>
                <HeaderText
                    text={
                        'TedTalks - вдохновляющие лекции и истории от людей со всего мира, которые проводятся в рамках фонда TED. Мы предоставляем современные и красочные материалы, которые доступны в формате видео с заданиями к ним. Все это поможет для развития и отработки лексико-грамматических знаний, навыков и умений, что необходимо в процессе формирования коммуникативной компетенции обучающихся.'
                    }
                />
            </div>
        </div>
    );
}
