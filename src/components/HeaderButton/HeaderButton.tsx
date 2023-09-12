import classNames from 'classnames';
import s from './HeaderButton.module.scss';
import { HeaderButtonProps } from './HeaderButton.types';

export function HeaderButton({ text, isActive, ...props }: HeaderButtonProps) {
    return (
        <button
            {...props}
            className={classNames(s.button, {
                [s.button_active]: isActive,
            })}
        >
            {text}
        </button>
    );
}
