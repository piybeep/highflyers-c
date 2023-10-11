'use client';

import {
    ButtonShow,
    CardText,
    CorrectParagraf,
    ExamsTest,
    RestartButton,
    TestChoose,
    TestQuestion,
    TestText,
} from '@/components';

import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';

import { ExamsTests } from '@/types/exams.types';
import s from './ItemExamsList.module.scss';

export function ItemExamsList({ tests }: { tests: ExamsTests[] }) {
    const ItemExamsForm = ({ test }: { test: ExamsTests }) => {
        const [isShow, setIshow] = useState(false);
        const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);

        const { handleSubmit, control, reset } = useForm();

        const onSubmit = async (values: any) => {
            setIshow(!isShow);

            if (values)
                if (!isShow) {
                    let correctAnswer = [];
                    for (const i in values) {
                        if (values[i].isRight) {
                            correctAnswer.push(values[i].isRight);
                        }
                    }
                    setCorrectAnswer(correctAnswer.length);
                }
        };

        return (
            <form
                onSubmit={handleSubmit(onSubmit)}
                key={test.title}
                className={s.info__list}
            >
                <div className={s.info__header}>
                    <h2 className={s.info__title}>{test.title}</h2>
                    {
                        test.topic &&
                        <p className={s.info__subtitle}>Topic: {test.topic}</p>
                    }
                </div>
                <div className={s.list}>
                    {test.type === 'select' &&
                        test.list.map((current) => (
                            <Controller
                                key={current.question}
                                control={control}
                                name={current.id}
                                rules={{ required: true }}
                                render={({ field: { onChange, value } }) => (
                                    <ExamsTest
                                        description={current.description ?? ''}
                                        onChange={onChange}
                                        isShow={isShow}
                                        question={current.question}
                                        answer={current.answer}
                                        value={value ?? ''}
                                    />
                                )}
                            />
                        ))}
                    {test.type === 'insert' &&
                        test.list.map((current) => (
                            <Controller
                                key={current.question}
                                control={control}
                                name={current.id}
                                defaultValue={current.answer.map(() => ({
                                    textUser: '',
                                }))}
                                render={({ field: { onChange, value } }) => (
                                    <TestText
                                        isShow={isShow}
                                        question={current.question}
                                        onChange={onChange}
                                        answer={current.answer}
                                        value={value ?? ''}
                                    />
                                )}
                            />
                        ))}
                    {test.type === 'question' &&
                        test.list.map((current) => (
                            <Controller
                                key={current.question}
                                control={control}
                                name={current.id}
                                defaultValue=''
                                render={({ field: { onChange, value } }) => (
                                    <TestQuestion
                                        isShow={isShow}
                                        description={current.description ?? ''}
                                        question={current.question}
                                        onChange={onChange}
                                        value={value}
                                        answer={current.answer}
                                    />
                                )}
                            />
                        ))}
                    {
                        test.type === 'text' &&
                        <div className={s.list__wrapper}>
                            {
                                test.list.map(current => (
                                    <CardText key={current.id} question={current.question} />
                                ))
                            }
                        </div>
                    }
                    {
                        test.type === 'select' ? (
                            <div className={s.buttons}>
                                <RestartButton
                                    onClick={() => {
                                        reset(), setIshow(false);
                                    }}
                                    type='button'
                                    text={'Пройти заново'}
                                />
                                <ButtonShow type='submit' isShow={isShow} />
                                <CorrectParagraf
                                    correctAnswer={isShow ? correctAnswer! : ''}
                                    total={test.list.length}
                                />
                            </div>
                        ) : test.type != 'text' && (
                            <div className={s.buttons}>
                                <RestartButton
                                    onClick={() => {
                                        reset(), setIshow(false);
                                    }}
                                    type='button'
                                    text={'Пройти заново'}
                                />
                                <ButtonShow type='submit' isShow={isShow} />
                            </div>
                        )
                    }
                </div>
            </form>
        );
    };

    return (
        <div className={s.info}>
            {tests.map((current) => (
                <ItemExamsForm key={current.title} test={current} />
            ))}
        </div>
    );
}
