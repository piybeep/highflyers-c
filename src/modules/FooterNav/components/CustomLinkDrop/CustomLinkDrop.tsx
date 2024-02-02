import Link from 'next/link';
import s from './CustomLinkDrop.module.scss'
import classNames from 'classnames';

export function CustomLinkDrop({ text, link, levels }: { text: string, link: string, levels: { text: string }[] | undefined }) {
    return (
        <div className={s.info}>
            <Link
                href={link}
                className={classNames(
                    s.info__link,
                    s.info__link_drop,
                )}
            >
                {text}
            </Link>
            <div className={s.list}>
                {levels?.map((item) => (
                    <Link
                        key={item.text}
                        className={s.list__link}
                        href={{
                            query: { list: item.text },
                            pathname: link,
                        }}
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
        </div>
    );
};