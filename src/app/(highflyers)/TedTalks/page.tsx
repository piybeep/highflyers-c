import { TedTalksHeader, TedTalksList } from "@/modules";
import s from './page.module.scss'

export default function page() {
    return (
        <div className={s.wrapper}>
            <TedTalksHeader />
            <TedTalksList />
        </div>
    );
};