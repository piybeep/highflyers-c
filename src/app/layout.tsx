import { Toaster } from 'react-hot-toast';

import './globals.scss';
import { RootProvider } from './providers';
import React, { Suspense } from 'react';
import { SessionFetcher } from '@/modules';
import Loading from './loading';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ru'>
            <body>
                <Suspense fallback={<Loading />}>
                    <RootProvider>
                        <SessionFetcher />
                        {children}
                        <Toaster />
                    </RootProvider>
                </Suspense>
            </body>
        </html>
    );
}
