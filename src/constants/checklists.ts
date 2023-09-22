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
