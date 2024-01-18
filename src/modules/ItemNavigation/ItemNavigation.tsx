'use client'

import s from './ItemNavigation.module.scss'
import { ButtonBack } from "@/components";
import { ArticlesProps } from '@/types';
import { useRouter } from "next/navigation";

export function ItemNavigation({ article }: { article: ArticlesProps }) {
    const router = useRouter()
    return (
        <div className={s.wrapper}>
            <ButtonBack text={"Назад"} onClick={() => router.back()} />
            <div className={s.info}>
                <h2 className={s.info__title}>{article.title}</h2>
                <div className={s.list}>
                    {
                        article?.tags?.map(tag => (
                            <p key={tag.id} className={s.list__theme}># {tag.name}</p>
                        ))
                    }
                </div>
            </div>
            <h2 className={s.info__text}>{article.text}</h2>
        </div>
    );
};