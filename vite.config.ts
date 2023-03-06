import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@configs': path.resolve(__dirname, 'src/configs'),
            '@service': path.resolve(__dirname, 'src/service'),
            '@components': path.resolve(__dirname, 'src/components')
        }
    }
});
