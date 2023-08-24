'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import { SessionProvider } from '@/modules';

type Props = {
    children?: React.ReactNode;
};

export const RootProvider = ({ children }: Props) => {
    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        >
            <SessionProvider>{children}</SessionProvider>
        </GoogleOAuthProvider>
    );
};
