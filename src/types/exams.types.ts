export interface ExamsItem {
    id: string
    name: string
    tags: Tags[]
    tests: ExamsTests[]
}

export interface ExamsTests {
    title: string
    type: 'test' | 'testInput' | 'testCheckbox' | 'testInputs'
    list: Test[]
}

export interface Test {
    id: string
    question: string
    isSeveral?: boolean
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