import { itemExams } from '@/constants';
import { ItemExamsList, ItemNavigation } from '@/modules';

export default function ogeItem() {
    const res = itemExams;
    return (
        <>
            <ItemNavigation title={res.name} tags={res.tags} />
            <ItemExamsList tests={res.tests} />
        </>
    );
}
