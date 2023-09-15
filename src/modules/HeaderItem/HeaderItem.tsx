import { ButtonBack, SubtitleTheme } from '@/components';
import s from './HeaderItem.module.scss'
import { HeaderItemProps } from './HeaderItem.types';

export function HeaderItem({ title, tags }: HeaderItemProps) {
    return (
        <div className={s.header}>
            <ButtonBack text={'Назад'} />
            <div className={s.info}>
                <h2 className={s.info__title}>{title}</h2>
                <div className={s.info__list}>
                    {
                        tags.map(current => (
                            <SubtitleTheme theme={current.name} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};