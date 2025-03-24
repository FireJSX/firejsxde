import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: '.',  // Sicherstellen, dass der Root-Ordner korrekt eingestellt ist
    build: {
        rollupOptions: {
            input: 'index.html', // Hier wird explizit die index.html als Einstiegspunkt angegeben
        },
    },
});
