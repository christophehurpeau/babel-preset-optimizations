# babel-preset-optimizations [![NPM version][npm-image]][npm-url]

Babel preset for optimizations only [babel-minify](https://github.com/babel/minify) plugins

[![Dependency ci Status][dependencyci-image]][dependencyci-url]
[![Dependency Status][daviddm-image]][daviddm-url]

### Options

- `keepFnName`: Prevent plugin from removing function name (Enabled by default).

## Content

- [babel-plugin-minify-constant-folding](https://www.npmjs.com/package/babel-plugin-minify-constant-folding)
- [babel-plugin-minify-dead-code-elimination](https://www.npmjs.com/package/babel-plugin-minify-dead-code-elimination)
- [babel-plugin-minify-guarded-expressions](https://www.npmjs.com/package/babel-plugin-minify-guarded-expressions)
- [babel-plugin-transform-inline-consecutive-adds](https://www.npmjs.com/package/babel-plugin-transform-inline-consecutive-adds)

## Install

```bash
npm install --save-dev babel-preset-optimizations
yarn add --dev babel-preset-optimizations
```

## Usage

### Via `.babelrc`

**.babelrc**

```json
{
  "presets": ["optimizations"]
}
```

### Via CLI

```sh
babel script.js --presets babili-optimizations
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: [require('babel-preset-optimizations')]
});
```

[npm-image]: https://img.shields.io/npm/v/babel-preset-optimizations.svg?style=flat-square
[npm-url]: https://npmjs.org/package/babel-preset-optimizations
[daviddm-image]: https://david-dm.org/christophehurpeau/babel-preset-optimizations.svg?style=flat-square
[daviddm-url]: https://david-dm.org/christophehurpeau/babel-preset-optimizations
[dependencyci-image]: https://dependencyci.com/github/christophehurpeau/babel-preset-optimizations/badge?style=flat-square
[dependencyci-url]: https://dependencyci.com/github/christophehurpeau/babel-preset-optimizations
