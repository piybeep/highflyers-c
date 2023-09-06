import { PrismaClient } from '@prisma/client';
import { randomBytes } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    if (!request.cookies.has('token')) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const existingUser = await prisma.user.findFirst({
        where: {
            idToken: request.cookies.get('token')!.value,
        },
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/auth/refresh`, {
        headers: {
            Authorization: `Bearer ${existingUser?.refreshToken}`,
        },
    });

    const dataRes = await res.json();
    if (res.ok) {
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
