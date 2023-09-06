'use client'

import { GradientLink, Title } from '@/components';

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import s from './Started.module.scss'
import { SLIDER__WORDS } from '@/constants/started';

export function Started() {
    return (
        <div className={s.wrapper}>
            <div className={s.info}>
                <Title text={'Начните изучать английский быстро и просто'} />
                <p className={s.info__description}>
                    <span>Highflyers - это платформа с большим количеством полезных материалов как для студентов, так и для преподавателей.</span>
                    <span>Мы предоставляем материалы, по которым вы можете изучать английский язык. На удобной и современной платформе вам доступны обучающие карточки, полезные статьи для изучения лексики, планы уроков для преподавателей, материалы для подготовки к экзаменам и многое другое.</span>
                    <span>После регистрации вы получите доступ к одному разделу для обучения бесплатно.</span>
                </p>
                <GradientLink text={'Попробовать бесплатно'} />
            </div>
            <Swiper
                spaceBetween={7}
                slidesPerView={3}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                allowTouchMove={false}
                loop
                direction='vertical'
                className={s.slider}
            >
                {
                    SLIDER__WORDS.map(current => (
                        <SwiperSlide key={current} className={s.slider__slide}>{current}</SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};