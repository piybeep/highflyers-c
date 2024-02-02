import Link from 'next/link';
import s from './CustomLink.module.scss'

export function CustomLink({ text, link }: { text: string, link: string }) {
    return (
        <Link
            href={link}
            className={s.link}
        >
            {text}
        </Link>
    );
};