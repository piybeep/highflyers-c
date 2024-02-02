import { itemExams } from "@/constants";
import { ItemExamsList, ItemNavigation } from "@/modules";

export default function page() {
    const res = itemExams;
    return (
        <>
            <ItemNavigation article={{ id: res.id, title: res.name, description: 'dfg' }} />
            <ItemExamsList tests={res.tests} />
        </>
    );
};