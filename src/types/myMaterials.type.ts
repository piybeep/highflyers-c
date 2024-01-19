import { ArticlesProps } from "./articles.types";
import { CheckListProps } from "./checkLists.types";
import { LearningType } from "./learning.types";
import { LessonPlansTypes } from "./lessonPlans.types";

export interface Category {
    name: string;
    count: number;
    list: LearningType[]
    | LessonPlansTypes[]
    | CheckListProps[]
    | ArticlesProps[]
}