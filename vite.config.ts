import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  return {
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
      sourcemap: true,
      copyPublicDir: true
    }
  }
}); 