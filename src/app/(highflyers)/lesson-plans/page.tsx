import { dataLearning } from "@/constants";
import { HeaderItem, LessonPlansList, PopupContent } from "@/modules";
import api from "@/utils/api";
import axios from "axios";
import { cookies } from "next/headers";

export default async function LessonPlansPage({ searchParams }: { searchParams: any }) {
    // Вывод чекбокса - его значение показать доступные
    let checkboxValue = searchParams.checkbox && Boolean(searchParams.checkbox.replace(',', ''))
    // Вывод чекбокса - его значение показать доступные

    // Запрос на взятие пользователя
    const token = cookies().get('token')?.value
    const resUser = await axios.get(`${process.env.NEXT_PUBLIC_HOST}users/me?populate=*`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => console.error(error))
    // Запрос на взятие пользователя

    // Для взятие всех карточек по параметрам в query
    const qs = require('qs')
    const queryLearning = qs.stringify({
        filters: {
            level: {
                $in: searchParams?.list && searchParams?.list?.split(',')
            },
        },
    }, {
        encodeValuesOnly: true,
    });
    // Для взятие всех карточек по параметрам в query

    // Для взятия карточек, которые либо бесплатные, либо доступные пользователю
    const queryLearningBuyOrFree = qs.stringify({
        filters: {
            $or: [
                {
                    id: {
                        $in: resUser?.lesson_plans?.map((i: any) => i.id) ?? undefined
                    }
                },
                {
                    isFree: true
                }
            ]
        },
    }, {
        encodeValuesOnly: true,
    });
    // Для взятия карточек, которые либо бесплатные, либо доступные пользователю

    const [resLessonPlans, resLessonPlansLevels] = await Promise.all([
        // Взятие всех планов уроков (карточек)
        api.get(`lesson-plans?populate=*&${queryLearning}&${checkboxValue && queryLearningBuyOrFree}`)
            .then(res => res.data.data)
            .catch(error => console.error(error)),
        // Взятие всех планов уроков (карточек)

        // Взятие всех уровней планов уроков
        api.get(`lesson-plans?populate=*&${checkboxValue && queryLearningBuyOrFree}`)
            .then(res => res.data.data
                .map((i: any) => i.level)
                .filter((v: any, i: any, a: any[]) => a.findIndex(v2 => (v2 === v)) === i)
                .sort((a: string, b: string) => a.localeCompare(b)))
            .catch(error => console.error(error))
        // Взятие всех уровней планов уроков
    ])

    return (
        <>
            <PopupContent
                text={"Этот материал для вас пока не доступен. Чтобы его разблокировать - нужно оформить подписку."}
                link={"#"} />
            <HeaderItem
                data={resLessonPlansLevels}
                title={"Планы уроков"}
                subtitle="Материал для преподавателей"
                theme="Выбор уровня"
                checkbox="Показать доступные"
                text={"Материалы для преподавателей и педагогов, чтобы проводить уроки и курсы еще эффективнее и интереснее. Структура уроков, темы занятий, план проведения лекций и многое другое."}
            />
            <LessonPlansList
                userLessonPlansId={resUser?.lesson_plans?.map((i: any) => i.id)}
                levels={resLessonPlansLevels}
                data={resLessonPlans}
            />
        </>
    );
};