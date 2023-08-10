import { PropsWithChildren } from 'react';

import s from './MaterialLayout.module.scss'
import classNames from 'classnames';
// { materialTypes, children }: PropsWithChildren
interface MaterialLayoutProps {
    materialTypes: 'check' | 'plans' | 'article'
    children?: JSX.Element | JSX.Element[]
}

export function MaterialLayout({ children, materialTypes }: MaterialLayoutProps) {
    // const colors = ["green", "purple", "teal", "violet", "pink"]

    const handleMouseEnter = (e: any) => {
        // let randomNumber = Math.floor(Math.random() * colors.length)
        // e.target.style.backgroundColor = `${colors[randomNumber]}`

        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        e.target.style.backgroundColor = `${color}`
    }

    const handleMouseLeave = (e: any) => {
        e.target.style.backgroundColor = ''
    }

    return (
        <div onMouseEnter={e => handleMouseEnter(e)} onMouseLeave={e => handleMouseLeave(e)} className={classNames(s.wrapper, {
            [s.wrapper__plans]: materialTypes === 'plans',
            [s.wrapper__check]: materialTypes === 'check',
            [s.wrapper__article]: materialTypes === 'article',
        })}>
            {children}
        </div >
    );
};