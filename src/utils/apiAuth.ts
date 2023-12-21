import axios from "axios";
import { cookies } from "next/headers";

export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST,
    headers: {
        Authorization: `Bearer ${cookies().get('token')?.value}`
    }
});