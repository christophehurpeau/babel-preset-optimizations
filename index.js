const useDefault = obj => (obj.__esModule ? obj.default : obj);
const pluginMinifyConstantFolding = useDefault(require('babel-plugin-minify-constant-folding'));
const pluginMinifyDeadCodeElimination = useDefault(require('babel-plugin-minify-dead-code-elimination'));
const pluginMinifyGuardedExpressions = useDefault(require('babel-plugin-minify-guarded-expressions'));
const pluginTransformInlineConsecutiveAdds = useDefault(require('babel-plugin-transform-inline-consecutive-adds'));


module.exports = function (context, opts = {}) {
  return {
    plugins: [
      pluginMinifyConstantFolding,
      pluginMinifyDeadCodeElimination,
      pluginMinifyGuardedExpressions,
      pluginTransformInlineConsecutiveAdds,
    ],
  };
};
