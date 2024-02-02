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
    const userData = await axios.get(`${process.env.NEXT_PUBLIC_HOST}users/me`, {
        headers: {
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        }
    })
        .then(res => res.data)
        .catch(error => console.error(error))

    return (
        <>
            <Profile user={userData} materials={res} />
        </>
    );
}
