import { HeaderCheckboxProps } from './HeaderCheckbox.types';
import s from './HeaderCheckbox.module.scss';

export function HeaderCheckbox({ text, ...props }: HeaderCheckboxProps) {
    return (
        <label className={s.label}>
            <input {...props} type='checkbox' className={s.label__input} />
            <span className={s.label__checkbox}></span>
            <p className={s.label__text}>{text}</p>
        </label>
    );
}
