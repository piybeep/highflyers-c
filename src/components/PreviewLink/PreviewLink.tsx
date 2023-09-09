import Link from 'next/link';

import s from './PreviewLink.module.scss';
import { PreviewLinkProps } from './PreviewLink.types';

export function PreviewLink({ title, href }: PreviewLinkProps) {
    return (
        <Link href={href} className={s.link}>
            {title}
        </Link>
    );
}
