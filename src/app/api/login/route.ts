import { userData } from '@/constants/db'
import { NextRequest, NextResponse } from 'next/server'

import { randomBytes } from 'crypto'

export async function PUT(request: NextRequest) {
    const data = await request.json()
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/auth`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    })
    const dataRes = await res.json()

    if (res.ok) {
        const existingUser = userData.find((current) => current.idUser === dataRes.user.id)
        if (existingUser) {
            const token = randomBytes(16).toString('hex')

            existingUser.accessToken = dataRes.accessToken
            existingUser.refreshToken = dataRes.refreshToken
            existingUser.idToken = token
        } else {
            const token = randomBytes(16).toString('hex')
            userData.push({ idUser: dataRes.user.id, accessToken: dataRes.accessToken, refreshToken: dataRes.refreshToken, idToken: token })
        }
        return new Response(dataRes.user, {
            status: 200,
            headers: { 'Set-Cookie': `token=${userData.find((current) => current.idUser === dataRes.user.id)?.idToken}; Path=/` },
        })
    } else {
        return NextResponse.json(dataRes, { status: res.status })
    }
}