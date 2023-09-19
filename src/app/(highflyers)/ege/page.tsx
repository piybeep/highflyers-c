import { EXAMS_EGE } from '@/constants';
import { HeaderExams, ListExams } from '@/modules';

export default function page() {
    const res = EXAMS_EGE;
    return (
        <>
            <HeaderExams
                title={'Подготовка к ЕГЭ'}
                subtitle={
                    'Прокачайте английский, чтобы сдать экзамен на высокий балл и поступить в выбранный вуз. Программа разработана с учётом особенностей экзамена и нововведений этого года. На примере основных типов заданий и тем, вы пополните словарный запас, усилите грамматику, навыки аудирования, письменной и устной речи.'
                }
                list={res}
            />
            <ListExams list={res} />
        </>
    );
}
