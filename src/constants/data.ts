import img from '../../public/img/cover.png';

export interface TedTalksProps {
    id: string;
    name: string;
    theme: string;
    read_time: string;
    link: string;
    preview: string;
    tags: TedTalksTags[];
}

export interface TedTalksTags {
    id: string;
    name: string;
    value: string;
}

export interface LearningListProps {
    id: string;
    title: string;
    available: boolean;
    materials: ElementLearningProps[];
}

export interface ElementLearningProps {
    id: string;
    title: string;
    time: string;
    img: string;
}

export const dataTedTalks: TedTalksProps[] = [
    {
        id: '1',
        theme: 'Грамматика',
        name: 'Правильные и неправильные глаголы',
        read_time: '50 минут',
        link: '#',
        preview: img.src,
        tags: [
            {
                id: '1',
                name: '# about language',
                value: '# about language',
            },
            {
                id: '2',
                name: 'about language',
                value: 'about language',
            },
        ],
    },
    {
        id: '2',
        theme: 'Фонетика',
        name: 'Правильные и неправильные глаголы',
        read_time: '50 минут',
        link: '#',
        preview: img.src,
        tags: [
            {
                id: '1',
                name: '# about language',
                value: '# about language',
            },
            {
                id: '2',
                name: 'about language',
                value: 'about language',
            },
        ],
    },
    {
        id: '3',
        theme: 'Фонетика',
        name: 'Правильные и неправильные глаголы',
        read_time: '50 минут',
        link: '#',
        preview: img.src,
        tags: [
            {
                id: '1',
                name: '# about language',
                value: '# about language',
            },
            {
                id: '2',
                name: 'about language',
                value: 'about language',
            },
        ],
    },
    {
        id: '4',
        theme: 'Грамматика',
        name: 'Правильные и неправильные глаголы',
        read_time: '50 минут',
        link: '#',
        preview: img.src,
        tags: [
            {
                id: '1',
                name: '# about language',
                value: '# about language',
            },
            {
                id: '2',
                name: 'about language',
                value: 'about language',
            },
        ],
    },
];

export const dataLearning: LearningListProps[] = [
    {
        id: '0',
        title: 'B1',
        available: true,
        materials: [
            {
                id: '0',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '1',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '2',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '3',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '4',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '5',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
        ],
    },
    {
        id: '0',
        title: 'C1',
        available: false,
        materials: [
            {
                id: '0',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '1',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '2',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '3',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '4',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
        ],
    },
    {
        id: '0',
        title: 'C2',
        available: false,
        materials: [
            {
                id: '0',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '1',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '2',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '3',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '4',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '5',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '6',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
            {
                id: '7',
                title: 'Правильные и неправильные глаголы',
                time: '50 минут',
                img: img.src,
            },
        ],
    },
];
