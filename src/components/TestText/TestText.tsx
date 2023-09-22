'use client';

import { Fragment, useEffect, useState } from 'react';

import s from './TestText.module.scss';
import { TestLayout } from '@/layout';
import { TestTextProps } from './TestText.types';

interface inputsStateProps {
    textUser: string;
    textTest: string;
    index: number;
    isRight: boolean;
}

export function TestText({
    question,
    isShow,
    onChange,
    answer,
    value,
}: TestTextProps) {
    const [inputs, setInputs] = useState<inputsStateProps[]>([]);

    useEffect(() => {
        setInputs(
            answer.map((currentInput, index) => ({
                textUser: value[index].textUser,
                textTest: currentInput.text,
                index: index,
                isRight: true,
            })),
        );
    }, [value]);

    const handleChangeInput = (index: number, clientText: string) => {
        inputs.map((currentInput) => {
            if (currentInput.index === index) {
                currentInput.textUser = clientText;
            }
        });
    };

    let questionArray = question.split(/\{\d+\}/gi);
    return (
        <TestLayout>
            <div className={s.question}>
                {questionArray.map((currentQuestion, index) => (
                    <Fragment key={index}>
                        {currentQuestion}
                        {questionArray.length - 1 != index && (
                            <span className={s.question__container}>
                                <input
                                    placeholder='Test'
                                    disabled={isShow}
                                    className={s.question__input}
                                    onChange={(e) => {
                                        handleChangeInput(
                                            index,
                                            e.target.value,
                                        );
                                        onChange(inputs);
                                    }}
                                    value={value[index].textUser}
                                    required
                                    type='text'
                                />
                                <span className={s.question__span}>
                                    ({index + 1})
                                </span>
                            </span>
                        )}
                    </Fragment>
                ))}
            </div>
            <div className={s.answers}>
                {isShow &&
                    answer.map((currentAnswer, index) => (
                        <p className={s.answers__text} key={currentAnswer.text}>
                            {index + 1}. {currentAnswer.text}
                        </p>
                    ))}
            </div>
        </TestLayout>
    );
}
