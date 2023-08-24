'use client';

import { ReactNode, useState } from 'react';

import s from './MaterialLayout.module.scss';

interface MaterialLayoutProps {
    children?: ReactNode;
    materialTypes?: string;
}

export function MaterialLayout({ children }: MaterialLayoutProps) {
    const [isFocus, setIsFocus] = useState([0, 0, 0]);

    const handleMouseEnter = () => {
        setIsFocus(
            Array.from(Array(3), () =>
                Math.floor(Math.random() * (255 - 234) + 234),
            ),
        );
    };

    const handleMouseLeave = () => {
        setIsFocus([0, 0, 0]);
    };

    return (
        <div
            style={{
                backgroundColor: `rgb(${isFocus[0] ? isFocus[0] : 245}, ${
                    isFocus[1] ? isFocus[1] : 245
                }, ${isFocus[2] ? isFocus[2] : 245})`,
            }}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            className={s.wrapper}
        >
            {children}
        </div>
    );
}
