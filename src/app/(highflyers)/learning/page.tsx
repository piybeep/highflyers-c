import { LearningHeader, LearningList } from "@/modules";

import s from './page.module.scss'

import { dataLearning } from "@/constants/data";

export default function page() {

    const data = dataLearning

    return (
        <div className={s.wrapper}>
            <LearningHeader />
            <LearningList data={data} />
        </div>
    );
};