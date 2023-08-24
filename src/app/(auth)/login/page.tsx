import { Authorization } from '@/modules';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Авторизация - Highflyers',
};

export default function authorizationPage() {
    return <Authorization />;
}
