import { create } from "zustand";

import { userProps } from "./user.types";

import { persist } from 'zustand/middleware'

export const useUser = create<userProps>()(persist((set) => ({
    user: null,
    isAuth: false,
    setIsAuth: (flag: boolean) => set({ isAuth: flag }),
    setUser: (user) => set({ user }, true),
}), { name: 'user' }))