import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import strip from '@rollup/plugin-strip';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';

export default {
  input: 'app/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'app'
  },
  plugins: [
    peerDepsExternal(),
    json(),
    postcss({
      extract: true,
      modules: true,
      use: ['sass'],
      minimize: true,
      fileName: 'index.css',
      include: ['**/*.css', '**/*.scss', '**/*.sass'],
      exclude: ['node_modules/**'],
      config: {
        path: './postcss.config.cjs'
      }
    }),
    url({
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif'],
      limit: 0,
      fileName: '[dirname][name][extname]',
      publicPath: '/images/'
    }),
    resolve({
      browser: true,
      preferBuiltins: false,
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.sass']
    }),
    commonjs({
      include: /node_modules/,
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    typescript({
      tsconfig: './tsconfig.json',
      outputToFilesystem: true,
      exclude: ['**/__tests__', '**/*.test.ts'],
      jsx: 'preserve'
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
      ],
      plugins: [
        ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
      ]
    }),
    strip({
      include: ['**/*.ts', '**/*.tsx'],
      exclude: ['**/*.test.ts', '**/*.test.tsx'],
      functions: ['console.log', 'console.info', 'console.debug']
    }),
    terser()
  ],
  external: [
    'react',
    'react-dom',
    'next',
    'next/router',
    'next/image',
    'next/link',
    'next/head',
    'next/document',
    'next/app',
    'next/dynamic',
    'next/script',
    'next/navigation',
    'next/font',
    'next/headers',
    'next/cookies',
    'next/middleware',
    'next/error',
    'next/constants',
    'next/config',
    'next/types',
    'next/dist/shared/lib/router-context',
    'next/dist/shared/lib/head-manager-context',
    'next/dist/shared/lib/image-config-context',
    'next/dist/shared/lib/app-router-context',
    'next/dist/shared/lib/hooks-client-context',
    'next/dist/shared/lib/server-inserted-html',
    'next/dist/shared/lib/script-context',
    'next/dist/shared/lib/constants',
    'next/dist/shared/lib/utils',
    'next/dist/shared/lib/router',
    'next/dist/shared/lib/head',
    'next/dist/shared/lib/image',
    'next/dist/shared/lib/app',
    'next/dist/shared/lib/document',
    'next/dist/shared/lib/script',
    'next/dist/shared/lib/navigation',
    'next/dist/shared/lib/font',
    'next/dist/shared/lib/headers',
    'next/dist/shared/lib/cookies',
    'next/dist/shared/lib/middleware',
    'next/dist/shared/lib/error',
    'next/dist/shared/lib/constants',
    'next/dist/shared/lib/config',
    'next/dist/shared/lib/types',
    'form-data',
    'fs',
    'path',
    'stream',
    'util',
    'url',
    'http',
    'https',
    'zlib',
    'buffer',
    'crypto'
  ]
};
