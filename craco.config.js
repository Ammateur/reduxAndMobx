// const CracoLessPlugin = require('craco-less')
const mockMiddleware = require("./mock/index");
const CracoLessScopedPlugin = require("craco-plugin-scoped-css");
module.exports = {
  plugins: [
    {
      plugin: CracoLessScopedPlugin,
    },
  ],
  devServer: {
    setupMiddlewares: mockMiddleware,
  },
};
