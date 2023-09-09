import Image from 'next/image';

import s from './TrainingList.module.scss'

import phone from '../../../public/img/training/phone.png'
import { Training } from '@/modules';
import { Paralax } from '@/components';

export function TrainingList() {
    return (
        <div className={s.wrapper}>
            <Training
                title={'Обучающие карточки'}
                description={'Такой вариант обучения удобен тем, что он функционален с точки зрения разнообразия лексических единиц по разным темам. Компактные и красочные материалы отображаются на разных устройствах.'}
            >
                <Paralax />
            </Training>
            <Training
                title={'Задания открытого и закрытого типа в формате тестов для отработки изученного материала'}
                description={'Будут полезны ученикам, а также необходимы преподавателям для проведения контроля знаний учащихся.'}
                direction='right'
            >
                <Image className={s.wrapper__img} src={phone.src} width={340} height={700} alt={'Картинка'} />
            </Training>
        </div>
    );
};