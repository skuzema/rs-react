/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
    css: true,
    coverage: {
      all: true,
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.tsx'],
      exclude: [
        'src/**/*test.tsx',
        'src/main.tsx',
        'src/**/*.js',
        'src/models/*',
        'src/entry-client.tsx',
        'src/entry-server.tsx',
        '**/cypress/**',
      ],
    },
  },
});