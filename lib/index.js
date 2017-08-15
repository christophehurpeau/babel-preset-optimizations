const pluginMinifyConstantFolding = require('babel-plugin-minify-constant-folding');
const pluginMinifyDeadCodeElimination = require('babel-plugin-minify-dead-code-elimination');
const pluginMinifyGuardedExpressions = require('babel-plugin-minify-guarded-expressions');
const pluginTransformInlineConsecutiveAdds = require('babel-plugin-transform-inline-consecutive-adds');

module.exports = function(context, opts) {
  opts = opts || {}; // compatible with node 4
  const keepFnName = opts.keepFnName !== undefined ? opts.keepFnName : true;
  if (typeof keepFnName !== 'boolean') {
    throw new Error("Preset modern-browsers 'keepFnName' option must be a boolean.");
  }

  return {
    plugins: [
      pluginMinifyConstantFolding,
      [pluginMinifyDeadCodeElimination, { keepFnName }],
      pluginMinifyGuardedExpressions,
      pluginTransformInlineConsecutiveAdds,
    ],
  };
};
