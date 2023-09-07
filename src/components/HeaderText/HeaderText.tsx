import s from './HeaderText.module.scss';
import { HeaderTextProps } from './HeaderText.types';

export function HeaderText({ text }: HeaderTextProps) {
    return <p className={s.text}>{text}</p>;
}
