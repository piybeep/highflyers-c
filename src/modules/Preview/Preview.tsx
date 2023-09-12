'use client';

import { NAVIGATION__PREVIEW } from '@/constants';
import s from './Preview.module.scss';
import { PreviewLink } from '@/components';
import { createRef } from 'react';

export function Preview() {
    const Links = NAVIGATION__PREVIEW.map((current) => {
        const videoRef = createRef<any>();
        return (
            <div
                className={s.links}
                key={current.title}
                onMouseLeave={() => videoRef.current.pause()}
                onMouseEnter={() => videoRef.current.play()}
            >
                <video
                    ref={videoRef}
                    muted
                    loop
                    className={s.video}
                    src={current.videoHref}
                ></video>
                <PreviewLink title={current.title} href={current.href} />
            </div>
        );
    });

    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <h2 className={s.title}>Обучение английскому языку</h2>
                <p className={s.subtitle}>
                    Предоставляем полезные материалы для разных уровней и целей:
                    для учеников школ, студентов ВУЗов, преподавателей, а также
                    для тех, кто только начинает свой путь в изучении
                    английского языка.{' '}
                </p>
                <div className={s.list}>{Links}</div>
            </div>
            <div className={s.img}></div>
        </div>
    );
}
