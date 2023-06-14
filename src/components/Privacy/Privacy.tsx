import s from './Privacy.module.scss'
import { PrivacyProps } from './Privacy.types';

export function Privacy({ }: PrivacyProps) {
    return (
        <label className={s.privacy}>
                <input
                    className={s.privacy__checkbox}
                    type="checkbox"
                    id="check"
                />
                <span className={s.privacy__agree}></span>
                <span className={s.privacy__label}>Я принимаю политику конфиденциальности и пользовательское соглашение</span>
        </label>
    );
};