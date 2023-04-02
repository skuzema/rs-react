/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
    css: true,
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
      all: true,
      include: ['src/**/*.tsx'],
      exclude: ['src/**/*test.tsx', 'src/**/*.ts', 'src/**/*.js'],
    },
  },
});
