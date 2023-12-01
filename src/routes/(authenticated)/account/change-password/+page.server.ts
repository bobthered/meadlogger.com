import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';
import { fail, redirect } from '@sveltejs/kit';
import { prisma } from '$lib/prisma';

export const actions = {
	default: async ({ locals, request }) => {
		try {
			// get supplied data
			const { currentPassword, newPassword, newPasswordConfirm } = Object.fromEntries(
				await request.formData()
			);

			// check if new passwords do not match
			if (newPassword !== newPasswordConfirm) throw 'New passwords do not match';

			// check if current password matches
			const { passwordHash: currentPasswordHash } = await prisma.user.findFirst({
				where: { id: locals.user.id }
			});
			if (!bcrypt.compareSync(currentPassword, currentPasswordHash))
				throw 'Incorrect current password';

			// hash password
			const passwordHash = bcrypt.hashSync(newPassword, 10);

			// update user in db
			await prisma.user.update({
				where: {
					id: locals.user.id
				},
				data: {
					passwordHash
				}
			});

			return { success: true };
		} catch (error) {
			return fail(400, { error });
		}
	}
};
