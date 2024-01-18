import classNames from 'classnames';
import s from './CardCheck.module.scss';
import { MaterialLayout } from '@/layout';
import { CheckListProps } from '@/types';

export function CardCheck(
    {
        open,
        title,
        isAccess,
        check_list_source,
    }: CheckListProps
) {
    return (
        <MaterialLayout>
            <div className={s.wrapper}>
                <h2 className={s.title}>{title}</h2>
                <div className={s.list}>
                    {
                        check_list_source?.map(item => (
                            <p key={item.id} className={classNames(s.list__text, {
                                [s.list__text_youtube]: item.type === 'YouTube-каналы',
                                [s.list__text_books]: item.type === 'Книги',
                                [s.list__text_iTunes]: item.type === 'Подкасты (iTunes)',
                            })}>
                                {item.type}
                            </p>
                        ))
                    }
                </div>
                <div className={s.info}>
                    <button className={s.info__button} onClick={() => open()}>
                        Открыть
                    </button>
                    {
                        isAccess && <p className={s.info__access}>Доступно</p>
                    }
                </div>
            </div>
        </MaterialLayout>
    );
}
