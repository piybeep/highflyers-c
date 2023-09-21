'use client'

import { HeaderButton, HeaderSubtitle, HeaderText, HeaderTheme, HeaderTitle } from '@/components';
import { useSearchParams } from 'next/navigation';
import { useMutateQuery } from '@/utils/mutateQueryString';

import s from './LessonPlansHeader.module.scss'

export function LessonPlansHeader() {
    const data = ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'C2']

    const searchParams = useSearchParams();
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
            <div className={s.header}>
                <HeaderTitle text={'Планы уроков'} />
                <HeaderSubtitle text={'Материал для преподавателей'} />
            </div>
            <div className={s.info}>
                <HeaderTheme text={'Выбор уровня'} />
                <div className={s.info__list}>{resultData}</div>
            </div>
            <div className={s.text}>
                <HeaderText
                    text={
                        'Материалы для преподавателей и педагогов, чтобы проводить уроки и курсы еще эффективнее и интереснее. Структура уроков, темы занятий, план проведения лекций и многое другое.'
                    }
                />
            </div>
        </div>
    );
};