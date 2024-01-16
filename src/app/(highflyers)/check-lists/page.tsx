import { CheckLists, HeaderItem, PopupChecklists, PopupContent } from '@/modules';
import s from './page.module.scss';

import apiAuth from '@/utils/apiAuth';
import api from '@/utils/api';

export default async function CheckListPage({ searchParams }: { searchParams: any }) {
    const checkboxAccess = !!searchParams.checkbox
    const resUserIdCheckList = await apiAuth.get(`/users/me?populate=*`)
        .then(res => res.data.check_lists?.map((i: any) => i.id))
        .catch(error => console.error(error))

    const qs = require('qs')

    const query = qs.stringify({
        filters: {
            theme: {
                title: {
                    $in: searchParams?.list?.split(','),
                }
            },
        },
    }, {
        encodeValuesOnly: true,
        encode: false
    })

    const queryAccessCheckLists = qs.stringify({
        filters: {
            id: {
                // Костыль
                $in: (resUserIdCheckList && resUserIdCheckList?.length !== 0) ? resUserIdCheckList : [-99],
                // Костыль
            }
        },
    }, {
        encodeValuesOnly: true,
    })

    const [resCheckLists, resCheckListsTheme, resIdCheckList] = await Promise.all([
        api.get(`check-lists?populate=*&${query}&${checkboxAccess && queryAccessCheckLists}`)
            .then(res => res.data.data)
            .catch(error => error),

        api.get(`check-lists?populate=*&${checkboxAccess && queryAccessCheckLists}`)
            .then(res => res.data.data?.map((i: any) => i.theme?.title).filter((value: any, index: any, array: any[]) => array.findIndex(v2 => (v2 === value)) === index))
            .catch(error => error),

        api.get(`check-lists/${searchParams?.id}?populate=*`)
            .then(res => res.data.data)
            .catch(error => error),
    ])

    return (
        <div className={s.wrapper}>
            <PopupContent
                text={"Этот материал для вас пока не доступен. Чтобы его разблокировать - нужно оформить подписку."}
                link={"#"} />
            <HeaderItem
                data={resCheckListsTheme}
                theme='Выбор темы'
                checkbox='Показать доступные'
                title={'Чек-листы'}
                text={'То, что нужно, чтобы закреплять полученные знания. Тут вы найдете множество книг, аудиокниг, подкастов, YouTube-каналов, которые помогут погрузиться глубже в специфику английского и прокачают аудио-восприятие языка и словарный запас.'}
            />

            <CheckLists themes={resCheckListsTheme} checkLists={resCheckLists} userChecklists={resUserIdCheckList} />

            <PopupChecklists data={resIdCheckList.check_list_sources} />
        </div>
    );
}
