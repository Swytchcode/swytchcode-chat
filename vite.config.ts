import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SWYTCHCODE_BASE_URL, SWYTCHCODE_STREAM_BASE_URL } from './src/Constants';


export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.SWYTCHCODE_BASE_URL': JSON.stringify(SWYTCHCODE_BASE_URL),
    'process.env.SWYTCHCODE_STREAM_BASE_URL': JSON.stringify(SWYTCHCODE_STREAM_BASE_URL)
  },
  server: {
    proxy: {
      '/api/stream': {
        target: SWYTCHCODE_STREAM_BASE_URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/stream/, '')
      },
      '/api': {
        target: SWYTCHCODE_BASE_URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
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
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  }
}) 