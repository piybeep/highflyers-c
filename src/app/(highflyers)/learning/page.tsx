import { dataLearning } from "@/constants/data";
import { HeaderItem, LearningList } from "@/modules";

import s from './page.module.scss';

import api from "@/utils/api";
import apiAuth from "@/utils/apiAuth";

export default async function page({ searchParams }: { searchParams: any }) {

    // Взятие пользователя из базы
    const user = await apiAuth.get(`${process.env.NEXT_PUBLIC_HOST}users/me`)
    // Взятие пользователя из базы

    // Взятие level-ов у пользователя
    const userLevels = user.data.level
    // Взятие level-ов у пользователя


    // Для взятие всех карточек по параметрам в query
    const qs = require('qs')
    const queryLearning = qs.stringify({
        filters: {
            level: {
                $in: searchParams?.list?.split(',')
            }
        },
    }, {
        encodeValuesOnly: true,
    });
    // Для взятие всех карточек по параметрам в query

    // Взятие только купленных карточек пользователем
    const queryLearningBuy = qs.stringify({
        filters: {
            level: {
                $in: userLevels
            }
        },
    }, {
        encodeValuesOnly: true,
    });
    // Взятие только купленных карточек пользователем

    // Показать доступные
    const checkboxValue = searchParams.checkbox
    // Показать доступные

    // Взятие отфильтрованных карточек и взятие level-ов у всех карточек которые пришли
    const [resLearning, resCardsLevels] = await Promise.all([
        api.get(`/cards?populate=*&${queryLearning}&${checkboxValue && queryLearningBuy}`)
            .then(res => res.data.data)
            .catch(error => console.error(error)),

        api.get(`/cards?populate=*&${checkboxValue && queryLearningBuy}`)
            .then(res => res.data.data
                .map((i: any) => i.level)
                .filter((v: any, i: any, a: any[]) => a.findIndex(v2 => (v2 === v)) === i)
                .sort())
            .catch(error => console.error(error))
    ])
    // Взятие отфильтрованных карточек и взятие level-ов у всех карточек которые пришли

    return (
        <div className={s.wrapper}>
            <HeaderItem
                data={resCardsLevels}
                title={"Обучение по карточкам"}
                theme="Выбор уровня"
                checkbox="Показать доступные"
                text={"На компьютере, телефоне или любом другом устройстве - смотрите обучающие карточки, изучайте информацию, учите английский в том месте и в том темпе, в котором вам удобно."}
            />
            <LearningList
                userLevels={userLevels}
                levels={resCardsLevels}
                data={resLearning} />
        </div>
    );
}
