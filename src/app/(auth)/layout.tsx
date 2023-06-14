'use client'
import { useSelectedLayoutSegment } from 'next/navigation'

import { PropsWithChildren } from 'react';
import s from './layout.module.scss'

export default function layout({ children }: PropsWithChildren) {
    const segment = useSelectedLayoutSegment()
    return (
        <div className={s.wrapper} style={{
            backgroundImage: `${segment === 'authorization' ? 'url(/img/authorizationBg.png)' : 'url(/img/registrationBg.png)'}`
        }} >
            <div className={s.container}>
                {children}
            </div>
        </div>
    );
};