import s from './Privacy.module.scss'
import { PrivacyProps } from './Privacy.types';

export function Privacy({ }: PrivacyProps) {
    return (
        <div className={s.privacy}>
            <input
                className={s.privacy__checkbox}
                type="checkbox"
                id="check"
            />
            <label htmlFor="check" className={s.privacy__agree}></label>
            <label htmlFor="check" className={s.privacy__label}>Я принимаю политику конфиденциальности и пользовательское соглашение</label>
        </div>
    );
};