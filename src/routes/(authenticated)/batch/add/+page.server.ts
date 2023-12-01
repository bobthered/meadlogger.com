import { ObjectId } from 'mongodb';
import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/prisma';

export const actions = {
	default: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData());
		data.size = parseFloat(data.size);
		data.sizeUOMid = new ObjectId(data.sizeUOMid);
		data.typeId = new ObjectId(data.typeId);
		data.userId = new ObjectId(locals.user.id);

		const { id } = await prisma.batch.create({
			data
		});

		throw redirect(303, `/batch/edit/${id}`);
	}
};

export const load = async () => {
	const [batchTypes, volumes] = await Promise.all(
		['batchType', 'volume'].map(
			async (key) => await prisma[key].findMany({ orderBy: [{ name: 'asc' }] })
		)
	);
	return { batchTypes, volumes };
};
