import { itemExams } from '@/constants';
import { ItemExamsList, ItemNavigation } from '@/modules';

export default function egeItem() {
    const res = itemExams;
    return (
        <>
            <ItemNavigation title={res.name} tags={res.tags} text={'test'} />
            <ItemExamsList tests={res.tests} />
        </>
    );
}
