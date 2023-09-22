import { TestLayout } from '@/layout';
import s from './TestQuestion.module.scss';
import { TestQuestionProps } from './TestQuestion.types';

export function TestQuestion({
    description,
    question,
    onChange,
    value,
    answer,
    isShow,
}: TestQuestionProps) {
    return (
        <TestLayout>
            {description && <p className={s.decription}>{description}</p>}
            <h2 className={s.title}>{question}</h2>
            <input
                placeholder='Your answer here...'
                type='text'
                required
                disabled={isShow}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                className={s.input}
            />
            {isShow && (
                <div className={s.list}>
                    {answer.map((current) => (
                        <p key={current.text} className={s.list__answer}>
                            {current.text}
                        </p>
                    ))}
                </div>
            )}
        </TestLayout>
    );
}
