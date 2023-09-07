'use client';

import { toast } from 'react-hot-toast';

import { useRouter } from 'next/navigation';

import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import { AuthGoogleProps } from './AuthGoogle.types';
import { useUser } from '@/store';
import { PAGES_LINK } from '@/constants';

export function AuthGoogle({}: AuthGoogleProps) {
    const route = useRouter();
    const setUser = useUser((state) => state.setUser);
    const setStatus = useUser((state) => state.setStatus);
    return (
        <GoogleLogin
            onSuccess={async (credentialResponse) => {
                try {
                    const res = await axios.post('/api/google', {
                        token: credentialResponse.credential,
                    });
                    // setUser(res.data.user)
                    // setStatus('authenticated')
                    route.push(PAGES_LINK.HOME);
                } catch (error) {
                    toast.error('Что-то пошло не так');
                    console.error(error);
                    // setUser(null);
                    // setStatus('unauthenticated');
                }
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    );
}
