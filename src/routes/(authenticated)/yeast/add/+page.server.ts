import { fail } from '@sveltejs/kit';
import { prisma } from "$lib/prisma";

export const actions = {
    default: async ({ request }) => {
        const { name, tolerance: toleranceRaw } = Object.fromEntries(await request.formData());
        const tolerance = parseFloat(toleranceRaw.replace(/[^(\d|\.)]/g, '')) / 100;

        try {
            try {
                await prisma.yeast.create({ data: { name, tolerance } });
            } catch (error) {
                throw `${name} already exists`
            }

        } catch (error) {
            return fail(400, { error })
        }

        return { success: true }
    }
}