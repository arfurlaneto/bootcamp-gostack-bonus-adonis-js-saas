const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathPreffix: '~',
      rootPathSuffix: 'src',
    },
  ]),
);
