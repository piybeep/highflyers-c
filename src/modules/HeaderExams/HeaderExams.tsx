'use client'

import { usePathname } from 'next/navigation';

import { LinkExams } from '@/components';

import { HeaderExamsProps } from './HeaderExams.types';
import s from './HeaderExams.module.scss'
import classNames from 'classnames';

export function HeaderExams({ list, title, subtitle }: HeaderExamsProps) {
    const pathname = usePathname()

    let arrayList = list
        .filter((v, i, a) => a.findIndex(v2 => (v2.group === v.group)) === i)
        .map(arrayList => ({
            tag: arrayList.tag,
            // groups: list.filter(currentGroups => arrayList.tag === currentGroups.tag).filter((v, i, a) => a.findIndex(v2 => (v2.group === v.group)) === i)
            groups: list.filter(currentGroups => arrayList.tag === currentGroups.tag).filter((v, i, a) => a.findIndex(v2 => (v2.group === v.group)) === i).map(i => i.group)
        })).filter((v, i, a) => a.findIndex(v2 => (v2.tag === v.tag)) === i).sort((a, b) => a.tag.localeCompare(b.tag))

    const handleScrollTo = (scrollToElement: string) => {
        const getElement = document.getElementById(scrollToElement)
        getElement?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    }

    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <LinkExams link={pathname.replace('/', '')} />
                <h2 className={s.info__title}>{title}</h2>
                <p className={s.info__subtitle}>{subtitle}</p>
            </div>
            {arrayList?.map(current => (
                <div key={current.tag} className={s.groups}>
                    <h3 className={classNames(s.groups__title, {
                        [s.groups__title_write]: current.tag === 'Письменная часть',
                        [s.groups__title_verbal]: current.tag === 'Устная часть'
                    })}>{current.tag}</h3>
                    <div className={s.groups__list}>
                        {
                            current.groups.map((current: any) => (
                                <button onClick={() => handleScrollTo(current)} key={current} className={s.groups__button}>{current}</button>
                            ))
                        }
                    </div>
                </div>
            ))
            }
        </div>
    );
};