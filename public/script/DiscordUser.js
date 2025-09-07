import axios from 'axios';
import qs from 'qs';

const clientId = '1358603949015564449';
const clientSecret = 's8Tf9GpGwOHxaDcqXaF8NnZzF_GEkduL';

export async function getDiscordUser(code, redirectUri) {
    try {
        const tokenRes = await axios.post(
            'https://discord.com/api/v10/oauth2/token',
            qs.stringify({
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirectUri,
                scope: 'identify email openid'
            }),
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                auth: { username: clientId, password: clientSecret }
            }
        );

        const accessToken = tokenRes.data.access_token;

        const userRes = await axios.get('https://discord.com/api/v10/users/@me', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        return userRes.data;
    } catch (err) {
        console.error(err.response?.data || err.message);
        throw new Error(err.message || 'Discord API Error');
    }
}

module.exports = { getDiscordUser };
