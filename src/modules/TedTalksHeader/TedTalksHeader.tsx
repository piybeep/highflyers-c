'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import s from './TedTalksHeader.module.scss'
import classNames from 'classnames'
import { useCallback } from 'react'

export function TedTalksHeader() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const data = ['Грамматика', 'Части речи', 'Фонетика']

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const resultData = data.map(current => (
        <button key={current} className={classNames(s.list__button, {
            [s.list__button_active]: searchParams.get('list') === current
        })} onClick={() => router.push(pathname + '?' + createQueryString('list', current))}>{current}</button>
    ))

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}>TedTalks</h2>
            <div className={s.info}>
                <h3 className={s.info__title}>Выбор темы</h3>
                <label className={s.info__label}>
                    <input type='checkbox' className={s.info__input} />
                    <span className={s.info__checkbox}></span>
                    <p className={s.info__text}>Показать доступные</p>
                </label>
                <div className={s.list}>
                    {resultData}
                </div>
            </div>
            <p className={s.description}>TedTalks - вдохновляющие лекции и истории от людей со всего мира, которые проводятся в рамках фонда TED. Мы предоставляем современные и красочные материалы, которые доступны в формате видео с
                заданиями к ним. Все это поможет для развития и отработки лексико-грамматических знаний, навыков и умений, что необходимо в процессе формирования коммуникативной компетенции обучающихся.</p>
        </div>
    );
};