import {defineConfig} from "astro/config";

export default defineConfig({
    server: {
        allowedHosts: ['0.tcp.jp.ngrok.io']
    }
})