<h3 align="center">
  babel-preset-optimizations
</h3>

<p align="center">
  Babel preset for optimizations only babel-minify plugins
</p>

<p align="center">
  <a href="https://npmjs.org/package/babel-preset-optimizations"><img src="https://img.shields.io/npm/v/babel-preset-optimizations.svg?style=flat-square"></a>
  <a href="https://david-dm.org/christophehurpeau/babel-preset-optimizations"><img src="https://david-dm.org/christophehurpeau/babel-preset-optimizations.svg?style=flat-square"></a>
  <a href="https://dependencyci.com/github/christophehurpeau/babel-preset-optimizations"><img src="https://dependencyci.com/github/christophehurpeau/babel-preset-optimizations/badge?style=flat-square"></a>
</p>

### Options

- `keepFnName`: Prevent plugin from removing function name (Enabled by default).
- `simplify`: Enable [babel-plugin-minify-simplify](https://www.npmjs.com/package/babel-plugin-minify-simplify): makes the code a lot less readable (Disabled by default).
- `undefinedToVoid`: Enable [babel-plugin-transform-undefined-to-void](https://www.npmjs.com/package/babel-plugin-transform-undefined-to-void): in babel, undefined is considered as unpure, so undefined !== 'string' will not be simplified unless with have this plugin (Disabled by default).

## Content

- [babel-plugin-minify-constant-folding](https://www.npmjs.com/package/babel-plugin-minify-constant-folding)
- [babel-plugin-minify-dead-code-elimination](https://www.npmjs.com/package/babel-plugin-minify-dead-code-elimination)
- [babel-plugin-minify-guarded-expressions](https://www.npmjs.com/package/babel-plugin-minify-guarded-expressions)
- [babel-plugin-minify-simplify](https://www.npmjs.com/package/babel-plugin-minify-simplify)
- [babel-plugin-transform-inline-consecutive-adds](https://www.npmjs.com/package/babel-plugin-transform-inline-consecutive-adds)
- [babel-plugin-transform-undefined-to-void](https://www.npmjs.com/package/babel-plugin-transform-undefined-to-void)

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
babel script.js --presets optimizations
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: [require('babel-preset-optimizations')]
});
```
