import {userData} from "@/constants/db"
import {randomBytes} from "crypto"
import {NextRequest, NextResponse} from "next/server"

export async function GET(request: NextRequest, response: NextResponse) {
    console.log(request)
    const token = new URL(request.url).searchParams.get('token')
    const existingUser = userData.find(current => token === current.idToken)

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/auth/refresh`, {
        headers: {
            'Authorization': `Bearer ${existingUser?.refreshToken}`
        }
    })

    const dataRes = await res.json()
    if (res.ok) {
        if (existingUser) {
            const token = randomBytes(16).toString('hex')

            existingUser.accessToken = dataRes.accessToken
            existingUser.refreshToken = dataRes.refreshToken
            existingUser.idToken = token
        } else {
            const token = randomBytes(16).toString('hex')
            userData.push({
                idUser: dataRes.user.id,
                accessToken: dataRes.accessToken,
                refreshToken: dataRes.refreshToken,
                idToken: token
            })
        }
        const new_token = userData.find((current) => current.idUser === dataRes.user.id)?.idToken
        return new Response(dataRes.user, {
            status: 200,
            headers: {
                'Set-Cookie': `token=${new_token}; path=/; expires=${new Date(Date.now() + 1000 * 60 * 60 * 24 * 30).toUTCString()}`,
                'Content-Type': `application/json; charset=utf-8`,
            },
        })
    } else {
        return NextResponse.json(dataRes, {status: res.status})
    }
}
