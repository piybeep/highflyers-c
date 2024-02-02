import classNames from 'classnames';
import s from './button.module.scss'

export function EditButton(
    {
        isDisable,
        type,
        setIsDisable,
    }:
        {
            isDisable: boolean,
            type: "button" | "submit",
            setIsDisable?: (value: boolean) => void,
        }
) {
    return (
        <button
            className={classNames(s.edit, {
                [s.edit__none]: type === 'submit' ? isDisable : !isDisable
            })}
            type={type}
            onClick={() => setIsDisable && setIsDisable(!isDisable)}
        >
            {
                type === 'button' ?
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
                    :
                    <svg className={s.edit__svg}
                        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="20.0001" rx="10" fill="#0066FF" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.4492 6.34073C13.7443 6.51986 13.8383 6.90427 13.6591 7.19933L9.8645 13.4493C9.76552 13.6124 9.59751 13.7213 9.40828 13.7451C9.21905 13.7689 9.0293 13.705 8.89302 13.5716L6.43767 11.1677C6.19102 10.9263 6.18683 10.5305 6.42831 10.2839C6.66979 10.0372 7.06549 10.0331 7.31214 10.2745L9.20473 12.1274L12.5906 6.55061C12.7698 6.25556 13.1542 6.16159 13.4492 6.34073Z" fill="white" />
                    </svg>
            }
        </button>
    );
};