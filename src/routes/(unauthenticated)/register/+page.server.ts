import { fail, redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';
import bcrypt from 'bcryptjs';
import { prisma } from '$lib/prisma';

export const actions = {
	default: async ({ cookies, request }) => {
		const { email, password } = Object.fromEntries(await request.formData());
		const passwordHash = bcrypt.hashSync(password, 10);

		try {
			try {
				const { id: defaultBatchSizeUOMid } = await prisma.volume.findUnique({
					where: { name: 'Gallon(s)' }
				});
				const { id } = await prisma.user.create({
					data: { defaultBatchSizeUOMid, email, passwordHash }
				});
				cookies.set('session_id', id, {
					path: '/',
					httpOnly: true,
					sameSite: 'strict',
					secure: !dev,
					maxAge: 60 * 60 * 24 * 7
				});
			} catch (error) {
				throw 'Email already exists';
			}
		} catch (error) {
			return fail(400, { error });
		}
		throw redirect(303, '/dashboard');
	}
};
