import classNames from 'classnames';
import s from './ExamsTest.module.scss';
import { ExamsTestProps } from './ExamsTest.types';
import { TestLayout } from '@/layout';

export function ExamsTest({
    question,
    description,
    answer,
    onChange,
    value,
    isShow,
}: ExamsTestProps) {
    return (
        <TestLayout>
            {description && <p>{description}</p>}
            <h3 className={s.title}>{question.replace('{?}', '______')}</h3>
            <div className={s.list}>
                {answer.map((current) => (
                    <label
                        key={current.text}
                        onClick={() => {
                            !isShow &&
                                onChange({
                                    text: current.text,
                                    isRight: current.isRight ?? true,
                                });
                        }}
                        className={classNames(s.list__button, {
                            [s.list__button_hover]: !isShow,
                            [s.list__button_select]:
                                !isShow && value.text === current.text,
                            [s.list__button_correct]:
                                isShow && current.isRight == true,
                            [s.list__button_incorrect]:
                                isShow &&
                                value.isRight != true &&
                                value.text === current.text,
                        })}
                    >
                        <input
                            type='radio'
                            required
                            name={question}
                            onChange={() =>
                                onChange({
                                    text: current.text,
                                    isRight: current.isRight ?? true,
                                })
                            }
                            checked={value.text === current.text ? true : false}
                            className={s.list__radio}
                            disabled={isShow}
                        />
                        {current.text}
                    </label>
                ))}
            </div>
        </TestLayout>
    );
}
