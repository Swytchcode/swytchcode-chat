import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SWYTCHCODE_BASE_URL, SWYTCHCODE_STREAM_BASE_URL } from './src/Constants';

export default defineConfig(({ mode }) => {
  const buildFormat = process.env.BUILD_FORMAT;
  return {
    plugins: [react()],
    define: {
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.SWYTCHCODE_BASE_URL': JSON.stringify(SWYTCHCODE_BASE_URL),
      'process.env.SWYTCHCODE_STREAM_BASE_URL': JSON.stringify(SWYTCHCODE_STREAM_BASE_URL)
    },
    resolve: {
      alias: {
        'react': 'https://esm.sh/react@18.2.0',
        'react-dom': 'https://esm.sh/react-dom@18.2.0'
      }
    },
    build: {
      lib: {
        entry: './src/index.ts',
        name: 'Swytchcode',
        fileName: (format) => `swytchcode.${format}.js`,
        formats: ['es', 'umd']
      },
      rollupOptions: {
        external: (id) => {
          if (buildFormat === 'umd') {
            return ['react', 'react-dom'].includes(id);
          }
          return false; // bundle everything for ES
        },
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      },
      outDir: 'dist',
      emptyOutDir: true,
      sourcemap: true,
      copyPublicDir: true
    }
  }
}); 