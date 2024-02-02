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

    // Взятие доступных карточек обучения
    const userLearningLevel = resUser.level
    const queryLearning = qs.stringify({
        filters: {
            $or: [
                {
                    level: userLearningLevel
                },
                {
                    isFree: true
                }
            ]
        }
    })
    // Взятие доступных карточек обучения

    // Взятие id доступных у пользователя чек-листов
    const userCheckListId = resUser.check_lists.map((i: any) => i.id)
    const queryCheckList = qs.stringify({
        filters: {
            id: userCheckListId
        }
    })

    const [resLessonPlans, resCheckLists, resArticles, resCountLessonPlans, resCountCheckLists, resLearning, resLearningCount] = await Promise.all([
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

        // Взятие обучение по карточкам
        api.get(`cards?populate=*&${queryLearning}`)
            .then(res => res.data)
            .catch(error => console.error(error)),

        api.get(`cards?populate=*`)
            .then(res => res.data)
            .catch(error => console.error(error))
    ])

    const materials = [
        {
            name: 'Обучение',
            count: resLearningCount.meta.pagination.total,
            list: resLearning.data
        },
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
    ]

    return <MyMaterials list={materials} />;
}
