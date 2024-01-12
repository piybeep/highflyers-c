'use client'

import { CardCheck } from '@/components';
import s from './CheckLists.module.scss'
import { CheckListsProps } from '@/types';
import MDEditor from '@uiw/react-md-editor';
import { usePathname, useRouter } from 'next/navigation';

export function CheckLists({ checkLists, themes }: {
    checkLists: any,
    themes: string[],
}) {
    const router = useRouter()
    const pathname = usePathname()
    const data = themes.map(theme => ({
        title: theme,
        description: checkLists.filter((item: any) => item.theme.title === theme)
            .map((desc: any) => desc.theme.description)
            .filter((value: any, index: any, array: any[]) => array.findIndex(v2 => (v2 === value)) === index).toString(),
        materials: checkLists.filter((item: any) => item.theme.title === theme)
    })).filter(item => Object.keys(item.materials).length !== 0)

    return (
        <div className={s.wrapper}>
            {
                data.map((current: CheckListsProps) => (
                    <div className={s.wrapper__item} key={current.title}>
                        <h2 className={s.title}>{current.title}</h2>
                        <MDEditor.Markdown className={s.description} source={current.description} />
                        <div className={s.list}>
                            {
                                current.materials.map(material => (
                                    <CardCheck
                                        open={() => router.push(pathname + `?id=${material.id}&popup=open`)}
                                        youtube={material.check_list_sources.map(i => i.type).includes('YouTube-каналы')}
                                        iTunes={material.check_list_sources.map(i => i.type).includes('Подкасты (iTunes)')}
                                        books={material.check_list_sources.map(i => i.type).includes('Книги')}
                                        key={material.title}
                                        name={material.title} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div >
    );
};