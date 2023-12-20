import { dataLearning } from "@/constants/data";
import { HeaderItem, LearningList } from "@/modules";

import s from './page.module.scss';

import api from "@/utils/api";

export default async function page({ searchParams }: { searchParams: any }) {

    // Взятие level-ов из query
    const listLevels = searchParams.list &&
        searchParams.list
            .split(',')
            .filter((level: string) => level != '')
            .map((level: string) => 'filters[level][$in]=' + level)
            .join('&')
    // Взятие level-ов из query

    // Взятие чекбокса из query
    let checkboxValue = searchParams.checkbox && Boolean(searchParams.checkbox.replace(',', ''))
    // Взятие чекбокса из query

    // Взятие карточек из базы
    const dataCardsFilters = await api.get(`cards?populate=*&${checkboxValue && 'filters[isFree][$in]=true'}&${listLevels}`)
        .then(res => res.data.data)
    // Взятие карточек из базы

    // Взятие всех существующих level-ов из базы
    const dataCardsLevels = await api.get(`cards?populate=*&${checkboxValue && 'filters[isFree][$in]=true'}`)
        .then(res => res.data.data
            .map((i: any) => i.level)
            .filter((item: any, index: number, self: string | any[]) => self.indexOf(item) === index)
            .sort((a: string, b: string) => a.localeCompare(b)))
    // Взятие всех существующих level-ов из базы

    return (
        <div className={s.wrapper}>
            <HeaderItem
                data={dataCardsLevels}
                title={"Обучение по карточкам"}
                theme="Выбор уровня"
                checkbox="Показать доступные"
                text={"На компьютере, телефоне или любом другом устройстве - смотрите обучающие карточки, изучайте информацию, учите английский в том месте и в том темпе, в котором вам удобно."}
            />
            <LearningList levels={dataCardsLevels} data={dataCardsFilters} />
        </div>
    );
}
