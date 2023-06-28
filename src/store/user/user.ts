import api from "@/api";
import { create } from "zustand";

export const useUser = create((set) => ({
    user: null,
    isAuth: false,
    setIsAuth: () => {
        api.get(`${process.env.NEXT_PUBLIC_HOST}/auth/refresh`)
            .then((data) => {
                set((state: any) => {
                    return { isAuth: true, user: data.data }
                })
            }).catch((error) => {
                return { isAuth: false, user: null }
            })
    }
}))