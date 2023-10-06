export interface CHECKLISTS_LITERATULE_PROPS {
    title: string;
    materials: CHECKLISTS_ELEMENT[];
}

interface CHECKLISTS_ELEMENT {
    title: string;
    subtitle?: string;
    link: string;
}

export const CHECKLISTS_LITERATULE = [
    {
        title: 'Книги',
        materials: [
            {
                title: 'Над пропастью во ржи',
                subtitle: 'Джером Сэлинджер',
                link: '#',
            },
            {
                title: 'В дороге',
                subtitle: 'Джек Керуак',
                link: '#',
            },
            {
                title: 'Гордость и предубеждение',
                subtitle: 'Джейн Остин',
                link: '#',
            },
            {
                title: 'Форрест Гамп',
                subtitle: 'Джон Эскотт',
                link: '#',
            },
            {
                title: 'Приключения Шерлока Холмса',
                subtitle: 'Артур Конан Дойль',
                link: '#',
            },
            {
                title: 'По ком звонит колокол',
                subtitle: 'Эрнест Хемингуэй',
                link: '#',
            },
            {
                title: 'Великий Гэтсби',
                subtitle: 'Фрэнсис Скотт Фицджеральд',
                link: '#',
            },
            {
                title: 'Портрет Дориана Грея',
                subtitle: 'Оскар Уайльд',
                link: '#',
            },
        ],
    },
    {
        title: 'Подкасты (iTunes)',
        materials: [
            {
                title: 'Learn English Podcasts от British Council',
                link: '#',
            },
            {
                title: 'Voice of America: Learning English',
                link: '#',
            },
            {
                title: '6-Minute English',
                link: '#',
            },
            {
                title: 'The English We Speak',
                link: '#',
            },
            {
                title: 'Podcasts in English',
                link: '#',
            },
            {
                title: 'This American Life',
                link: '#',
            },
            {
                title: 'Science Friday',
                link: '#',
            },
        ],
    },
    {
        title: 'YotTube-каналы',
        materials: [
            {
                title: 'Puzzle English',
                link: '#',
            },
            {
                title: 'Albert Kakhnovskiy',
                link: '#',
            },
            {
                title: 'Английский как по нотам',
                link: '#',
            },
            {
                title: 'Канал Ирины Шипиловой — Мовсесян',
                link: '#',
            },
            {
                title: 'Инглиш Шоу',
                link: '#',
            },
            {
                title: 'Oxana Dolinka',
                link: '#',
            },
            {
                title: 'Английский с TreeWords',
                link: '#',
            },
            {
                title: 'Real English',
                link: '#',
            },
            {
                title: 'British Council: Learn English Kids',
                link: '#',
            },
        ],
    },
];

export interface CheckListResourcesProps {
    id: string,
    name: string,
    author?: string,
    link: string,
    type: string,
}
export interface CheckListDataProps {
    theme: string,
    points: string[]
    cards: {
        name: string
        resources: CheckListResourcesProps[]
    }[]
}

export const CHECKLISTS_DATA: CheckListDataProps[] = [
    {
        theme: 'Разговоные темы и лексика',
        points: [
            'рекомендации к разговорам',
            'советы к запоминанию новых слов и развитию словарного запаса',
            'синтаксические приемы'
        ],
        cards: [
            {
                name: 'Научная литература',
                resources: [
                    {
                        id: '0',
                        name: 'Разговоные 1',
                        author: 'Автор',
                        link: '#',
                        type: 'книга',
                    },
                    {
                        id: '1',
                        name: 'Разговоные 2',
                        link: '#',
                        type: 'youtube',
                    },
                    {
                        id: '2',
                        name: 'Разговоные 3',
                        link: '#',
                        type: 'подкаст',
                    },
                    {
                        id: '3',
                        name: 'Разговоные 4',
                        link: '#',
                        type: 'подкаст',
                    }
                ]
            }
        ]
    },
    {
        theme: 'Времена',
        points: [
            'рекомендации к разговорам',
            'советы к запоминанию новых слов и развитию словарного запаса',
            'синтаксические приемы',
            'другие полезные ресурсы чтобы улучшить свои знания языка'
        ],
        cards: [
            {
                name: 'Простое прошедшее время',
                resources: [
                    {
                        id: '0',
                        name: 'Времена',
                        author: 'sdfg',
                        link: '#',
                        type: 'youtube',
                    }
                ]
            }
        ]
    }
]