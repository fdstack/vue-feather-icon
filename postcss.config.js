const { resolve } = require('path');
const postcssPresetEnv = require('postcss-preset-env');
const purgecss = require('@fullhuman/postcss-purgecss');
const glob = require('glob-all');
const SRC = resolve(__dirname, 'src');
const PUBLIC = resolve(__dirname, 'public');

const plugins = [
  postcssPresetEnv(),
  require('postcss-import'),
  require('tailwindcss'),
  require('autoprefixer'),
];

const purgePluginOptions = {
  content: glob.sync([
    `${PUBLIC}/index.html`,
    `${SRC}/**/*.vue`,
  ], { nodir: true }),
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelist: [ 'em', 'tooltip' ],
  whitelistPatterns: [ /^(js)-.+/ ],
};

if (process.env.NODE_ENV === 'production') {
  plugins.push(purgecss(purgePluginOptions), require('cssnano'));
}

module.exports = {
  plugins
};
