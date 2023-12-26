import { Toaster } from 'react-hot-toast';

import './globals.scss';
import { RootProvider } from './providers';
import React, { Suspense } from 'react';
// import { SessionFetcher } from '@/modules';
import Loading from './loading';
import apiAuth from '@/utils/apiAuth';
import { useUser } from '@/store';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    await apiAuth.get(`users/me?populate=*`)
        .then(res => {
            useUser.setState({ user: res.data })
        })
        .catch(error => console.error(error))
    return (
        <html lang='ru'>
            <body>
                <Suspense fallback={<Loading />}>
                    <RootProvider>
                        {/* <SessionFetcher /> */}
                        {children}
                        <Toaster />
                    </RootProvider>
                </Suspense>
            </body>
        </html>
    );
}
