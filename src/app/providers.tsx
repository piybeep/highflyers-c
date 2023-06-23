"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";

type Props = {
  children?: React.ReactNode;
};

export const GoogleAuthProvider = ({ children }: Props) => {
  return <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>{children}</GoogleOAuthProvider>
};