'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';

type Props = {
    children?: React.ReactNode;
};

export const RootProvider = ({ children }: Props) => {
    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        >
            {children}
        </GoogleOAuthProvider>
    );
};
