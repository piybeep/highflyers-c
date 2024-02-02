import Image from "next/image";
import Link from "next/link";

import s from './CustomLink.module.scss'

export function CustomLink({ text, link, img }: { text: string, link: string, img: string | undefined }) {
    return (
        <Link
            href={link}
            className={s.link}
        >
            {text}
            {img && (
                <Image
                    className={s.img}
                    src={img}
                    alt={''}
                    width={26}
                    height={9}
                />
            )}
        </Link>
    );
};