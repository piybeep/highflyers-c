import { HeaderItem, LearningList, PopupContent } from "@/modules";

import s from './page.module.scss';

import api from "@/utils/api";
import axios from "axios";
import { cookies } from "next/headers";

export default async function page({ searchParams }: { searchParams: any }) {
    const token = cookies().get('token')?.value
    // Взятие пользователя из базы
    const user = await axios.get(`${process.env.NEXT_PUBLIC_HOST}users/me`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => console.error(error))
    // Взятие пользователя из базы

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
                $in: user?.level ?? ''
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
            <PopupContent
                text={"Этот материал для вас пока не доступен. Чтобы его разблокировать - нужно оформить подписку."}
                link={"#"} />
            <HeaderItem
                data={resCardsLevels}
                title={"Обучение по карточкам"}
                theme="Выбор уровня"
                checkbox="Показать доступные"
                text={"На компьютере, телефоне или любом другом устройстве - смотрите обучающие карточки, изучайте информацию, учите английский в том месте и в том темпе, в котором вам удобно."}
            />
            <LearningList
                userLevels={user?.level}
                levels={resCardsLevels}
                data={resLearning} />
        </div>
    );
}
