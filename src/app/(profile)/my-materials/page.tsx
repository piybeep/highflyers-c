import { LESSON_LIST } from '@/constants';
import { MyMaterials } from '@/modules';
import api from '@/utils/api';
import axios from 'axios';
import { cookies } from 'next/headers';

export const metadata = {
    title: 'Материалы - Higthflyers',
    description: 'Страница материалов',
};

export default async function page() {
    const res = await LESSON_LIST;

    const resUser = await axios.get(`${process.env.NEXT_PUBLIC_HOST}users/me?populate=*`, {
        headers: {
            Authorization: `Bearer ${cookies().get('token')?.value}`
        }
    })
        .then(res => res.data)
        .catch(error => console.error(error))

    // Взятие id доступных у пользователя планов уроков
    const userLessonPlansId = resUser.lesson_plans.map((i: any) => i.id)
    const qs = require('qs');
    const queryLessonPlans = qs.stringify({
        filters: {
            $or: [
                {
                    id: {
                        $in: userLessonPlansId,
                    },
                },
                {
                    isFree: true
                }
            ]
        },
    }, {
        encodeValuesOnly: true,
    });

    // Взятие id доступных у пользователя чек-листов
    const userCheckListId = resUser.check_lists.map((i: any) => i.id)
    const queryCheckList = qs.stringify({
        filters: {
            id: userCheckListId
        }
    })

    const [resLessonPlans, resCheckLists, resArticles, resCountLessonPlans, resCountCheckLists] = await Promise.all([
        api.get(`lesson-plans?populate=*&${queryLessonPlans}`)
            .then(res => res.data)
            .catch(error => console.error(error)),

        api.get(`check-lists?populate=*&${queryCheckList}`)
            .then(res => res.data)
            .catch(error => console.error(error)),

        api.get(`articles?populate=*`)
            .then(res => res.data)
            .catch(error => console.error(error)),

        // Взятие количества всего lesson-plans
        api.get(`lesson-plans`)
            .then(res => res.data.meta.pagination.total)
            .catch(error => console.error(error)),

        // Взятие количества всего lesson-plans
        api.get(`check-lists`)
            .then(res => res.data.meta.pagination.total)
            .catch(error => console.error(error)),
    ])

    const materials = [
        // Не уверен нужно ли обучение по карточкам, если нужно, то добавлю
        {
            name: 'Планы уроков',
            count: resCountLessonPlans,
            list: resLessonPlans.data
        },
        {
            name: 'Чек-листы',
            count: resCountCheckLists,
            list: resCheckLists.data
        },
        {
            name: 'Полезные статьи',
            count: resArticles.meta.pagination.total,
            list: resArticles.data
        },
        // Тут ещё tedTalks должны быть, но их ещё не делали
    ]

    return <MyMaterials list={materials} />;
}
