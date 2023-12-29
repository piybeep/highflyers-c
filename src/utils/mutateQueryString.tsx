import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';

export const useMutateQuery = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const mutateQueryString = useCallback(
        ({ name, value, rewrite }: { name: string; value: string; rewrite?: boolean }) => {
            const params = new URLSearchParams(searchParams.toString());
            let list = params.has(name) ? params.get(name)!.split(',') : [];
            if (rewrite) {
                params.delete(name)
                list = value?.split(',')
            }
            else {
                if (list.includes(value)) {
                    list.splice(list.indexOf(value), 1);
                } else {
                    list.push(value);
                }
            }
            if (value === '' || list?.length === 0) {
                params.delete(name)
            } else {
                params.set(name, list?.join(','))
            }
            return params
        },
        [searchParams],
    );

    const pushQueryString = (currentValue: string, name: string, rewrite?: boolean) => {
        router.push(
            pathname +
            '?' +
            mutateQueryString({
                // name: 'list',
                name: name,
                value: currentValue,
                rewrite: rewrite
            }),
            { scroll: false },
        );
    };

    return { pushQueryString };
};
