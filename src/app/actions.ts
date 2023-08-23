'use server'

import { cookies } from 'next/headers'

export async function setCokies(token: any) {
    // cookies().set('token', token)
    console.log('Token вот он >> ', token)
}