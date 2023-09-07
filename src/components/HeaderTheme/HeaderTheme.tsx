import s from './HeaderTheme.module.scss';
import { HeaderThemeProps } from './HeaderTheme.types';

export function HeaderTheme({ text }: HeaderThemeProps) {
    return <h3 className={s.theme}>{text}</h3>;
}
