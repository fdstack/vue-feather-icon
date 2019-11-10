import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs'
import alias from '@rollup/plugin-alias';
import buble from '@rollup/plugin-buble';
import replace from '@rollup/plugin-replace';
import nodeResolve from 'rollup-plugin-node-resolve';
import generatePackageJson from 'rollup-plugin-generate-package-json'
import svgo from 'rollup-plugin-svgo'

const outDir = 'dist/lib/';

const basePlugins = [
  replace({ 'process.env.NODE_ENV': '"production"' }),
  commonjs(),
  alias({
    resolve: ['.jsx', '.js', '.ts', '.tsx', '.vue', '.svg'],
  }),
  svgo(),
  typescript({
    tsconfig: false,
    experimentalDecorators: true,
    module: 'es2015'
  }),
  vue(),
  buble(),
];

export default [
  {
    input: './src/lib.ts',
    external: [
      'vue',
      'vue-property-decorator',
      'vue-class-component',
    ],
    output: [
      {
        format: 'esm',
        file: `${outDir}library.esm.js`,
        exports: 'named',
        name: 'VueFeatherIcon',
      },
      {
        format: 'cjs',
        file: `${outDir}library.js`,
        exports: 'named',
        name: 'VueFeatherIcon',
      },
    ],
    plugins: [
      ...basePlugins,
      nodeResolve({
        only: [
          'feather-icons',
        ]
      }),
      generatePackageJson({
        main: './library.js',
        module: './library.esm.js',
        baseContents: {
          "name": "@fdstack/vue-feather-icon",
          "version": "0.1.0",
          "repository": "https://github.com/fdstack/vue-feather-icon.git",
          "peerDependencies": {
            "vue": "^2.6.10",
            "vue-class-component": "^7.0.2",
            "vue-property-decorator": "^8.3.0"
          },
        }
      }),
    ]
  },
  {
    input: './src/lib.ts',
    external: [
      'vue',
    ],
    output: {
      format: 'iife',
      file: `${outDir}library.browser.js`,
      exports: 'named',
      name: 'VueFeatherIcon',
      globals: {
        vue: 'Vue'
      }
    },
    plugins: [
      ...basePlugins,
      nodeResolve({
        only: [
          'vue-property-decorator',
          'vue-class-component',
          'feather-icons',
        ]
      }),
      terser({
        ecma: 5
      })
    ]
  }
]
