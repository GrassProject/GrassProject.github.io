// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://grassproject.github.io',
    server: {
        allowedHosts: ['0.tcp.jp.ngrok.io']
    }
});
