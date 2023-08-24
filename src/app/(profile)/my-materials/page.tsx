import { LESSON_LIST } from '@/constants';
import { MyMaterials } from '@/modules';

export const metadata = {
    title: 'Материалы - Higthflyers',
    description: 'Страница материалов',
};

export default async function page() {
    const res = await LESSON_LIST;

    return <MyMaterials list={res} />;
}
