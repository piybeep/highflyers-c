export interface currentUser {
    id: number
    level?: string[]
    username: string
    email: string
    lesson_plans: {
        id: number,
        level: string,
        name: string,
        time: number,
        isFree: boolean,
    }[]
    check_lists: {
        id: number,
        title: string,
    }[]
}

export interface userProps {
    user: currentUser | null;
    setUser: (user: currentUser | null) => void;
}
