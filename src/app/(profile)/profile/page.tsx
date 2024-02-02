import { MATERIALS_LIST } from '@/constants';

import { Profile } from '@/modules';
import apiAuth from '@/utils/apiAuth';
import axios from 'axios';
import { cookies } from 'next/headers';

export const metadata = {
    title: 'Профиль - Higthflyers',
    description: 'Страница профиля',
};

export default async function page() {
    const res = await MATERIALS_LIST;

    const token = cookies().get('token')?.value
    // const userData = await apiAuth.get(`users/me`).then(res => res.data)
    const userData = await axios.get(`users/me`, {
        headers: { ...(token ? { Authorization: `Bearer ${token}` } : {}) }
    }).then(res => res.data)

    return (
        <>
            <Profile user={userData} materials={res} />
        </>
    );
}
