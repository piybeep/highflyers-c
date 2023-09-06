import classNames from 'classnames';
import s from './FormInput.module.scss'
import { FormInputProps } from './FormInput.types';

export function FormInput({ placeholder, icon = 'name', type = 'text', ...props }: FormInputProps) {
    return (
        <label className={classNames(s.wrapper, s[`wrapper_${icon}`])}>
            <input className={s.input} {...props} placeholder={placeholder} type={type} />
        </label>
    );
};