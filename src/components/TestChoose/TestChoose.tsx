'use client';

import { TestLayout } from '@/layout';
import s from './TestChoose.module.scss';
import { TestChooseProps } from './TestChoose.types';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

interface inputsStateProps {
    checked: boolean;
    text: string;
    isRight: boolean;
}

export function TestChoose({
    isShow,
    question,
    answer,
    isSeveral = false,
    onChange,
    value,
}: TestChooseProps) {
    // Логика для проверки выбрал ли пользователь хоть 1 checkbox
    const [isRequered, setIsRequered] = useState(true);
    const [inputs, setInputs] = useState<inputsStateProps[]>([]);

    useEffect(() => {
        if (isSeveral) {
            setInputs(
                answer.map((currentCheckbox) => ({
                    checked: false,
                    text: currentCheckbox.text,
                    isRight: currentCheckbox.isRight,
                })),
            );
        }
    }, []);

    const hangleClickCheckbox = (currentText: any) => {
        inputs.map((currentInput: any) => {
            if (currentInput.text === currentText) {
                currentInput.checked = !currentInput.checked;
            }
        });
        if (
            inputs.filter((currentCheck: any) => currentCheck.checked).length >
            0
        ) {
            setIsRequered(false);
        } else {
            setIsRequered(true);
        }
    };
    // Логика для проверки выбрал ли пользователь хоть 1 checkbox

    return (
        <TestLayout>
            {!isSeveral && <p className={s.slogan}>Choose the correct one</p>}
            <h2 className={s.title}>{question.replace('{}?', '______?')}</h2>
            <div className={s.list}>
                {answer.map((currentAnswer) => (
                    <label
                        key={currentAnswer.text}
                        onClick={() => {
                            if (!isShow) {
                                if (!isSeveral) {
                                    onChange({
                                        text: currentAnswer.text,
                                        isRight: currentAnswer.isRight,
                                    });
                                } else {
                                    onChange(
                                        // Пока не знаю как пофиксить
                                        inputs
                                            .filter(
                                                (currentInput: {
                                                    checked: any;
                                                }) => currentInput.checked,
                                            )
                                            .map(
                                                (currentInput: {
                                                    checked: any;
                                                    text: any;
                                                    isRight: any;
                                                }) =>
                                                    currentInput.checked && {
                                                        text: currentInput.text,
                                                        isRight:
                                                            currentInput.isRight,
                                                    },
                                            ),
                                    );
                                }
                            }
                        }}
                        // Пока тестовый вариант
                        className={classNames(s.input, {
                            [(s.input__hover, s.input__select)]: !isShow,
                            [s.input__correct]: isShow && currentAnswer.isRight,
                            [s.input__incorrect]:
                                isShow && currentAnswer.text === value.text,
                            [s.input__incorrect_isSeveral]:
                                isShow &&
                                isSeveral &&
                                currentAnswer.isRight === false,
                        })}
                    >
                        {currentAnswer.text}
                        <input
                            required={isRequered}
                            type={isSeveral ? 'checkbox' : 'radio'}
                            disabled={isShow}
                            name={question}
                            className={s.input__checkbox}
                            onClick={() => {
                                isSeveral &&
                                    hangleClickCheckbox(currentAnswer.text);
                            }}
                        />
                    </label>
                ))}
            </div>
        </TestLayout>
    );
}
