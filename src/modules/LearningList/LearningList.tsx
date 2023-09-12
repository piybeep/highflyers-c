import { LearningListProps } from './LearningList.types';
import s from './LearningList.module.scss'
import { CardPlans } from '@/components';

export function LearningList({ data }: { data: LearningListProps[] }) {
    return (
        <div className={s.wrapper}>
            {
                data.map(current => (
                    <div key={current.id} className={s.info}>
                        <div className={s.header}>
                            <h2 className={s.header__title}>Карточки уровня <span className={s.header__title_span}>{current.title}</span></h2>
                            {
                                current.available && <span className={s.header__slogan}>Доступно</span>
                            }
                        </div>
                        <div className={s.list}>
                            {
                                current.materials.map(current => (
                                    <CardPlans key={current.id} id={current.id} name={current.title} free={false} time={current.time} img={current.img} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};