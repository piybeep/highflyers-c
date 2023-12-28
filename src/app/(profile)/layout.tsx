import { PropsWithChildren } from 'react';

import s from './layout.module.scss';
import { Footer, Header } from '@/modules';
import axios from 'axios';
import { cookies } from 'next/headers';

export default async function layout({ children }: PropsWithChildren) {
    const token = cookies().get('token')?.value
    const user = await axios.get(`${process.env.NEXT_PUBLIC_HOST}users/me`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => console.error(error))

    return (
        <div className={s.wrapper}>
            <Header isAuth={!!user} />
            <div className={s.wrapper__content}>{children}</div>
            <Footer isAuth={!!user} />
        </div>
    );
}
