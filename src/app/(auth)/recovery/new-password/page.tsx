import { PasswordChange } from '@/modules';

export const metadata = {
    title: 'Новый пароль - Highflyers',
};

export default function page({
    searchParams,
}: {
    searchParams: { id: string; code: string };
}) {
    return (
        <PasswordChange
            userId={searchParams.id}
            resetCode={searchParams.code}
        />
    );
}
