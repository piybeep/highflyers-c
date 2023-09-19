import { ExamsItem } from "@/types/exams.types"

export interface EXAMS_EGE_PROPS {
    title: string
    group: string
    tag: string
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
]

export const itemExams: ExamsItem = {
    id: '1',
    name: 'Речевые обороты',
    tags: [
        {
            id: '1',
            name: 'theme_1',
            value: 'tema'
        },
        {
            id: '1',
            name: 'theme_2',
            value: 'tema'
        }
    ],
    tests: [
        {
            type: 'test',
            title: 'Exercise 2. Multiple-choice exercise. Choose the correct one.',
            list: [
                {
                    id: '1',
                    question: '1. What is the name of the film mentioned in the video?',
                    answer: [
                        {
                            text: 'Jesus of Paris',
                            isRight: false
                        },
                        {
                            text: 'Jesus of Montreal',
                            isRight: true
                        },
                        {
                            text: 'Jesus of Quebec',
                            isRight: false
                        },
                        {
                            text: 'Jesus of Toronto',
                            isRight: false
                        },
                    ]
                },
                {
                    id: '2',
                    question: '2. What is the scene closest to the end of the film where the characters have to speak English?',
                    answer: [
                        {
                            text: 'They go to a French-speaking hospital',
                            isRight: false
                        },
                        {
                            text: 'They go to an Anglophone hospital',
                            isRight: true
                        },
                        {
                            text: 'They go to a bilingual hospital',
                            isRight: false
                        },
                        {
                            text: `They don't go to a hospital`,
                            isRight: false
                        }
                    ]
                }
            ]
        },
        {
            type: 'testCheckbox',
            title: 'Exercise 3. Multiple-choice exercise. Choose the correct one.',
            list: [
                {
                    id: '1',
                    question: 'Can you take it to the {}? Peter is in there, cooking dinner.',
                    isSeveral: false,
                    answer: [
                        {
                            text: 'Jesus of Paris',
                            isRight: false
                        },
                        {
                            text: 'Jesus of Montreal',
                            isRight: true
                        },
                        {
                            text: 'Jesus of Quebec',
                            isRight: false
                        },
                        {
                            text: 'Jesus of Toronto',
                            isRight: false
                        },
                    ]
                },
                {
                    id: '2',
                    question: 'Can you take it to the {}? Peter is in there, cooking dinner. isSeveral-more',
                    isSeveral: true,
                    answer: [
                        {
                            text: 'variant_1',
                            isRight: true
                        },
                        {
                            text: 'variant_2',
                            isRight: true
                        },
                        {
                            text: 'variant_3',
                            isRight: false
                        },
                        {
                            text: 'variant_4',
                            isRight: false
                        },
                    ]
                },
            ]
        }
    ]
}