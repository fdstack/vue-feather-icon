import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import alias from '@rollup/plugin-alias';
import buble from '@rollup/plugin-buble';
import replace from '@rollup/plugin-replace';
import nodeResolve from 'rollup-plugin-node-resolve';
import generatePackageJson from 'rollup-plugin-generate-package-json'
import svgo from 'rollup-plugin-svgo'

const outDir = 'dist/lib/';
const outName = 'vue-feather-icon';
const pkg = require('./package.json');

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
        file: `${outDir}${outName}.esm.js`,
        exports: 'named',
        name: 'VueFeatherIcon',
      },
      {
        format: 'cjs',
        file: `${outDir}${outName}.cjs.js`,
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
        baseContents: {
          'name': pkg.name,
          'version': pkg.version,
          'repository': pkg.repository,
          'main': `./${outName}.cjs.js`,
          'module': `./${outName}.esm.js`,
          'peerDependencies': {
            'vue': '^2.6.10'
          }
        }
      }),
      copy({
        targets: [
          { src: [ 'src/lib/index.d.ts', 'README.md', 'LICENSE' ], dest: 'dist/lib' },
        ]
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
      file: `${outDir}${outName}.js`,
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
