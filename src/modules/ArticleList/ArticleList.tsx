'use client'

import { CardArticle } from '@/components';
import s from './ArticleList.module.scss';
import { ArticleProps } from '@/types';

export function ArticleList({ articlesData, articlesThemes }: { articlesData: ArticleProps[], articlesThemes: string[] }) {
    const dataFilter = articlesThemes.map((theme: string) => ({
        theme: theme,
        materials: articlesData.filter(article => article?.article_type?.type === theme)
    })).filter(item => Object.keys(item.materials).length !== 0)

    return (
        <div className={s.list}>
            {dataFilter?.map((current: { theme: string, materials: ArticleProps[] }) => (
                <div key={current.theme} className={s.item}>
                    <h2 className={s.item__title}>{current.theme}</h2>
                    <div className={s.item__list}>
                        {current.materials.map((current) => (
                            <CardArticle
                                href='articles'
                                key={current.id}
                                id={current.id}
                                name={current.title}
                                description={current.description}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
