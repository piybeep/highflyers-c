import { AuthButton, FormInput, Privacy } from '@/components';
import s from './Form.module.scss';

export function Form() {
    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <h2 className={s.info__title}>Ответим на любые вопросы!</h2>
                <p className={s.info__description}>
                    Можете обратиться по работе сайта, обучающим материалам,
                    работе тарифов и другим интересующим вопросам. Будем рады
                    ответить.
                </p>
            </div>

            <form action='#' className={s.form}>
                <div className={s.form__inputs}>
                    <FormInput placeholder={'Имя'} icon={'name'} />
                    <FormInput
                        placeholder={'Электронная почта'}
                        icon={'email'}
                        type='email'
                    />
                    <FormInput
                        placeholder={'Какой у вас вопрос?'}
                        icon={'question'}
                    />
                </div>
                <div className={s.form__info}>
                    <Privacy />
                    <AuthButton
                        type='submit'
                        isOutline={true}
                        value='Отправить'
                        size='large'
                    />
                </div>
            </form>
        </div>
    );
}
