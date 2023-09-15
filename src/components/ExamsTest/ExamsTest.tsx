import classNames from 'classnames';
import s from './ExamsTest.module.scss'
import { ExamsTestProps } from './ExamsTest.types';

export function ExamsTest({ question, answer, onChange, value, type = 'button', isShow }: ExamsTestProps) {
    return (
        <div className={s.wrapper}>
            <h3 className={s.title}>{question}</h3>
            <div className={s.list}>
                {
                    answer.map(current => (
                        <button
                            key={current.text}
                            type={type}
                            onClick={() => { !isShow && onChange({ text: current.text, isRight: current.isRight }) }}
                            className={classNames(s.list__button, {
                                [s.list__button_hover]: !isShow,
                                [s.list__button_select]: !isShow && value.text === current.text,
                                [s.list__button_correct]: isShow && (current.isRight == true),
                                [s.list__button_incorrect]: isShow && value.isRight != true && value.text === current.text,
                            })}>{current.text}</button>
                    ))
                }
            </div>
        </div >
    );
};