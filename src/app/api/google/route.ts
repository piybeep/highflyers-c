import { PrismaClient } from '@prisma/client';
import { randomBytes } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const data = await request.json();

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/auth/google`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: data.token,
        }),
    });

    const dataRes = await res.json();
    if (res.ok) {
        const existingUser = await prisma.user.findFirst({
            where: { idUser: dataRes.user.id },
        });
        const randomToken = randomBytes(16).toString('hex');
        if (existingUser) {
            await prisma.user.update({
                where: {
                    idUser: dataRes.user.id,
                },
                data: {
                    accessToken: dataRes.accessToken,
                    refreshToken: dataRes.refreshToken,
                    idToken: randomToken,
                },
            });
        } else {
            await prisma.user.create({
                data: {
                    accessToken: dataRes.accessToken,
                    refreshToken: dataRes.refreshToken,
                    idToken: randomToken,
                    idUser: dataRes.user.id,
                },
            });
        }
        return new Response(JSON.stringify({ user: dataRes.user }), {
            status: 200,
            headers: {
                'Set-Cookie': `token=${randomToken}; path=/; expires=${new Date(
                    Date.now() + 1000 * 60 * 60 * 24 * 30,
                ).toUTCString()}`,
                'Content-Type': `application/json; charset=utf-8`,
            },
        });
    } else {
        return NextResponse.json(res, { status: res.status });
    }
}
