import classNames from 'classnames';
import s from './AuthButton.module.scss';
import { AuthButtonProps } from './AuthButton.types';

export function AuthButton({
    value,
    isOutline = false,
    size = 'default',
    ...props
}: AuthButtonProps) {
    return (
        <button
            {...props}
            className={classNames(s.button, s[size], {
                [s.button__outline]: isOutline,
            })}
        >
            {value}
            {isOutline && (
                <svg
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        className={s.button__svg}
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M7.42532 2.09222C7.7794 1.73814 8.35347 1.73814 8.70754 2.09222L12.9742 6.35888C13.3283 6.71296 13.3283 7.28703 12.9742 7.6411L8.70754 11.9078C8.35347 12.2618 7.7794 12.2618 7.42532 11.9078C7.07125 11.5537 7.07125 10.9796 7.42532 10.6256L10.1442 7.90666H1.66643C1.16569 7.90666 0.759766 7.50073 0.759766 6.99999C0.759766 6.49926 1.16569 6.09333 1.66643 6.09333H10.1442L7.42532 3.37444C7.07125 3.02036 7.07125 2.44629 7.42532 2.09222Z'
                        fill='white'
                    />
                </svg>
            )}
        </button>
    );
}
