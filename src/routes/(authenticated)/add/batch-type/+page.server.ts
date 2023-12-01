import { fail } from '@sveltejs/kit';
import { prisma } from '$lib/prisma';

export const actions = {
	default: async ({ request }) => {
		const { name } = Object.fromEntries(await request.formData());

		try {
			try {
				await prisma.batchType.create({ data: { name } });
			} catch (error) {
				throw `${name} already exists`;
			}
		} catch (error) {
			return fail(400, { error });
		}

		return { name, success: true };
	}
};
