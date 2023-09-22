import s from './TestLayout.module.scss';
import { TestLayoutProps } from './TestLayout.types';

export function TestLayout({ children }: TestLayoutProps) {
    return <div className={s.wrapper}>{children}</div>;
}
