import { PropsWithChildren } from 'react';

import s from './layout.module.scss';
import { Footer, Header } from '@/modules';
import axios from 'axios';
import { cookies } from 'next/headers';
import api from '@/utils/api';
import { infoViewKeys } from '@/types';
import { CheckToken } from '@/components';

export const metadata = {
    title: 'Highflyers - школа английского языка',
};


export default async function layout({ children }: PropsWithChildren) {
    const token = cookies().get('token')?.value
    const user = await axios.get(`${process.env.NEXT_PUBLIC_HOST}users/me`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => console.error(error))

    const [resLearning, resArticles, resLessonPlans, resCheckLists] = await Promise.all([
        api.get(`cards`)
            .then(res => res.data.data)
            .catch(error => console.error(error)),

        api.get(`articles`)
            .then(res => res.data.data)
            .catch(error => console.error(error)),

        api.get(`lesson-plans`)
            .then(res => res.data.data)
            .catch(error => console.error(error)),

        api.get(`check-lists`)
            .then(res => res.data.data)
            .catch(error => console.error(error)),
    ])

    const infoView: Record<infoViewKeys, boolean> = {
        'Обучение по карточкам': !!resLearning,
        'Полезные статьи': !!resArticles,
        'Планы уроков': !!resLessonPlans,
        'Чек-листы': !!resCheckLists,
    }

    return (
        <div className={s.wrapper}>
            <Header headerInfoView={infoView} isAuth={!!user} />
            {/* Пока так, если вдруг понадобится написать logOut */}
            <CheckToken />
            {/* Пока так, если вдруг понадобится написать logOut */}
            {children}
            <Footer footerInfoView={infoView} isAuth={!!user} />
        </div>
    );
}
