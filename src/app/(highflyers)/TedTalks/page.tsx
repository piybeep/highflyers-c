import { TedTalksHeader, TedTalksList } from "@/modules";
import s from './page.module.scss'
import { dataTedTalks } from "@/constants/data";

export default function page() {
    const data = dataTedTalks

    return (
        <div className={s.wrapper}>
            <TedTalksHeader />
            <TedTalksList data={data} />
        </div>
    );
};