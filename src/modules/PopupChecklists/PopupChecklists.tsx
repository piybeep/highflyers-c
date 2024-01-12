'use client';
import { useSearchParams } from 'next/navigation';

import { ButtonBack, HeaderTitle } from '@/components';

import s from './PopupChecklists.module.scss';
import Link from 'next/link';
import classNames from 'classnames';
import { useEffect } from 'react';
import { CheckListResourcesProps } from '@/constants';
import { useMutateQuery } from '@/utils/mutateQueryString';

export function PopupChecklists({
    data,
}: {
    data?: CheckListResourcesProps[];
}) {
    const searchParams = useSearchParams()!;
    const open = searchParams.get('popup');

    const { pushQueryString } = useMutateQuery()

    useEffect(() => {
        open === 'open'
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'unset');
    }, [open]);

    let literature = data
        ?.map(i => i.type)
        .filter((x, i, a) => a.indexOf(x) === i)
        .map(current => ({
            type: current,
            list: data.filter(currentData => currentData.type === current)
        }))

    const typeNames: Record<string, string> = {
        'книга': 'Книги',
        'подкаст': 'Подкасты (iTunes)',
        'youtube': 'YotTube-каналы'
    }

    return (
        <div
            className={classNames(s.wrapper, {
                [s.wrapper__open]: open === 'open',
            })}
        >
            <div className={s.content}>
                <div className={s.header}>
                    <HeaderTitle text={'Литература'} />
                    <ButtonBack
                        onClick={() => pushQueryString('open', 'popup')}
                        text={'Закрыть'}
                    />
                </div>
                {literature?.map((currentData) => (
                    <div key={currentData.type} className={s.info}>
                        <h3 className={s.info__title}>{typeNames[currentData.type]}</h3>
                        <div className={s.info__list}>
                            {
                                currentData.list.map(currentList => (
                                    <div className={s.link} key={currentList.id}>
                                        <Link href={currentList.link} className={s.link}>
                                            {currentList.name}
                                            {
                                                currentList.author ?
                                                    <span className={s.link__span}>
                                                        {currentList.author}
                                                    </span>
                                                    :
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='10'
                                                        height='10'
                                                        viewBox='0 0 10 10'
                                                        fill='none'
                                                    >
                                                        <path
                                                            d='M9 9L9 1M9 1L1 1M9 1L1.00001 8.99999'
                                                            stroke='#666666'
                                                            strokeWidth='1.45455'
                                                            strokeLinecap='round'
                                                            strokeLinejoin='round'
                                                        />
                                                    </svg>
                                            }
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
