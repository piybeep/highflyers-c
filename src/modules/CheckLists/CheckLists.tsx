'use client'

import { CardCheck } from '@/components';
import s from './CheckLists.module.scss'
import { CheckListCard } from '@/types';
import MDEditor from '@uiw/react-md-editor';
import { usePathname, useRouter } from 'next/navigation';
import { NotContent } from '../NotContent';

export function CheckLists({ checkLists, themes, userChecklists }: {
    checkLists: CheckListCard[],
    themes: string[],
    userChecklists: number[],
}) {
    const router = useRouter()
    const pathname = usePathname()
    const data = themes.map(theme => ({
        title: theme,
        description: checkLists.filter((item) => item?.theme?.title === theme)
            .map((desc) => desc?.theme?.description)
            .filter((value, index, array) => array.findIndex(v2 => (v2 === value)) === index).toString(),
        materials: checkLists.filter(item => item?.theme?.title === theme)
    })).filter(item => Object.keys(item.materials).length !== 0)

    return (
        <div className={s.wrapper}>
            {
                data.length > 0 && data ? data.map((current) => (
                    <div className={s.wrapper__item} key={current.title}>
                        <h2 className={s.title}>{current.title}</h2>
                        <MDEditor.Markdown className={s.description} source={current.description} />
                        <div className={s.list}>
                            {
                                current.materials.map(material => (
                                    <CardCheck
                                        key={material.title}
                                        open={() => {
                                            userChecklists?.includes(material.id)
                                                ? router.push(pathname + `?id=${material.id}&popup=open`, { scroll: false })
                                                : router.push(`${pathname}?popup=access`, { scroll: false })
                                        }}
                                        isAccess={!!userChecklists?.includes(material.id)}
                                        check_list_source={material.check_list_sources}
                                        title={material.title} />
                                ))
                            }
                        </div>
                    </div>
                ))
                    : <NotContent />
            }
        </div >
    );
};