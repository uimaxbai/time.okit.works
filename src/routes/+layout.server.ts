import { IPINFO_API_KEY } from "$env/static/private";

export async function load({ locals }) {
    // console.log(locals.ip);
    try {
        const clientIP: string = locals.ip;
        const response = await fetch(`https://ipinfo.io/${clientIP}?token=${IPINFO_API_KEY}`);
        const data = await response.json();
        const country = data.country;
        const city = data.city;
        const region = data.region;
        // console.log('Client Country: ', country);
    
        return {
            status: 200, // OK
            country: country,
            region: region,
            city: city,
            ip: clientIP
        };
    } catch (error) {
        console.error("Error occurred:", error);
    }
}