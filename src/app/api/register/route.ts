import { NextRequest, NextResponse } from 'next/server'

import { userData } from '../../../constants/db'

import { randomBytes } from 'crypto'

export async function POST(request: NextRequest) {
    const data = await request.json()
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/auth`, {
        method: 'POST',
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
        return NextResponse.json(dataRes.user, {
            headers: { 'Set-Cookie': `token=${userData.find((current) => current.idUser === dataRes.user.id)?.idToken}` }
        })
    } else {
        return NextResponse.json(dataRes, { status: res.status })
    }
}