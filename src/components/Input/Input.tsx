'use client';

import { useState } from 'react';

import { InputProps } from './Input.types';
import s from './Input.module.scss';
import classNames from 'classnames';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useForm } from 'react-hook-form';
import { EditButton } from './button/button';
import toast from 'react-hot-toast';
import { ConfirmChange } from '@/modules';

export function Input({
    placeholder,
    isBordered = false,
    className,
    type,
    idUser,
    name,
    initialValue = '',
    validation,
    isConfirm = false,
    ...props
}: InputProps) {
    const [localType, setLocalType] = useState(type);
    const [isDisable, setIsDisable] = useState(true)

    const { handleSubmit, register, reset, formState: { isValid, isDirty } } = useForm({
        defaultValues: {
            [name]: initialValue
        }
    })

    // Для открытия/закрытия попапа
    const [handlePopupInfo, setHandlePopupInfo] = useState({ value: '', isOpen: false })
    // Для открытия/закрытия попапа

    // Запрос за изменение пользователя
    const handleEditProfile = (value: string, token: any) => {
        axios.put(`${process.env.NEXT_PUBLIC_HOST}users/${idUser}`, value, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                toast.success('Данные сохранены')
                setIsDisable(!isDisable)
            })
            .catch(error => {
                console.error(error)
                toast.error('Произошла ошибка')
            })
    }
    // Запрос за изменение пользователя

    // Проверка было ли отключено поле для ввода или нет и отправить запрос
    const handleSubmitForm = (value: any) => {
        const token = getCookie('token')
        if (isConfirm) {
            setHandlePopupInfo({ value: value, isOpen: true })
        }
        else {
            handleEditProfile(value, token)
        }
    }

    const handleResetValue = () => {
        setIsDisable(true)
        reset()
    }

    return (
        <>
            {
                isConfirm &&
                <ConfirmChange
                    setIsDisabelInput={() => setIsDisable(true)}
                    handleResetValue={() => handleResetValue()}
                    idUser={idUser} token={getCookie('token')}
                    formValue={handlePopupInfo.value}
                    isVisible={handlePopupInfo.isOpen}
                    setIsVisible={setHandlePopupInfo} />
            }
            <form onSubmit={handleSubmit(handleSubmitForm)} className={classNames(s.wrapper, s[`wrapper__${className}`])}>
                <p
                    className={classNames(s.placeholder, {
                        [s.placeholder__none]: !placeholder,
                    })}
                >
                    {placeholder}
                </p>
                <div className={s.wrapper__info}>
                    <div className={s.info}>
                        <input
                            {...register(name, validation)}
                            defaultValue={initialValue}
                            className={classNames(s.input, {
                                [s.input__bordered]: isBordered,
                                [s.input__bordered_error]: isDirty && !isValid,
                                [s.input__password]: type === 'password'
                            })}
                            {...props}
                            disabled={isDisable}
                            placeholder={placeholder}
                            type={localType}
                        />

                        <div className={s.info__input_right_section}>
                            <svg onClick={() => handleResetValue()} className={classNames(s.info__reset, {
                                [s.info__reset_visible]: !isDisable,
                                [s.info__reset_none]: isDisable
                            })}
                                width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20" height="20" rx="10" fill="#EEEEEE" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.9096 6.79753C14.1049 6.60227 14.1049 6.28568 13.9096 6.09042C13.7143 5.89516 13.3978 5.89516 13.2025 6.09042L9.99999 9.29293L6.79749 6.09042C6.60223 5.89516 6.28564 5.89516 6.09038 6.09042C5.89512 6.28568 5.89512 6.60227 6.09038 6.79753L9.29289 10L6.09038 13.2025C5.89512 13.3978 5.89512 13.7144 6.09038 13.9096C6.28564 14.1049 6.60223 14.1049 6.79749 13.9096L9.99999 10.7071L13.2025 13.9096C13.3978 14.1049 13.7143 14.1049 13.9096 13.9096C14.1049 13.7144 14.1049 13.3978 13.9096 13.2025L10.7071 10L13.9096 6.79753Z" fill="#666666" />
                            </svg>

                            {
                                type === 'password' &&
                                <>
                                    <svg
                                        onClick={() => setLocalType(localType === 'password' ? 'text' : 'password')}
                                        className={classNames(s.info__eye, {
                                            [s.info__eye_visible]: localType === 'text',
                                            [s.info__eye__none]: localType === 'password',
                                        })}
                                        width='20'
                                        height='18'
                                        viewBox='0 0 20 18'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M9.99991 13.4233C6.6654 13.4233 3.85208 11.6834 2.08092 9.0001C3.85208 6.31682 6.6654 4.57683 9.99991 4.57683C13.3344 4.57683 16.1477 6.31682 17.9189 9.0001C16.1477 11.6834 13.3344 13.4233 9.99991 13.4233ZM9.99991 3.37683C6.06543 3.37683 2.80177 5.51901 0.858369 8.68631C0.740244 8.87883 0.740244 9.12138 0.858371 9.31389C2.80177 12.4812 6.06544 14.6233 9.99991 14.6233C13.9344 14.6233 17.1981 12.4812 19.1415 9.31389C19.2596 9.12138 19.2596 8.87883 19.1415 8.68631C17.1981 5.51901 13.9344 3.37683 9.99991 3.37683ZM9.99991 11.5117C11.3617 11.5117 12.4657 10.3872 12.4657 9.00009C12.4657 7.61295 11.3617 6.48846 9.99991 6.48846C8.63811 6.48846 7.53416 7.61295 7.53416 9.00009C7.53416 10.3872 8.63811 11.5117 9.99991 11.5117Z'
                                            fill='#666666'
                                        />
                                    </svg>
                                    <svg
                                        onClick={() => setLocalType(localType === 'password' ? 'text' : 'password')}
                                        className={classNames(s.info__eye, {
                                            [s.info__eye_visible]: localType === 'password',
                                            [s.info__eye__none]: localType === 'text',
                                        })}
                                        width='18'
                                        height='18'
                                        viewBox='0 0 18 18'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M17.7178 7.29132C17.9988 7.46695 18.0843 7.83712 17.9086 8.11812C17.3818 8.96112 16.7557 9.72795 16.0441 10.3959L17.4852 11.8371C17.7196 12.0714 17.7196 12.4513 17.4853 12.6856C17.2509 12.9199 16.871 12.9199 16.6367 12.6856L15.1211 11.17C14.1658 11.8836 13.0905 12.4347 11.9203 12.7815L12.4594 14.7934C12.5451 15.1135 12.3552 15.4425 12.0351 15.5282C11.715 15.614 11.386 15.424 11.3003 15.104L10.7508 13.0533C10.1847 13.1498 9.60026 13.2001 8.99984 13.2001C8.39939 13.2001 7.81488 13.1498 7.24876 13.0533L6.69937 15.1039C6.61362 15.424 6.28462 15.614 5.96454 15.5282C5.64445 15.4425 5.45449 15.1135 5.54025 14.7934L6.07927 12.7814C4.90904 12.4347 3.83369 11.8835 2.8783 11.1699L1.3627 12.6855C1.12838 12.9198 0.748485 12.9198 0.514171 12.6855C0.279856 12.4511 0.279856 12.0712 0.514171 11.8369L1.95541 10.3957C1.24387 9.72781 0.61786 8.96104 0.0910379 8.11812C-0.0845889 7.83712 0.000834133 7.46695 0.281836 7.29133C0.562837 7.1157 0.933008 7.20112 1.10863 7.48212C1.68393 8.40259 2.38635 9.21662 3.1942 9.89112C3.20734 9.90115 3.22017 9.91179 3.23264 9.92305C4.81064 11.2266 6.7863 12.0001 8.99984 12.0001C12.3693 12.0001 15.1875 10.2078 16.891 7.48212C17.0667 7.20112 17.4368 7.1157 17.7178 7.29132Z'
                                            fill='#666666'
                                        />
                                    </svg>
                                </>
                            }
                        </div>
                    </div>
                    <EditButton type='submit' isDisable={isDisable} />
                    <EditButton type='button' isDisable={isDisable} setIsDisable={setIsDisable} />
                </div>
            </form >
        </>
    );
}
