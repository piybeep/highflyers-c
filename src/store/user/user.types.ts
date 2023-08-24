interface currentUser {
    id: string;
    first_name: string;
    second_name: string;
    email: string;
    isAdmin: boolean;
}

type Status = 'unauthenticated' | 'loading' | 'authenticated';

export interface userProps {
    user: currentUser | null;
    accessToken?: string;
    refreshToken?: string;
    setUser: (user: currentUser | null) => void;
    status: Status;
    setStatus: (status: Status) => void;
}
