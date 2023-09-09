import { PropsWithChildren } from 'react';

import s from './layout.module.scss';
import { Footer, Header } from '@/modules';

export default function layout({ children }: PropsWithChildren) {
    return (
        <div className={s.wrapper}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
