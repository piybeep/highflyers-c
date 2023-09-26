import { ArticleList, HeaderItem } from '@/modules';
import s from './page.module.scss';

export default function page() {
    const data = [
        'Разговорные темы и лексика',
        'Времена',
        'Части речи',
        'Еще тема',
    ];

    return (
        <div className={s.wrapper}>
            <HeaderItem
                data={data}
                title={'Полезные статьи'}
                text={'В данном разделе мы публикуем разные интересные и обучающие статьи, новости и даже шуточные истории на английском языке разных уровней, создаем глоссарий, изучаем большое количество новых слов в контексте, а также делаем упражнения на отработку лексических единиц.'}
                subtitle='Бесплатные материалы'
                theme='Выбор темы'
            />
            <ArticleList />
        </div>
    );
}
