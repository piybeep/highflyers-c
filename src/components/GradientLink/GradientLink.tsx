import Link from 'next/link';

import { GradientLinkProps } from './GradientLink.types';
import s from './GradientLink.module.scss';

export function GradientLink({
    text,
    href,
    icon = 'arrow',
    borderRadius = 6,
}: GradientLinkProps) {
    return (
        <Link
            href={href}
            className={s.link}
            style={{ borderRadius: borderRadius }}
        >
            {text}
            {icon === 'arrow' ? (
                <svg
                    className={s.link__svg}
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                >
                    <path
                        className={s.link__svg}
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.62655 0.582407C6.11716 0.122465 6.88773 0.147322 7.34767 0.637928L14.4065 8.16734C14.8456 8.63571 14.8456 9.36456 14.4065 9.83293L7.34767 17.3623C6.88773 17.8529 6.11716 17.8778 5.62655 17.4179C5.13595 16.9579 5.11109 16.1873 5.57103 15.6967L11.8491 9.00013L5.57103 2.30352C5.11109 1.81292 5.13595 1.04235 5.62655 0.582407Z'
                        fill='white'
                    />
                </svg>
            ) : (
                <svg
                    className={s.link__svg}
                    xmlns='http://www.w3.org/2000/svg'
                    width='26'
                    height='27'
                    viewBox='0 0 26 27'
                    fill='none'
                >
                    <path
                        className={s.link__svg}
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M9 0.811523C8.44771 0.811523 8 1.25924 8 1.81152C8 2.36381 8.44771 2.81152 9 2.81152H24V24.8115H9C8.44771 24.8115 8 25.2592 8 25.8115C8 26.3638 8.44771 26.8115 9 26.8115H24C25.1046 26.8115 26 25.9161 26 24.8115V2.81152C26 1.70696 25.1046 0.811523 24 0.811523H9ZM13.2071 8.60442C12.8166 8.21389 12.1834 8.21389 11.7929 8.60442C11.4024 8.99494 11.4024 9.62811 11.7929 10.0186L14.5858 12.8115H1C0.447715 12.8115 0 13.2592 0 13.8115C0 14.3638 0.447715 14.8115 1 14.8115H14.5858L11.7929 17.6044C11.4024 17.9949 11.4024 18.6281 11.7929 19.0186C12.1834 19.4092 12.8166 19.4092 13.2071 19.0186L17.7071 14.5186C18.0976 14.1281 18.0976 13.4949 17.7071 13.1044L13.2071 8.60442Z'
                        fill='white'
                    />
                </svg>
            )}
        </Link>
    );
}
