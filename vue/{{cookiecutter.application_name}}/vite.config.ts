import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => /^elvia-/.test(tag),
        },
      },
    }),
  ],
  server: {
    proxy: {
      '/bff': {
        secure: false,
        target: 'https://localhost:8080',
        changeOrigin: true,
      },
    },
  },
});
