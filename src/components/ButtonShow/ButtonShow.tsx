'use client';

import s from './ButtonShow.module.scss';
import { ButtonShowProps } from './ButtonShow.types';
import classNames from 'classnames';

export function ButtonShow({ isShow, ...props }: ButtonShowProps) {
    return (
        <button
            className={classNames(s.button, {
                [s.button__show]: !isShow,
                [s.button__hide]: isShow,
            })}
            {...props}
        >
            <svg
                className={s.button__svg}
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
            >
                <path
                    className={s.button__svg_fill}
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M7.42551 2.09222C7.77958 1.73814 8.35365 1.73814 8.70773 2.09222L12.9744 6.35888C13.3285 6.71296 13.3285 7.28703 12.9744 7.6411L8.70773 11.9078C8.35365 12.2618 7.77958 12.2618 7.42551 11.9078C7.07143 11.5537 7.07143 10.9796 7.42551 10.6256L10.1444 7.90666H1.66662C1.16588 7.90666 0.759949 7.50073 0.759949 6.99999C0.759949 6.49926 1.16588 6.09333 1.66662 6.09333H10.1444L7.42551 3.37444C7.07143 3.02036 7.07143 2.44629 7.42551 2.09222Z'
                    fill='white'
                />
            </svg>
        </button>
    );
}
