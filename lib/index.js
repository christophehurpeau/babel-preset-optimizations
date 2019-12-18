'use strict';

const pluginMinifyConstantFolding = require('babel-plugin-minify-constant-folding');
const pluginMinifyDeadCodeElimination = require('babel-plugin-minify-dead-code-elimination');
const pluginMinifyGuardedExpressions = require('babel-plugin-minify-guarded-expressions');
// this plugin causes a lot of babel warnings, and makes the code a lot less readable.
const pluginMinifySimplify = require('babel-plugin-minify-simplify');
const pluginTransformInlineConsecutiveAdds = require('babel-plugin-transform-inline-consecutive-adds');
// in babel, undefined is considered as unpure, so undefined !== 'string' will not be simplified unless with have this plugin
const pluginTransformUndefinedToVoid = require('babel-plugin-transform-undefined-to-void');

const assertOptions = (opts) => {
  ['keepFnName', 'keepClassName', 'simplify', 'undefinedToVoid'].forEach(
    (optionName) => {
      if (
        opts[optionName] !== undefined &&
        typeof opts[optionName] !== 'boolean'
      ) {
        throw new Error(
          `Preset optimizations '${optionName}' option must be a boolean.`
        );
      }
    }
  );
};

module.exports = function(context, opts = {}) {
  assertOptions(opts);

  const keepFnName = opts.keepFnName !== undefined ? opts.keepFnName : true;
  const keepClassName =
    opts.keepClassName !== undefined ? opts.keepClassName : true;
  const simplify = opts.simplify !== undefined ? opts.simplify : false;
  const undefinedToVoid =
    opts.undefinedToVoid !== undefined ? opts.undefinedToVoid : false;

  return {
    plugins: [
      pluginMinifyConstantFolding,
      [
        pluginMinifyDeadCodeElimination,
        { keepFnName, keepClassName, optimizeRawSize: true },
      ],
      pluginMinifyGuardedExpressions,
      simplify && pluginMinifySimplify,
      pluginTransformInlineConsecutiveAdds,
      undefinedToVoid && pluginTransformUndefinedToVoid,
    ].filter(Boolean),
  };
};
