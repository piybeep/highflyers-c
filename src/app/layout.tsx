import { Toaster } from "react-hot-toast";

import "./globals.scss";
import { GoogleAuthProvider } from "./providers";
import React from "react";
import axios from "axios";
import { cookies } from "next/headers";

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	const res = await axios.get(`http://localhost:3000/api/refresh?token=${cookies().get('token')?.value}`, {
		validateStatus: function (status) {
			return true
		},
	})
	console.log(res.data)

	return (
		<html lang="ru">
			<body>
				<GoogleAuthProvider>
					{children}
				</GoogleAuthProvider>
				<Toaster />
			</body>
		</html>
	);
}