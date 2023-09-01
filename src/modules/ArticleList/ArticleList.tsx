import { CardArticle } from '@/components';
import s from './ArticleList.module.scss'

export function ArticleList() {

    const data = [
        {
            title: 'Разговоные темы и лексика',
            materials: [
                {
                    id: '0',
                    name: 'Речевые обороты',
                    descrition: 'Речевые обороты являются важной частью языка и помогают вам стать более свободным и натуральным в общении на английском языке.'
                },
                {
                    id: '1',
                    name: 'Сравнение прилагательных',
                    descrition: 'Одним из самых эффективных способов расширить словарный запас является чтение на английском языке. Выбирайте книги, статьи, блоги или другие материалы по своим интересам'
                },
                {
                    id: '2',
                    name: 'Правильные и неправильные глаголы',
                    descrition: 'Наследие литературных произведений, которые могут быть интересны для изучения и наслаждения'
                },
                {
                    id: '3',
                    name: 'Сравнение прилагательных',
                    descrition: 'Изучение слов и фраз, связанных с путешествиями, странами, городами, достопримечательностями и культурой'
                },
            ]
        },
        {
            title: 'Времена',
            materials: [
                {
                    id: '0',
                    name: 'Правильные и неправильные глаголы',
                    descrition: 'Речевые обороты являются важной частью языка и помогают вам стать более свободным и натуральным в общении на английском языке.'
                },
                {
                    id: '1',
                    name: 'Сравнение прилагательных',
                    descrition: 'Речевые обороты являются важной частью языка и помогают вам стать более свободным и натуральным в общении на английском языке.'
                },
            ]
        }
    ]

    return (
        <div className={s.list}>
            {
                data.map(current => (
                    <div key={current.title} className={s.item}>
                        <h2 className={s.item__title}>{current.title}</h2>
                        <div className={s.item__list}>
                            {
                                current.materials.map(current => (
                                    <CardArticle key={current.id} id={current.id} name={current.name} description={current.descrition} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};