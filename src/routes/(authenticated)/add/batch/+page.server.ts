import { ObjectId } from 'mongodb';
import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/prisma';

export const actions = {
	default: async ({ locals, request }) => {
		let { batchSize, batchSizeUOM, datePitched } = Object.fromEntries(await request.formData());
		batchSize = parseFloat(batchSize);
		const batchSizeUOMid = new ObjectId(batchSizeUOM);
		const userId = new ObjectId(locals.user.id);

		const { id } = await prisma.batch.create({
			data: { batchSize, batchSizeUOMid, datePitched, userId }
		});

		throw redirect(303, `/batch/${id}`);
	}
};

export const load = async () => {
	const volumes = await prisma.volume.findMany({ orderBy: [{ name: 'asc' }] });
	return { volumes };
};
