import { NextRequest, NextResponse } from 'next/server';

import { randomBytes } from 'crypto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: NextRequest) {
    const data = await request.json();
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/auth`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password,
        }),
    });
    const dataRes = await res.json();

    if (res.ok) {
        const existingUser = await prisma.user.findFirst({
            where: { idUser: dataRes.user.id },
        });
        const token = randomBytes(16).toString('hex');
        if (existingUser) {
            await prisma.user.update({
                where: {
                    idUser: dataRes.user.id,
                },
                data: {
                    accessToken: dataRes.accessToken,
                    refreshToken: dataRes.refreshToken,
                    idToken: token,
                },
            });
        } else {
            await prisma.user.create({
                data: {
                    idUser: dataRes.user.id,
                    accessToken: dataRes.accessToken,
                    refreshToken: dataRes.refreshToken,
                    idToken: token,
                },
            });
        }
        return new Response(JSON.stringify({ user: dataRes.user }), {
            status: 200,
            headers: {
                'Set-Cookie': `token=${token}; path=/; expires=${new Date(
                    Date.now() + 1000 * 60 * 60 * 24 * 30,
                ).toUTCString()}`,
                'Content-Type': `application/json; charset=utf-8`,
            },
        });
    } else {
        return NextResponse.json(dataRes, { status: res.status });
    }
}
