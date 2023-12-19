import { dataLearning } from "@/constants";
import { HeaderItem, LessonPlansList } from "@/modules";
import api from "@/utils/api";

export default async function page({ searchParams }: { searchParams: any }) {
    // Вывод чекбокса - его значение
    let checkboxValue = searchParams.checkbox && Boolean(searchParams.checkbox.replace(',', ''))
    // Вывод чекбокса - его значение

    // Вывод значений А1, А2, и.т.д 
    let listValues = searchParams.list &&
        searchParams.list
            .split(',')
            .filter((level: string) => level != '')
            .map((level: string) => 'filters[level][$in]=' + level)
            .join('&')
    // Вывод значений А1, А2, и.т.д 

    // Запрос к базе для взятия нужных нам карточек, и есть сортировка отдельно чекбокса и отдельно значений из listValues
    const lessonPlansData = await api.get(`lesson-plans?populate=*&${checkboxValue && 'filters[isFree][$eq]=true'}&${listValues}`)
        .then(res => res.data.data)
    // Запрос к базе для взятия нужных нам карточек, и есть сортировка отдельно чекбокса и отдельно значений из listValues

    // Запрос к базе для взятия всех level-ов у карточек
    const lessonPlansLevels = await api.get(`lesson-plans?${checkboxValue && 'filters[isFree][$eq]=true'}`).then(res => res.data.data)
    const levels = lessonPlansLevels
        .map((i: any) => i.level)
        .filter((item: any, pos: any, self: string | any[]) => self.indexOf(item) == pos)
        .sort((a: string, b: string) => a.localeCompare(b))
    // Запрос к базе для взятия всех level-ов у карточек
    return (
        <>
            <HeaderItem
                data={levels}
                title={"Планы уроков"}
                subtitle="Материал для преподавателей"
                theme="Выбор уровня"
                checkbox="Показать доступные"
                text={"Материалы для преподавателей и педагогов, чтобы проводить уроки и курсы еще эффективнее и интереснее. Структура уроков, темы занятий, план проведения лекций и многое другое."}
            />
            <LessonPlansList
                levels={levels}
                data={lessonPlansData} />
        </>
    );
};