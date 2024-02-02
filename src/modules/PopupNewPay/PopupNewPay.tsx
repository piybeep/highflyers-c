'use client'

import { Controller, useForm } from 'react-hook-form';
import s from './PopupNewPay.module.scss'
import { AuthButton, AuthInput } from '@/components';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import classNames from 'classnames';

export function PopupNewPay() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const open = searchParams.get('popupNewPay') === 'open'

    useEffect(() => {
        open
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = 'unset'
    }, [open])

    const { handleSubmit, control } = useForm()

    const onSubmit = (value: any) => {
        // console.log(value)
    }

    return (
        <div className={classNames(s.wrapper, {
            [s.wrapper__open]: open
        })}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.info}>
                    <p className={s.info__title}>Новый способ оплаты</p>
                    <Controller
                        control={control}
                        name="cardNumber"
                        render={({ field: { onChange } }) => (
                            <AuthInput autoComplete='off' type='number' onChange={onChange} placeholder={'Номер карты'} isError={false} />
                        )}
                    />
                    <div className={s.info__row}>
                        <Controller
                            control={control}
                            name="cardDate"
                            render={({ field: { onChange } }) => (
                                <AuthInput autoComplete='off' type='text' onChange={onChange} placeholder={'Срок действия'} isError={false} />
                            )}
                        />
                        <Controller
                            control={control}
                            name="cardCode"
                            render={({ field: { onChange } }) => (
                                <AuthInput autoComplete='off' type='number' max={999} onChange={onChange} placeholder={'CVV/CVC'} isError={false} />
                            )}
                        />
                    </div>
                </div>
                <div className={s.buttons}>
                    <AuthButton onClick={() => router.push(pathname, { scroll: false })} value={'Отмена'} type='button' />
                    <AuthButton value={'Добавить карту'} isOutline isArrow={false} />
                </div>
            </form>
        </div>
    );
};