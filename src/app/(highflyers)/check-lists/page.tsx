'use client'

import { CheckLists, HeaderItem, PopupChecklists } from '@/modules';
import s from './page.module.scss';

import { CHECKLISTS_DATA, CheckListResourcesProps } from '@/constants';
import { useState } from 'react';

export default function CheckListPage() {
    const [literature, setLiterature] = useState<CheckListResourcesProps[] | undefined>()
    const list = CHECKLISTS_DATA;

    const data = ['Разговорные темы и лексика', 'Времена', 'Части речи', 'Еще тема']

    return (
        <div className={s.wrapper}>
            <HeaderItem
                data={data}
                theme='Выбор темы'
                checkbox='Показать доступные'
                title={'Чек-листы'}
                text={'То, что нужно, чтобы закреплять полученные знания. Тут вы найдете множество книг, аудиокниг, подкастов, YouTube-каналов, которые помогут погрузиться глубже в специфику английского и прокачают аудио-восприятие языка и словарный запас.'}
            />

            <CheckLists list={list} setLiterature={setLiterature} />

            <PopupChecklists data={literature} />
        </div>
    );
}
