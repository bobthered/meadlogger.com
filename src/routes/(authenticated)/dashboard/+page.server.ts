import { ObjectId } from 'mongodb';
import { prisma } from '$lib/prisma';

export const actions = {
	delete: async ({ request }) => {
		let { id } = Object.fromEntries(await request.formData());
		id = new ObjectId(id);
		await prisma.batch.delete({ where: { id } });

		return { success: true };
	}
};

export const load = async ({ locals }) => {
	const user = locals;
	const batches = await prisma.batch.findMany({
		where: { userId: user.id },
		orderBy: [{ datePitched: 'desc' }]
	});
	return { batches };
};
