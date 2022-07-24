// certification installation is helped by https://laracasts.com/discuss/channels/vite/laravel-vite-hmr-not-working-with-custom-doamin and 
// https://freek.dev/2276-making-vite-and-valet-play-nice-together

import { defineConfig } from 'vite';
import fs from 'fs';
import laravel, { refreshPaths } from 'laravel-vite-plugin';
const host  = 'example-app.test';
export default defineConfig({
    server: {
        host: host,
        https: {
            key: fs.readFileSync('/Applications/MAMP/Library/OpenSSL/certs/example-app.test.key'),
            cert: fs.readFileSync('/Applications/MAMP/Library/OpenSSL/certs/example-app.test.crt'),
        },
    },
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: [
                ...refreshPaths,
                'app/Http/Livewire/**',
            ],
        }),
    ],
});
