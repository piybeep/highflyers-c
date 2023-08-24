import classNames from 'classnames';
import s from './CardCheck.module.scss';
import { CardCheckProps } from './CardCheck.types';
import Link from 'next/link';
import { MaterialLayout } from '@/layout';

export function CardCheck({
    id,
    name,
    youtube,
    iTunes,
    books,
}: CardCheckProps) {
    return (
        <MaterialLayout materialTypes='check'>
            <div className={s.wrapper}>
                <h2 className={s.title}>{name}</h2>
                <div className={s.list}>
                    {youtube && (
                        <p
                            className={classNames(
                                s.list__text,
                                s.list__text_youtube,
                            )}
                        >
                            {youtube}
                        </p>
                    )}
                    {books && (
                        <p
                            className={classNames(
                                s.list__text,
                                s.list__text_books,
                            )}
                        >
                            {books}
                        </p>
                    )}
                    {iTunes && (
                        <p
                            className={classNames(
                                s.list__text,
                                s.list__text_iTunes,
                            )}
                        >
                            {iTunes}
                        </p>
                    )}
                </div>
                <Link className={s.button} href={'#'}>
                    Открыть
                </Link>
            </div>
        </MaterialLayout>
    );
}
