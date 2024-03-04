export async function handle({ event, resolve }) {
    // console.log(event.clientAddress);
    event.locals.ip = event.getClientAddress();

    return await resolve(event);
}