import axios from "axios";
import { cookies } from "next/headers";

const token = cookies().get('token')?.value
export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST,
    headers: {
        Authorization: `Bearer ${token}`
    }
});