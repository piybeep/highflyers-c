'use client';

import { Recovery, Submit } from '@/modules';
import { useState } from 'react';
import Head from 'next/head';

export default function Page() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    return (
        <>
            <Head>
                <title>Восстановление пароля - Highflyers</title>
            </Head>
            <Submit isSubmitted={isSubmitted} />
            <Recovery
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
            />
        </>
    );
}
