import { Toaster } from 'react-hot-toast';

import './globals.scss';
import { RootProvider } from './providers';
import React from 'react';
import { SessionFetcher } from '@/modules';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ru'>
            <body>
                <RootProvider>
                    <SessionFetcher />
                    {children}
                    <Toaster />
                </RootProvider>
            </body>
        </html>
    );
}
