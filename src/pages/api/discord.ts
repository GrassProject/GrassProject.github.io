export const prerender = false;

import axios from 'axios';
import qs from 'qs';
import type {APIRoute} from "astro";

const clientId = '1358603949015564449';
const clientSecret = 's8Tf9GpGwOHxaDcqXaF8NnZzF_GEkduL';

export const POST: APIRoute = async ({ request }) => {
    let data;
    try {
        data = await request.json();
    } catch (err) {
        return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
    }

    const { code, redirectUri } = data;
    if (!code || !redirectUri) {
        return new Response(JSON.stringify({ error: 'Missing code or redirectUri' }), { status: 400 });
    }

    try {
        // console.log(`redirect: ${redirectUri}`)
        const tokenRes = await axios.post(
            'https://discord.com/api/v10/oauth2/token',
            qs.stringify({
                grant_type: 'authorization_code',
                code,
                redirect_uri: redirectUri,
                scope: 'identify email openid',
            }),
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                auth: { username: clientId, password: clientSecret },
            }
        );

        const accessToken = tokenRes.data.access_token;

        const userRes = await axios.get('https://discord.com/api/v10/users/@me', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        return new Response(JSON.stringify(userRes.data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err: any) {
        console.error(err.response?.data || err.message);
        return new Response(
            JSON.stringify({ error: 'Discord API Error' }),
            { status: 500 }
        );
    }
};
