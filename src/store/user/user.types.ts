interface currentUser {
    id: string,
    first_name: string,
    secondName: string,
    email: string,
    isAdmin: boolean
}

export interface userProps {
    user: currentUser,
    accessToken: string,
    refreshToken: string,
    isAuth: boolean
}