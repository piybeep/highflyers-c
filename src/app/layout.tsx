import {Toaster} from "react-hot-toast";

import "./globals.scss";
import {RootProvider} from "./providers";
import React from "react";

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode;
}) {

    // const res = await axios.get(`http://localhost:3000/api/refresh?token=${cookies().get('token')?.value}`, {
    //     validateStatus: function (status) {
    //         return true
    //     },
    //     withCredentials: true,
    // })

    return (
        <html lang="ru">
        <body>
        <RootProvider>
            {children}
        </RootProvider>
        <Toaster/>
        </body>
        </html>
    );
}
