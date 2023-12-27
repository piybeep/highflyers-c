'use client';

import { useState } from 'react';

import { InputProps } from './Input.types';
import s from './Input.module.scss';
import classNames from 'classnames';

export function Input({
    placeholder,
    isBordered = false,
    isPlaceholder = false,
    isPassword = false,
    isEdit = false,
    inputType = 'text',
    className,
    submit,
    isDisable,
    isError,
    setIsDisable,
    isFormValidate,
    ...props
}: InputProps) {
    const [isType, setIsType] = useState(!isPassword);

    // Проверка было ли отключено поле для ввода или нет и отправить запрос
    const handleSubmitForm = () => {
        if (!isDisable) {
            isFormValidate && setIsDisable(true)
            submit()
        } else {
            setIsDisable(false)
        }
    }

    return (
        <div className={classNames(s.wrapper, s[`wrapper__${className}`])}>
            <p
                className={classNames(s.placeholder, {
                    [s.placeholder__none]: !isPlaceholder,
                })}
            >
                {placeholder}
            </p>
            <div className={s.wrapper__info}>
                <div className={s.info}>
                    <input
                        className={classNames(s.input, {
                            [s.input__bordered]: isBordered,
                            [s.input__bordered_error]: isError
                        })}
                        {...props}
                        disabled={isDisable}
                        placeholder={placeholder}
                        type={
                            isPassword
                                ? !isType
                                    ? 'password'
                                    : 'text'
                                : inputType
                        }
                    />

                    <svg
                        onClick={() => setIsType(false)}
                        className={classNames(s.info__eye, {
                            [s.info__eye_visible]: isType,
                            [s.info__eye__none]: !isPassword,
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
                        onClick={() => setIsType(true)}
                        className={classNames(s.info__eye, {
                            [s.info__eye_visible]: !isType,
                            [s.info__eye__none]: !isPassword,
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
                </div>
                <button
                    type='button'
                    onClick={() => handleSubmitForm()}
                    className={classNames(s.edit, {
                        [s.edit__none]: isEdit,
                    })}
                >
                    <svg
                        className={s.edit__svg}
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <rect width='20' height='20' rx='10' fill='#EEEEEE' />
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M12.7521 5.81847C12.6126 5.679 12.3865 5.679 12.247 5.81847L6.93854 11.127C6.87429 11.1912 6.82288 11.2672 6.78709 11.3507L5.74275 13.7875C5.68523 13.9217 5.71522 14.0774 5.81848 14.1807C5.92175 14.2839 6.07748 14.3139 6.21171 14.2564L8.64848 13.2121C8.73201 13.1763 8.80793 13.1249 8.87219 13.0606L14.1807 7.75212C14.3202 7.61264 14.3202 7.38651 14.1807 7.24704L12.7521 5.81847ZM7.44362 11.632L12.4996 6.57609L13.4231 7.49958L8.36711 12.5555L7.29903 13.0133L6.98587 12.7001L7.44362 11.632Z'
                            fill='#666666'
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
