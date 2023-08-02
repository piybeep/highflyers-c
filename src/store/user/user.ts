import { create } from "zustand";

import { userProps } from "./user.types";

export const useUser = create<userProps>((set) => ({
    user: null,
    isAuth: false,
    setIsAuth: (flag: boolean) => set({ isAuth: flag }),
    setUser: (user) => set({ user }, true),
}))
