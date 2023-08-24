export const NAVIGATION = [
    {
        id: 0,
        text: 'Главная',
        type: 'link',
        link: '/',
    },
    {
        id: 1,
        text: 'Обучение',
        type: 'list',
        link: '/training',
        level: [
            {
                id: 0,
                text: 'a1',
            },
            {
                id: 1,
                text: 'a2',
            },
            {
                id: 2,
                text: 'b1',
            },
            {
                id: 3,
                text: 'b2',
            },
            {
                id: 4,
                text: 'c1',
            },
            {
                id: 5,
                text: 'c2',
            },
        ]
    },
    {
        id: 2,
        text: 'Полезные статьи',
        type: 'link',
        link: '/#',
    },
    {
        id: 3,
        text: 'Планы уроков',
        type: 'link',
        link: '/#',
    },
    {
        id: 4,
        text: 'Чек-листы',
        type: 'link',
        link: '/#',
    },
    {
        id: 5,
        text: 'ОГЭ ЕГЭ',
        type: 'link',
        link: '/#',
    },
    {
        id: 6,
        text: 'TEDTalks',
        img: '/svg/menu/ted.svg',
        type: 'link',
        link: '/#',
    },
    {
        id: 6,
        text: 'Профиль',
        type: 'link',
        link: '/profile',
    }
]

export const NAVIGATION_WITH_AUTH = [
    {
        id: 0,
        text: 'Мои материалы',
        type: 'link',
        link: '/my-materials',
    },
    {
        id: 1,
        text: 'Обучение',
        type: 'list',
        link: '/training',
        level: [
            {
                id: 0,
                text: 'a1',
            },
            {
                id: 1,
                text: 'a2',
            },
            {
                id: 2,
                text: 'b1',
            },
            {
                id: 3,
                text: 'b2',
            },
            {
                id: 4,
                text: 'c1',
            },
            {
                id: 5,
                text: 'c2',
            },
        ]
    },
    {
        id: 2,
        text: 'Полезные статьи',
        type: 'link',
        link: '/#',
    },
    {
        id: 3,
        text: 'Планы уроков',
        type: 'link',
        link: '/#',
    },
    {
        id: 4,
        text: 'Чек-листы',
        type: 'link',
        link: '/#',
    },
    {
        id: 5,
        text: 'ОГЭ ЕГЭ',
        type: 'link',
        link: '/#',
    },
    {
        id: 6,
        text: 'TEDTalks',
        type: 'link',
        img: '/svg/menu/ted.svg',
        link: '/TedTalks',
    },
    {
        id: 6,
        text: 'Профиль',
        type: 'link',
        link: '/profile',
    }
]