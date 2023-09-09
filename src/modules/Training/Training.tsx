import { Title } from '@/components';
import s from './Training.module.scss'
import { TrainingProps } from './Training.types';
import classNames from 'classnames';

export function Training({ title, description, direction = 'left', children }: TrainingProps) {
    return (
        <div className={classNames(s.wrapper, s[`wrapper__${direction}`])}>
            <div className={classNames(s.info, s[`info__${direction}`])}>
                <Title text={title} />
                <p className={s.info__description}>{description}</p>
            </div>
            {children}
        </div>
    );
};