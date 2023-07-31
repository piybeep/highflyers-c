import { create } from "zustand";

import { userProps } from "./user.types";

export const useUser = create<userProps>((set) => ({
    user: null,
    isAuth: false,
    setIsAuth: (flag: boolean) => set({isAuth: flag}),
    setUser: (user) => set({user}, true),
    /*api.get(`${apiHost}/auth/refresh`)
        .then((response) => {
            return true
        }).catch(() => {
            return false
        }),*/
}))
