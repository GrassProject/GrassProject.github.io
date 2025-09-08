// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    site: 'https://grassproject.github.io',
    // output: 'server',
    base: '/', 
    output: 'sta'
    adapter: node({
        mode: 'standalone',
    }),
});
