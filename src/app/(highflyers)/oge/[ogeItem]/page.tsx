import { itemExams } from "@/constants";
import { HeaderItem, ItemExamsList } from "@/modules";

export default function page() {
    const res = itemExams
    return (
        <>
            <HeaderItem title={res.name} tags={res.tags} />
            <ItemExamsList tests={res.tests} />
        </>
    );
};