import { Toaster } from "react-hot-toast";

import "./globals.scss";
import { GoogleAuthProvider } from "./providers";
import React from "react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
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
