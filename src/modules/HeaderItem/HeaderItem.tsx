'use client'

import { HeaderButton, HeaderCheckbox, HeaderSubtitle, HeaderText, HeaderTheme, HeaderTitle } from '@/components';
import { useMutateQuery } from '@/utils/mutateQueryString';
import { useSearchParams } from 'next/navigation';

import s from './HeaderItem.module.scss'
import { HeaderItemProps } from './HeaderItem.types';

export function HeaderItem({ data, title, subtitle, theme, checkbox, text, }: HeaderItemProps) {
    const searchParams = useSearchParams()

    // const data = ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'C2']
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
                <HeaderTitle text={title} />
                {
                    subtitle &&
                    <HeaderSubtitle text={subtitle} />
                }
            </div>
            <div className={s.info}>
                {
                    theme &&
                    <HeaderTheme text={theme} />
                }
                {
                    checkbox &&
                    <HeaderCheckbox text={checkbox} />
                }
                <div className={s.list}>
                    {resultData}
                </div>
            </div>
            <div className={s.description}>
                <HeaderText text={text} />
            </div>
        </div>
    );
};