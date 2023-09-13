'use client'

import { ListExamsProps } from './ListExams.types';
import s from './ListExams.module.scss'
import { CardExams } from '@/components';
import classNames from 'classnames';

export function ListExams({ list }: ListExamsProps) {
    const arrayGroup = list
        .map((i) => ({ group: i.group, tag: i.tag }))
        .filter((v, i, a) => a.findIndex(v2 => (v2.group === v.group)) === i)

    const arrayList = arrayGroup.map((currentGroup) => ({
        group: currentGroup.group,
        tag: currentGroup.tag,
        list: list.filter((current) => current.group === currentGroup.group).sort((a, b) => a.title.localeCompare(b.title)),
    })).sort((a, b) => a.group.localeCompare(b.group))

    return (
        <div className={s.wrapper}>
            {
                arrayList.map(current => (
                    <div key={current.group} className={s.info}>
                        <div className={s.info__header} id={current.group}>
                            <h2 className={s.info__title}>{current.group}</h2>
                            <p className={classNames(s.info__subtitle, {
                                [s.info__subtitle_write]: current.tag === 'Письменная часть',
                                [s.info__subtitle_verbal]: current.tag === 'Устная часть',
                            })}>{current.tag}</p>
                        </div>
                        <div className={s.info__list}>
                            {
                                current.list.map(current => (
                                    <CardExams key={current.title} id={current.title} title={current.title} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};