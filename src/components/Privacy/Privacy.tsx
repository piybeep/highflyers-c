import s from './Privacy.module.scss';
import { PrivacyProps } from './Privacy.types';

export function Privacy({ ...props }: PrivacyProps) {
    return (
        <label className={s.privacy}>
            <input {...props} className={s.privacy__checkbox} type='checkbox' />
            <span className={s.privacy__agree}></span>
            <span className={s.privacy__label}>
                Я принимаю политику конфиденциальности и пользовательское
                соглашение
            </span>
        </label>
    );
}
