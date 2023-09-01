import s from './HeaderTitle.module.scss'
import { HeaderTitleProps } from './HeaderTitle.types';

export function HeaderTitle({ text }: HeaderTitleProps) {
    return (
        <h2 className={s.title}>{text}</h2>
    );
};