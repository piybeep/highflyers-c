export interface ExamsItem {
    id: string
    name: string
    tags: Tags[]
    tests: ExamsTests[]
}

export interface ExamsTests {
    title: string
    list: Test[]
}

export interface Test {
    id: string
    question: string
    answer: {
        text: string
        isRight: boolean
    }[]
}

export interface Tags {
    id: string,
    name: string,
    value: string,
}