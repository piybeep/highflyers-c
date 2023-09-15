'use client'

import { ButtonShow, CorrectParagraf, ExamsTest, RestartButton } from '@/components';

import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';

import { ExamsTests } from '@/types/exams.types';
import s from './ItemExamsList.module.scss'

export function ItemExamsList({ tests }: { tests: ExamsTests[] }) {
    const ItemExamsForm = ({ test }: { test: ExamsTests }) => {
        const [isShow, setIshow] = useState(false)
        const [correctAnswer, setCorrectAnswer] = useState('')

        const { handleSubmit, control, reset } = useForm()

        const onSubmit = async (values: any) => {
            setIshow(!isShow)

            if (!isShow) {
                let correctAnswer = []
                for (const i in values) {
                    if (values[i].isRight) {
                        correctAnswer.push(values[i].isRight)
                    }
                }
                setCorrectAnswer(String(correctAnswer.length))
            }
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)} key={test.title} className={s.info__list}>
                <h2 className={s.info__title}>{test.title}</h2>
                <div className={s.list}>
                    {
                        test.list.map(current => (
                            <Controller
                                key={current.question}
                                control={control}
                                name={current.id}
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <ExamsTest
                                        onChange={onChange}
                                        isShow={isShow}
                                        question={current.question}
                                        answer={current.answer}
                                        value={value ?? ''} />
                                )}
                            />
                        ))
                    }
                    <div className={s.buttons}>
                        <RestartButton onClick={() => { reset(), setIshow(false) }} type='button' text={'Пройти заново'} />
                        <ButtonShow type='submit' isShow={isShow} />
                        <CorrectParagraf correctAnswer={isShow ? correctAnswer : ''} total={test.list.length} />
                    </div>
                </div>
            </form>
        )
    }

    return (
        <div className={s.info}>
            {
                tests.map(current => (
                    <ItemExamsForm key={current.title} test={current} />
                ))
            }
        </div >
    );
};