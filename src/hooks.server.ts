export const handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/')
		return new Response('Redirect', { status: 303, headers: { Location: '/sign-in' } });
	const response = await resolve(event);
	return response;
};
