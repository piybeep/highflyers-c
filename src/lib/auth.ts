import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/authorization',
    },
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            id: 'credentials',
            type: 'credentials',
            name: "Sign in",
            credentials: {
                email: {
                    label: 'Почта',
                    type: 'email',
                    placeholder: 'Введите адрес электронной почты',
                },
                password: {
                    label: 'Пароль',
                    type: 'password',
                    placeholder: 'Введите пароль',
                }
            },
            async authorize(credentials) {
                if (credentials?.email && credentials.password) {
                    const response = await axios.put(`${process.env.NEXT_PUBLIC_HOST}/auth`, {
                        email: credentials.email,
                        password: credentials.password
                    });
                    return response.data
                }
                return null
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id ?? token.sub
                }
            }
        },
        jwt: ({ token, user }) => {
            if (user) {
                const data = user as unknown as any
                return {
                    ...token,
                    email: data.user.email,
                    name: `${data.user.first_name ?? ""} ${data.user.second_name ?? ""}`.trim(),
                    id: data.user.id,
                }
            }
            return token
        }
    }
};