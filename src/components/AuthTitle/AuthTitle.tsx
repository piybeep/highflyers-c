import s from './AuthTitle.module.scss';
import { AuthTitleProps } from './AuthTitle.types';

export function AuthTitle({ value }: AuthTitleProps) {
    return <h2 className={s.title}>{value}</h2>;
}
