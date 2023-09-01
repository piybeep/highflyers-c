import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useCallback } from "react"

export const useMutateQuery = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const mutateQueryString = useCallback(({ name, value }: { name: string, value: string }) => {
        const params = new URLSearchParams(searchParams.toString())
        const list = params.has(name) ? params.get(name)!.split(',') : []
        if (list.includes(value)) {
            list.splice(list.indexOf(value), 1)
        } else {
            list.push(value)
        }
        return `${name}=${list.join(',')}`;
    }, [searchParams])

    const pushQueryString = (currentValue: string) => {
        router.push(pathname + '?' + mutateQueryString({
            name: 'list',
            value: currentValue
        }), { scroll: false })
    }

    return { pushQueryString }
}