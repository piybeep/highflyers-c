import { PropsWithChildren } from 'react';

import s from './MaterialLayout.module.scss'
import classNames from 'classnames';
// { materialTypes, children }: PropsWithChildren
interface MaterialLayoutProps {
    materialTypes: 'check' | 'plans' | 'article'
    children?: JSX.Element | JSX.Element[]
}
export function MaterialLayout({ children, materialTypes }: MaterialLayoutProps) {
    return (
        <div className={classNames(s.wrapper, {
            [s.wrapper__plans]: materialTypes === 'plans',
            [s.wrapper__check]: materialTypes === 'check',
            [s.wrapper__article]: materialTypes === 'article',
        })}>
            {children}
        </div >
    );
};