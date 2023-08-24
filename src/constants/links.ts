export const PAGES_LINK = {
    HOME: '/',
    MY_MATERIALS: '/my-materials',
    LEARNING: '/learning',
    ARTICLES: '/articles',
    LESSON_PLANS: '/lesson-plans',
    CHECK_LISTS: '/check-lists',
    EXAMS: '/exams',
    TEDTALKS: '/tedtalks',
    PROFILE: '/profile',
    LOGIN: '/login',
    REGISTER: '/register',
    RECOVERY: '/recovery',
    BUY: '/buy',
};

export const NAVIGATION = [
    {
        id: 1,
        text: 'Обучение',
        type: 'list',
        link: PAGES_LINK.LEARNING,
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
        ],
    },
    {
        id: 2,
        text: 'Полезные статьи',
        type: 'link',
        link: PAGES_LINK.ARTICLES,
    },
    {
        id: 3,
        text: 'Планы уроков',
        type: 'link',
        link: PAGES_LINK.LESSON_PLANS,
    },
    {
        id: 4,
        text: 'Чек-листы',
        type: 'link',
        link: PAGES_LINK.CHECK_LISTS,
    },
    {
        id: 5,
        text: 'ОГЭ ЕГЭ',
        type: 'link',
        link: PAGES_LINK.EXAMS,
    },
    {
        id: 6,
        text: 'TEDTalks',
        img: '/svg/menu/ted.svg',
        type: 'link',
        link: PAGES_LINK.TEDTALKS,
    },
];

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
        ],
    },
    {
        id: 2,
        text: 'Полезные статьи',
        type: 'link',
        link: '/article',
    },
    {
        id: 3,
        text: 'Планы уроков',
        type: 'link',
        link: '/lesson-plans',
    },
    {
        id: 4,
        text: 'Чек-листы',
        type: 'link',
        link: '/check-lists',
    },
    {
        id: 5,
        text: 'ОГЭ ЕГЭ',
        type: 'link',
        link: '/ege',
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
    },
];
