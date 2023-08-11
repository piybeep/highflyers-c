'use client'

import { useState } from 'react';

import s from './MaterialLayout.module.scss'
import classNames from 'classnames';
interface MaterialLayoutProps {
    materialTypes: 'check' | 'plans' | 'article'
    children?: JSX.Element | JSX.Element[]
}

export function MaterialLayout({ children, materialTypes }: MaterialLayoutProps) {
    const [isFocus, setIsFocus] = useState('')

    const handleMouseEnter = () => {
        // Для выбора цвета из массива
        // -----------------------------------------------------------
        // const colors = ["green", "purple", "teal", "violet", "pink"]
        // let randomNumber = Math.floor(Math.random() * colors.length)
        // e.target.style.backgroundColor = `${colors[randomNumber]}`
        // -----------------------------------------------------------

        // Это для выбора рандомного цвета
        // --------------------------------------------------
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        // --------------------------------------------------
        setIsFocus(color)
    }

    const handleMouseLeave = () => {
        setIsFocus('')
    }

    return (
        <div
            style={{ backgroundColor: isFocus }}
            onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}
            className={classNames(s.wrapper, {
                [s.wrapper__plans]: materialTypes === 'plans',
                [s.wrapper__check]: materialTypes === 'check',
                [s.wrapper__article]: materialTypes === 'article',
            })}>
            {children}
        </div >
    );
};