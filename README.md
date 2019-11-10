# vue-feather-icon
A simple vue component for displaying [feather icons](https://feathericons.com/) 
using the svg sprite sheet.

## Installation
#### npm
`npm i -S @fdstack/vue-feather-icon`

#### CDN
`https://cdn.fulldevstack.io/vue-feather-icon/vue-feather-icon.js`

## Importing
The package contains 3 builds that can be used based on environment.
#### ESM vue-feather.esm.js
The ES module build that can be used with webpack, rollup, or otherwise in 
an es module environment.

`import VueFeatherIcon from '@fdstack/vue-feather-icon';`

#### CJS vue-feather.cjs.js
The commonjs build for use in node environment.

`const VueFeatherIcon = require('@fdstack/vue-feather-icon');`

#### ES5 Browser vue-feather.js
The es5, browser friendly, and minified build for use directly in a script tag.
One can either self host the file or use the CDN.

`<script src="https://cdn.fulldevstack.io/vue-feather-icon/vue-feather-icon.js"></script>`

## Usage
#### Register
```
import VueFeatherIcon from 'vue-feather-icon';

Vue.use(VueFeatherIcon);
```
#### Markup
```
<vue-feather-icon name="plus" size="64"></vue-feather-icon>
```

## Props
@todo




