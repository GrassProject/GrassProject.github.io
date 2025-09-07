// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://grassproject.github.io',
    output: 'server',
    server: {
        allowedHosts: ['0.tcp.jp.ngrok.io']
    }
});
