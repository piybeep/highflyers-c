import { MATERIALS_LIST } from '@/constants';

import { Profile } from '@/modules';

export const metadata = {
    title: 'Профиль - Higthflyers',
    description: 'Страница профиля',
};

export default async function page() {
    const res = await MATERIALS_LIST;

    return (
        <>
            <Profile materials={res} />
        </>
    );
}
