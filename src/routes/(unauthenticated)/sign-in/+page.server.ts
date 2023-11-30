import { fail, redirect } from '@sveltejs/kit';
import { dev } from '$app/environment'
import bcrypt from 'bcryptjs';
import { prisma } from '$lib/prisma';

export const actions = {
    default: async ({ cookies, request }) => {
        const { email, password } = Object.fromEntries(await request.formData());
        try {
            const user = await prisma.user.findUnique({ where: { email } });
            if (user === null) throw `Could not find email`
            if (!bcrypt.compareSync(password, user?.passwordHash)) throw 'Could not verify credentials'
            cookies.set('session_id', user.id, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: !dev,
                maxAge: 60 * 60 * 24 * 7
            })
        } catch (error) {
            return fail(400, { error })
        }
        throw redirect(303, '/dashboard')

    }
}