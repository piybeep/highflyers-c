import { useSearchParams } from "next/navigation"
import { useCallback } from "react"

export const useMutateQuery = () => {
    const searchParams = useSearchParams()
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

    return { mutateQueryString }
}