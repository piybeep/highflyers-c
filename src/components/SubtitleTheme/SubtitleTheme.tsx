import s from './SubtitleTheme.module.scss'
import { SubtitleThemeProps } from './SubtitleTheme.types';

export function SubtitleTheme({ theme }: SubtitleThemeProps) {
    return (
        <p className={s.subtitle}># {theme}</p>
    );
};