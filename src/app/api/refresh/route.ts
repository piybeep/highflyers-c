import { PrismaClient } from "@prisma/client"
import { randomBytes } from "crypto"
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient()

export async function GET(request: NextRequest, response: NextResponse) {
    console.log(request)
    const token = new URL(request.url).searchParams.get('token')
    const existingUser = await prisma.user.findFirst({
        where: {
            idToken: token!
        }
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/auth/refresh`, {
        headers: {
            'Authorization': `Bearer ${existingUser?.refreshToken}`
        }
    })

    const dataRes = await res.json()
    if (res.ok) {
        if (existingUser) {
            const token = randomBytes(16).toString('hex')
            await prisma.user.update({
                where: {
                    idUser: dataRes.user.id
                },
                data: {
                    accessToken: dataRes.accessToken,
                    refreshToken: dataRes.refreshToken,
                    idToken: token
                }
            })
        } else {
            const token = randomBytes(16).toString('hex')
            await prisma.user.create({
                data: {
                    idUser: dataRes.user.id,
                    accessToken: dataRes.accessToken,
                    refreshToken: dataRes.refreshToken,
                    idToken: token
                }
            })
        }
        const new_token = (await prisma.user.findFirst({
            where: {
                idUser: dataRes.user.id
            },
            select: {
                idToken: true
            }
        }))?.idToken
        return new Response(JSON.stringify({ user: dataRes.user, token: new_token }), {
            status: 200,
            headers: {
                'Set-Cookie': `token=${new_token}; path=/; expires=${new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toUTCString()}`,
                'Content-Type': `application/json; charset=utf-8`,
            },
        })
    } else {
        return NextResponse.json(dataRes, { status: res.status })
    }
}
