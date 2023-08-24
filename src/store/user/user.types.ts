interface currentUser {
    id: string;
    first_name: string;
    secondName: string;
    email: string;
    isAdmin: boolean;
}

export interface userProps {
    user: currentUser | null;
    accessToken?: string;
    refreshToken?: string;
    setUser: (user: currentUser | null) => void;
    status: 'unauthenticated' | 'loading' | 'authenticated';
    setStatus: (
        status: 'unauthenticated' | 'loading' | 'authenticated',
    ) => void;
}
