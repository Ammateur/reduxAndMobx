// const CracoLessPlugin = require('craco-less')
const path = require("path");
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
  webpack: {
    alias: {
      pages: path.join(__dirname, "src/pages"),
      "@": path.join(__dirname, "src"),
    },
  },
};
