import { MATERIALS_LIST } from '@/constants';
import {
    Course,
    Form,
    Lessons,
    PopupDeleteAccount,
    PopupFreeContent,
    PopupNewPay,
    Preview,
    Questions,
    Showcase,
    Started,
    TrainingList,
} from '@/modules';

import s from './page.module.scss';
import api from '@/utils/api';
import { infoViewKeys } from '@/types';

export default async function Home() {
    const res = MATERIALS_LIST;

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
        <main className={s.wrapper}>
            <Preview previewInfoView={infoView} />
            <Started />
            <Lessons />
            <Course />
            <TrainingList />
            <Questions />
            <Showcase materials={res} />
            <Form />
            <PopupFreeContent />
            <PopupNewPay />
            <PopupDeleteAccount />
        </main>
    );
}
