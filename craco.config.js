const path = require("path");
const mockMiddleware = require("./mock/index");
const CracoCssScopedPlugin = require("craco-plugin-scoped-css");
const CracoLessScopedPlugin = require("craco-scoped-less");
const CracoLessPlugin = require("craco-less");
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoCssScopedPlugin,
    },
    {
      plugin: CracoLessScopedPlugin,
    },
  ],
  devServer: {
    setupMiddlewares: mockMiddleware,
    // onBeforeSetupMiddleware: mockMiddleware,
  },
  webpack: {
    alias: {
      pages: path.join(__dirname, "src/pages"),
      components: path.join(__dirname, "src/components"),
      "@": path.join(__dirname, "src"),
    },
  },
};
