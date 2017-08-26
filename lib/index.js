const pluginMinifyConstantFolding = require('babel-plugin-minify-constant-folding');
const pluginMinifyDeadCodeElimination = require('babel-plugin-minify-dead-code-elimination');
const pluginMinifyGuardedExpressions = require('babel-plugin-minify-guarded-expressions');
// this plugin causes a lot of babel warnings, and makes the code a lot less readable.
// const pluginMinifySimplify = require('babel-plugin-minify-simplify');
const pluginTransformInlineConsecutiveAdds = require('babel-plugin-transform-inline-consecutive-adds');
// in babel, undefined is considered as unpure, so undefined !== 'string' will not be simplified unless with have this plugin
// const pluginTransformUndefinedToVoid = require('babel-plugin-transform-undefined-to-void');

module.exports = function(context, opts) {
  opts = opts || {}; // compatible with node 4
  const keepFnName = opts.keepFnName !== undefined ? opts.keepFnName : true;
  if (typeof keepFnName !== 'boolean') {
    throw new Error("Preset optimizations 'keepFnName' option must be a boolean.");
  }

  return {
    plugins: [
      pluginMinifyConstantFolding,
      [pluginMinifyDeadCodeElimination, { keepFnName }],
      pluginMinifyGuardedExpressions,
      // pluginMinifySimplify,
      pluginTransformInlineConsecutiveAdds,
      // pluginTransformUndefinedToVoid,
    ],
  };
};
