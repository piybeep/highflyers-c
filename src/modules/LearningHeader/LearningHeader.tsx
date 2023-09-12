'use client'

import { useSearchParams } from 'next/navigation';

import { useMutateQuery } from '@/utils/mutateQueryString';
import { HeaderButton, HeaderCheckbox, HeaderText, HeaderTheme, HeaderTitle } from '@/components';

import s from './LearningHeader.module.scss'

export function LearningHeader() {
    const searchParams = useSearchParams()

    const data = ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'C2']
    const { pushQueryString } = useMutateQuery()
    const resultData = data.map(current => (
        <HeaderButton
            key={current}
            text={current}
            isActive={searchParams.get('list')?.includes(current) ? true : false}
            onClick={() => pushQueryString(current)}
        />
    ))

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <HeaderTitle text={'Обучение по карточкам'} />
            </div>
            <div className={s.info}>
                <HeaderTheme text={'Выбор темы'} />
                <HeaderCheckbox text={'Показать доступные'} />
                <div className={s.list}>
                    {resultData}
                </div>
            </div>
            <div className={s.description}>
                <HeaderText text={'На компьютере, телефоне или любом другом устройстве - смотрите обучающие карточки, изучайте информацию, учите английский в том месте и в том темпе, в котором вам удобно.'} />
            </div>
        </div>
    );
};