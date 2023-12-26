import { ArticleList, HeaderItem } from '@/modules';
import s from './page.module.scss';
import api from '@/utils/api';

export default async function page({ searchParams }: { searchParams: any }) {
    let listValues = searchParams.list &&
        searchParams.list
            .split(',')
            .filter((theme: string) => theme != '')
            .map((theme: string) => 'filters[article_type][type][$in]=' + theme)
            .join('&')

    const [resArticles, resArticlesThemes] = await Promise.all([
        // Взятие карточек
        api.get(`articles?populate=*&${listValues}`).then(res => res.data.data.filter((item: any) => item.article_type != null)),
        // Взятие карточек

        // Взятие тем у карточек
        api.get(`articles?populate=*`).then(res => res.data.data
            .filter((i: any) => i.article_type != null)
            .map((i: any) => i.article_type?.type)
            .filter((item: any, pos: any, self: string | any[]) => self.indexOf(item) == pos))
        // Взятие тем у карточек
    ])

    return (
        <div className={s.wrapper}>
            <HeaderItem
                data={resArticlesThemes}
                title={'Полезные статьи'}
                text={'В данном разделе мы публикуем разные интересные и обучающие статьи, новости и даже шуточные истории на английском языке разных уровней, создаем глоссарий, изучаем большое количество новых слов в контексте, а также делаем упражнения на отработку лексических единиц.'}
                subtitle='Бесплатные материалы'
                theme='Выбор темы'
            />
            <ArticleList articlesThemes={resArticlesThemes} articlesData={resArticles} />
        </div>
    );
}
