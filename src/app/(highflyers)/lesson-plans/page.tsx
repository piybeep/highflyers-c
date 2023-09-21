import { dataLearning } from "@/constants";
import { LessonPlansHeader } from "@/modules";
import { LessonPlansList } from "@/modules/LessonPlansList";

export default function page() {

    const data = dataLearning

    return (
        <>
            <LessonPlansHeader />
            <LessonPlansList data={data} />
        </>
    );
};