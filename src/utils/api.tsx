import axios from "axios";

export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST,
    headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
    }
});