import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
    cookies.delete('session_id');
    throw redirect(303, '/sign-in')
}