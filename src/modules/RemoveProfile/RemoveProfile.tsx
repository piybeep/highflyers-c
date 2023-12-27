import { AuthButton, PopupLayout } from '@/components';

import s from './RemoveProfile.module.scss';

import Link from 'next/link';
import { PAGES_LINK } from '@/constants';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export async function RemoveProfile({ id }: { id: number }) {
    const router = useRouter()
    const handleRemoveAccount = () => {
        const token = getCookie('token')
        axios.delete(`${process.env.NEXT_PUBLIC_HOST}users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                toast.success('Аккаунт удалён')
                router.push(PAGES_LINK.PROFILE)
            })
            .catch(error => toast.error('Произошла ошибка, попробуйте позже'))
    }
    return (
        <PopupLayout>
            <h2 className={s.title}>Удаление аккаунта</h2>
            <p className={s.description}>
                Данные будут удалены с данного сайта и ваш профиль будет
                невозможно восстановить
            </p>
            <div className={s.info}>
                <Link href={{ pathname: PAGES_LINK.PROFILE, query: {} }}>
                    <AuthButton value={'Назад'} size='small' type='button' />
                </Link>
                <AuthButton
                    onClick={() => handleRemoveAccount()}
                    type='submit'
                    value={'Отправить'}
                    isOutline
                    size='small'
                />
            </div>
        </PopupLayout>
    );
}
