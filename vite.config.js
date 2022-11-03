/* eslint-disable no-magic-numbers, camelcase */
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isProduction = env.NODE_ENV === 'production';

  return {
    build: {
      sourcemap: !isProduction,
      minify: 'terser',
      terserOptions: { keep_classnames: true },
    },
    define: {
      'import.meta.vitest': 'undefined',
      __LIB_NAME__: JSON.stringify(env.npm_package_name),
      __LIB_VERSION__: JSON.stringify(env.npm_package_version),
      __ENVIRONMENT__: JSON.stringify(env.NODE_ENV),
      __ABU_DEBUG__: JSON.stringify(true),
    },
    resolve: { alias: { '@': resolve(__dirname, 'src') }, mainFields: ['browser', 'module', 'jsnext:main', 'jsnext'] },
    server: { watch: { usePolling: true } },
    test: {
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'json', 'html'],
      },
      environment: 'jsdom',
      includeSource: ['src/**/*.{js,ts}'],
    },
  };
});
