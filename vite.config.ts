import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/',
    plugins: [react()],
    root: '.',
    build: {
        rollupOptions: {
            input: 'index.html',
        },
    },
});
