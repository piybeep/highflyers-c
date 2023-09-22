import { LearningList } from "@/modules";

import s from './page.module.scss'

import { dataLearning } from "@/constants/data";
import { HeaderItem } from "@/modules/HeaderItem";

export default function page() {

    const res = dataLearning

    const data = ['A1', 'A2', 'A3', 'B1', 'B2', 'C1', 'C2']

    return (
        <div className={s.wrapper}>
            {/* Потом удалить */}
            {/* <LearningHeader/> */}
            <HeaderItem
                data={data}
                title={"Обучение по карточкам"}
                theme="Выбор уровня"
                checkbox="Показать доступные"
                text={"На компьютере, телефоне или любом другом устройстве - смотрите обучающие карточки, изучайте информацию, учите английский в том месте и в том темпе, в котором вам удобно."}
            />
            <LearningList data={res} />
        </div>
    );
};