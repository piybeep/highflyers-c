'use client';

import { AuthButton, FormInput, Privacy } from '@/components';
import s from './Form.module.scss';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export function Form() {
    const { handleSubmit, control, reset } = useForm();

    const onSubmit = async (values: any) => {
        if (values.privacy) {
            toast.success('Форма успешно отправлена');
            reset();
        } else {
            toast.error('Примите политику конфиденциальности');
        }
    };

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

            <form
                action='#'
                className={s.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={s.form__inputs}>
                    <Controller
                        control={control}
                        name='name'
                        render={({ field: { onChange, value } }) => (
                            <FormInput
                                placeholder={'Имя'}
                                icon={'name'}
                                value={value ?? ''}
                                onChange={onChange}
                                required
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name='email'
                        render={({ field: { onChange, value } }) => (
                            <FormInput
                                value={value ?? ''}
                                onChange={onChange}
                                placeholder={'Электронная почта'}
                                icon={'email'}
                                required
                                type='email'
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name='question'
                        render={({ field: { onChange, value } }) => (
                            <FormInput
                                value={value ?? ''}
                                onChange={onChange}
                                required
                                placeholder={'Какой у вас вопрос?'}
                                icon={'question'}
                            />
                        )}
                    />
                </div>
                <div className={s.form__info}>
                    <Controller
                        control={control}
                        name='privacy'
                        defaultValue={false}
                        render={({ field: { onChange, value } }) => (
                            <Privacy onChange={onChange} checked={value} />
                        )}
                    />
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
