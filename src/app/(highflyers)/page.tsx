import { MATERIALS_LIST } from '@/constants';
import {
    Course,
    Form,
    Lessons,
    Preview,
    Questions,
    Showcase,
    Started,
    TrainingList,
} from '@/modules';

import s from './page.module.scss';

export const metadata = {
    title: 'Highflyers - школа английского языка',
};

export default function Home() {
    const res = MATERIALS_LIST;

    return (
        <main className={s.wrapper}>
            <Preview />
            <Started />
            <Lessons />
            <Course />
            <TrainingList />
            <Questions />
            <Showcase materials={res} />
            <Form />
        </main>
    );
}
