import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    // console.log(event.getClientAddress());
    event.locals.ip = event.getClientAddress();
    // console.log(event.locals.ip);
    return await resolve(event);
}