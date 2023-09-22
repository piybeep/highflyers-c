import { ExamsItem } from '@/types/exams.types';

export interface EXAMS_EGE_PROPS {
    title: string;
    group: string;
    tag: string;
}

export const EXAMS_EGE: EXAMS_EGE_PROPS[] = [
    {
        title: 'Монолог',
        group: 'Чтение',
        tag: 'Устная часть',
    },
    {
        title: 'Задание 1',
        group: 'Аудирование',
        tag: 'Письменная часть',
    },
    {
        title: 'Задание 3-9',
        group: 'Аудирование',
        tag: 'Письменная часть',
    },
    {
        title: 'Задание 10',
        group: 'Вопросы',
        tag: 'Письменная часть',
    },
    {
        title: 'Задание 2',
        group: 'Аудирование',
        tag: 'Письменная часть',
    },
    {
        title: 'Задание 12-18',
        group: 'Вопросы',
        tag: 'Письменная часть',
    },
    {
        title: 'Задание 19-24',
        group: 'Грамматика и лексика',
        tag: 'Письменная часть',
    },
    {
        title: 'Задание 11',
        group: 'Вопросы',
        tag: 'Письменная часть',
    },
    {
        title: 'Задание 30-36',
        group: 'Грамматика и лексика',
        tag: 'Письменная часть',
    },
    {
        title: 'Задание 37',
        group: 'Письменная речь',
        tag: 'Письменная часть',
    },
    {
        title: 'Задание 25-29',
        group: 'Грамматика и лексика',
        tag: 'Письменная часть',
    },
    {
        title: 'Чтение текста',
        group: 'Чтение',
        tag: 'Устная часть',
    },
    {
        title: 'Вопросы',
        group: 'Чтение',
        tag: 'Устная часть',
    },
    {
        title: 'Задание 38.1 и 38.2',
        group: 'Письменная речь',
        tag: 'Письменная часть',
    },
    {
        title: 'Интервью',
        group: 'Чтение',
        tag: 'Устная часть',
    },
];

export const itemExams: ExamsItem = {
    id: '1',
    name: 'Речевые обороты',
    tags: [
        {
            id: '1',
            name: 'theme_1',
            value: 'tema',
        },
        {
            id: '1',
            name: 'theme_2',
            value: 'tema',
        },
    ],
    tests: [
        {
            type: 'select',
            title: 'Exercise 2. Multiple-choice exercise. Choose the correct one.',
            subtitle: 'test subtitle',
            list: [
                {
                    id: '1',
                    question:
                        '1. What is the name of the film mentioned in the video?',
                    answer: [
                        {
                            text: 'Jesus of Paris',
                            isRight: false,
                        },
                        {
                            text: 'Jesus of Montreal',
                            isRight: true,
                        },
                        {
                            text: 'Jesus of Quebec',
                            isRight: false,
                        },
                        {
                            text: 'Jesus of Toronto',
                            isRight: false,
                        },
                    ],
                },
                {
                    id: '2',
                    question:
                        '2. What is the scene closest to the end of the film where the characters have to speak English?',
                    answer: [
                        {
                            text: 'They go to a French-speaking hospital',
                            isRight: false,
                        },
                        {
                            text: 'They go to an Anglophone hospital',
                            isRight: true,
                        },
                        {
                            text: 'They go to a bilingual hospital',
                            isRight: false,
                        },
                        {
                            text: `They don't go to a hospital`,
                            isRight: false,
                        },
                    ],
                },
            ],
        },
        {
            type: 'select',
            title: 'Exercise 3. Multiple-choice exercise. Choose the correct one.',
            list: [
                {
                    id: '1test',
                    question:
                        'Can you take it to the {?}? Peter is in there, cooking dinner.',
                    description: 'Choose the correct one',
                    isSeveral: false,
                    answer: [
                        {
                            text: 'Jesus of Paris',
                            isRight: false,
                        },
                        {
                            text: 'Jesus of Montreal',
                            isRight: true,
                        },
                        {
                            text: 'Jesus of Quebec',
                            isRight: false,
                        },
                        {
                            text: 'Jesus of Toronto',
                            isRight: false,
                        },
                    ],
                },
                {
                    id: '2test',
                    question:
                        'Can you take it to the {?}? Peter is in there, cooking dinner. isSeveral-more',
                    isSeveral: true,
                    answer: [
                        {
                            text: 'variant_1',
                            isRight: true,
                        },
                        {
                            text: 'variant_2',
                            isRight: false,
                        },
                        {
                            text: 'variant_3',
                            isRight: false,
                        },
                        {
                            text: 'variant_4',
                            isRight: false,
                        },
                    ],
                },
            ],
        },

        {
            type: 'text',
            title: 'Exercise 4. Multiple-choice exercise. Choose the correct one.',
            list: [
                {
                    id: '1test',
                    question: `Translators' Notices The language I'm speaking right now is on its way to becoming the world's {1} {2} for better or for worse. Let's face it, it's the language {3} of the internet, it's the language of finance, {4} it's the language of air traffic control, of public transportation, of the internet of things, and it's the language of the internet of people. It's the language of the internet of people. It's the language of air traffic control, of popular music, diplomacy. English is everywhere. Now, Mandarin Chinese more people, but more Chinese people are learning English than English speakers are learning Chinese. Last I heard, there are two dozen universities in China right now teaching all in English. English is . And in addition to that, it's been that at the end of the century, almost all of the languages that now, there are about 6,000, will no longer be spoken.`,
                    isSeveral: false,
                    answer: [
                        {
                            text: 'Jesus',
                        },
                        {
                            text: 'of',
                        },
                        {
                            text: 'Quebec',
                        },
                        {
                            text: 'ququmber',
                        },
                    ],
                },
            ],
        },

        {
            type: 'question',
            title: 'Exercise 5. Multiple-choice exercise. Choose the correct one.',
            list: [
                {
                    id: '1test',
                    question:
                        'Can you take it to the patry? Peter is in there, cooking dinner.',
                    isSeveral: false,
                    answer: [
                        {
                            text: `English is becoming the world's universal language and is used in various fields such as finance, air traffic control, popular music, and diplomacy.`,
                        },
                    ],
                },
            ],
        },
    ],
};
