'use client';

import { useEffect } from 'react';
import { useUser } from '@/store';
import axios from 'axios';

export function SessionFetcher() {
    // const setUser = useUser((state) => state.setUser);
    // const setStatus = useUser((state) => state.setStatus);

    useEffect(() => {
        // setStatus('loading');
        // axios
        //     .get('/api/refresh', { withCredentials: true })
        //     .then((res) => {
        //         setUser(res.data.user);
        //         setStatus('authenticated');
        //     })
        //     .catch(() => {
        //         setUser(null);
        //         setStatus('unauthenticated');
        //     });
    }, []);

    return null;
}
