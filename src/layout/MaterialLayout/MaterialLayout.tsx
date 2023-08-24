'use client';

import { useState } from 'react';

import s from './MaterialLayout.module.scss';

interface MaterialLayoutProps {
    children?: JSX.Element | JSX.Element[];
}

export function MaterialLayout({ children }: MaterialLayoutProps) {
    const [isFocus, setIsFocus] = useState('');

    const handleMouseEnter = () => {
        // Это для выбора рандомного цвета
        // --------------------------------------------------
        var color: any = [];
        for (var i = 0; i < 3; i++) {
            color.push(Math.floor(Math.random() * (255 - 234) + 234));
        }
        console.log(color);
        setIsFocus(color);
    };

    const handleMouseLeave = () => {
        setIsFocus('');
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
