import api from "@/api";
import { create } from "zustand";

import { userProps } from "./user.types";

const apiHost = process.env.NEXT_PUBLIC_HOST

export const useUser = create<userProps>((set) => ({
    user: null,
    isAuth: api.get(`${apiHost}/auth/refresh`)
        .then((response) => {
            return true
        }).catch(() => {
            return false
        }),
}))