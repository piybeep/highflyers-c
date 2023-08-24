import { MATERIALS_LIST } from '@/constants';
import { Showcase } from '@/modules';

export const metadata = {
    title: 'Highflyers - школа английского языка',
};

export default function Home() {
    const res = MATERIALS_LIST;

    return (
        <main>
            <Showcase materials={res} />
        </main>
    );
}
