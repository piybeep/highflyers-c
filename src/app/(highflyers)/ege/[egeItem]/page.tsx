import { itemExams } from '@/constants';
import { ItemExamsList, ItemNavigation } from '@/modules';

export default function egeItem() {
    const res = itemExams;
    return (
        <>
            <ItemNavigation article={{ id: res.id, title: res.name, description: 'fdg' }} />
            <ItemExamsList tests={res.tests} />
        </>
    );
}
