'use client';
import { useSelectedLayoutSegment } from 'next/navigation';

import { PropsWithChildren } from 'react';
import s from './layout.module.scss';

export default function Layout({ children }: PropsWithChildren) {
    const useSegment = useSelectedLayoutSegment();
    return (
        <div
            className={s.wrapper}
            style={{
                backgroundImage: `${
                    useSegment === 'authorization'
                        ? 'url(/img/authorizationBg.png)'
                        : 'url(/img/registrationBg.png)'
                }`,
            }}
        >
            <div className={s.container}>{children}</div>
        </div>
    );
}
