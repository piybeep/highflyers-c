'use client'

import { CardArticle } from '@/components';
import s from './ArticleList.module.scss';
import { ArticlesProps } from '@/types';

export function ArticleList({ articlesData, articlesThemes }: { articlesData: ArticlesProps[], articlesThemes: string[] }) {
    const dataFilter = articlesThemes.map(theme => ({
        theme: theme,
        materials: articlesData.filter(article => article?.article_type?.type === theme)
    })).filter(item => Object.keys(item.materials).length !== 0)

    return (
        <div className={s.list}>
            {dataFilter?.map(article => (
                <div key={article.theme} className={s.item}>
                    <h2 className={s.item__title}>{article.theme}</h2>
                    <div className={s.item__list}>
                        {article.materials.map((material) => (
                            <CardArticle
                                key={material.id}
                                href='articles'
                                id={material.id}
                                title={material.title}
                                description={material.description}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
