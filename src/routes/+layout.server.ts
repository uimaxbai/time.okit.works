import { IPINFO_API_KEY } from "$env/static/private";

export async function load({ locals }) {
    // console.log(locals.ip);
    try {
        // console.log(IPINFO_API_KEY)
        var clientIP: string = locals.ip;
        // clientIP = "1.1.1.1"
        // console.log(clientIP);
        // console.log(1);
        let response = await fetch(`https://ipinfo.io/${clientIP}/json?token=${IPINFO_API_KEY}`);
        let data = await response.json();
        console.log(data)
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