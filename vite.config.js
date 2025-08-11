
import { defineConfig } from 'vite';
import removeConsole from 'vite-plugin-remove-console';
import compression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    base: process.env.VITE_BASE_PATH || './',
    build: {
      minify: 'esbuild',
      sourcemap: false,
      cssCodeSplit: true,
      chunkSizeWarningLimit: 500,
    },
    plugins: [
      isProd && removeConsole(),
      isProd &&
        compression({
          algorithm: 'gzip',
          ext: '.gz',
          threshold: 10240,
        }),
    ],
  };
});