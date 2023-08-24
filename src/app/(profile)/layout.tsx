import { PropsWithChildren } from "react";

import s from './layout.module.scss'
import { Footer, Header } from "@/modules";

export default function layout({ children }: PropsWithChildren) {
    return (
        <div className={s.wrapper}>
            <Header />
            <div className={s.wrapper__content}>
                {children}
            </div>
            <Footer />
        </div>
    );
};