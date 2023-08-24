import {create} from "zustand";

import {userProps} from "./user.types";

import {devtools, persist} from 'zustand/middleware'

export const useUser = create<userProps>()(devtools(persist((set) => ({
    user: null,
    setUser: (user) => set({user}, true),
    status: "unauthenticated",
    setStatus: (status) => set({status})
}), {
    name: 'user',
    partialize: state => ({user: state.user}),
})))
