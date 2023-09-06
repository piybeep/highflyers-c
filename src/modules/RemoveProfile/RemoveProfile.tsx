import { AuthButton, PopupLayout } from '@/components';

import s from './RemoveProfile.module.scss';

import Link from 'next/link';
import { PAGES_LINK } from '@/constants';

export async function RemoveProfile() {
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
                    type='submit'
                    value={'Отправить'}
                    isOutline
                    size='small'
                />
            </div>
        </PopupLayout>
    );
}
