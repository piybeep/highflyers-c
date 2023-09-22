import { EXAMS_EGE } from '@/constants';
import { HeaderExams, ListExams } from '@/modules';

export default function page() {
    // Не стал создавать новую константу
    const res = EXAMS_EGE;
    return (
        <>
            <HeaderExams
                title={'Подготовка к ОГЭ'}
                subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus mollitia, provident quo hic rem tempora aliquid, voluptatibus odio ea fugit cumque. Architecto magni nesciunt, doloremque modi quisquam nobis ea repudiandae sequi molestias voluptate assumenda quae ut numquam reprehenderit consequatur tempore!'
                list={res}
            />
            <ListExams list={res} />
        </>
    );
}
