import { dataLearning } from "@/constants";
import { HeaderItem, LessonPlansList } from "@/modules";

export default function page() {

    const res = dataLearning

    const data = ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'C2']

    return (
        <>
            <HeaderItem
                data={data}
                title={"Планы уроков"}
                subtitle="Материал для преподавателей"
                theme="Выбор уровня"
                checkbox="Показать доступные"
                text={"Материалы для преподавателей и педагогов, чтобы проводить уроки и курсы еще эффективнее и интереснее. Структура уроков, темы занятий, план проведения лекций и многое другое."}
            />
            <LessonPlansList data={res} />
        </>
    );
};