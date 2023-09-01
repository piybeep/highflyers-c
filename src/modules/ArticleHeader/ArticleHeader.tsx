'use client'

import { HeaderButton, HeaderSubtitle, HeaderText, HeaderTheme, HeaderTitle } from '@/components';
import s from './ArticleHeader.module.scss'
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useMutateQuery } from '@/utils/mutateQueryString';

export function ArticleHeader() {
    const data = ['Разговорные темы и лексика', 'Времена', 'Части речи', 'Еще тема']

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const { mutateQueryString } = useMutateQuery()

    const resultData = data.map(current => (
        <HeaderButton
            key={current}
            text={current}
            isActive={searchParams.get('list')?.includes(current) ? true : false}
            onClick={() => router.push(pathname + '?' + mutateQueryString({
                name: 'list',
                value: current
            }), { scroll: false })}
        />
    ))

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <HeaderTitle text={'Полезные статьи'} />
                <HeaderSubtitle text={'Бесплатные материалы'} />
            </div>
            <div className={s.info}>
                <HeaderTheme text={'Выбор темы'} />
                <div className={s.info__list}>
                    {resultData}
                </div>
            </div>
            <div className={s.text}>
                <HeaderText text={'В данном разделе мы публикуем разные интересные и обучающие статьи, новости и даже шуточные истории на английском языке разных уровней, создаем глоссарий, изучаем большое количество новых слов в контексте, а также делаем упражнения на отработку лексических единиц.'} />
            </div>
        </div>
    );
};