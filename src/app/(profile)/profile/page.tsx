import { MATERIALS_LIST } from '@/constants';

import { Profile } from '@/modules';
import apiAuth from '@/utils/apiAuth';

export const metadata = {
    title: 'Профиль - Higthflyers',
    description: 'Страница профиля',
};

export default async function page() {
    const res = await MATERIALS_LIST;

    const userData = await apiAuth.get(`users/me`).then(res => res.data)

    return (
        <>
            <Profile user={userData} materials={res} />
        </>
    );
}
