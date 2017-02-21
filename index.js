const pluginMinifyConstantFolding = require('babel-plugin-minify-constant-folding');
const pluginMinifyDeadCodeElimination = require('babel-plugin-minify-dead-code-elimination');
const pluginMinifyGuardedExpressions = require('babel-plugin-minify-guarded-expressions');
const pluginTransformInlineConsecutiveAdds = require('babel-plugin-transform-inline-consecutive-adds');

const useDefault = obj => (obj.__esModule ? obj.default : obj);

module.exports = function (context, opts = {}) {
  return {
    plugins: [
      useDefault(pluginMinifyConstantFolding),
      useDefault(pluginMinifyDeadCodeElimination),
      useDefault(pluginMinifyGuardedExpressions),
      useDefault(pluginTransformInlineConsecutiveAdds),
    ],
  };
};
