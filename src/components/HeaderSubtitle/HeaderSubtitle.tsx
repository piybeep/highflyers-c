import s from './HeaderSubtitle.module.scss'
import { HeaderSubtitleProps } from './HeaderSubtitle.types';

export function HeaderSubtitle({ text }: HeaderSubtitleProps) {
    return (
        <h3 className={s.subtitle}>{text}</h3>
    );
};