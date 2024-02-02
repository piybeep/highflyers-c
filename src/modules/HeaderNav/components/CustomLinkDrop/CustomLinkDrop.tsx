import Link from "next/link";
import classNames from "classnames";

import s from './CustomLinkDrop.module.scss'

export function CustomLinkDrop({ text, link, levels }: { text: string, link: string, levels: { id: number, text: string }[] | undefined }) {
    return (
        <div className={s.menu}>
            <Link
                href={link}
                className={classNames(
                    s.menu__link,
                    s.menu__link_drop,
                )}
            >
                {text}
            </Link>
            <div className={s.info}>
                <h2 className={s.info__header}>уровень</h2>
                <div className={s.info__list}>
                    {levels?.map((list_item: any, index: any) =>
                        index % 2 != 0 ? (
                            <div
                                key={list_item.text}
                                className={s.info__item}
                            >
                                <Link
                                    className={s.info__link}
                                    href={{
                                        query: {
                                            list: list_item.text,
                                        },
                                        pathname: link,
                                    }}
                                >
                                    {list_item.text}
                                </Link>
                                <div
                                    className={s.info__circle}
                                    style={{
                                        width:
                                            index === 1
                                                ? index * 8
                                                : index * 4,
                                        height:
                                            index === 1
                                                ? index * 8
                                                : index * 4,
                                    }}
                                ></div>
                            </div>
                        ) : (
                            <Link
                                key={list_item.text}
                                className={s.info__link}
                                href={{
                                    query: {
                                        list: list_item.text,
                                    },
                                    pathname: link,
                                }}
                            >
                                {list_item.text}
                            </Link>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
};