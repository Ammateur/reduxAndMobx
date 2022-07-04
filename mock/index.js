const path = require("path");
const fs = require("fs");

/**------- mock路由控制器 -------**/
const mockMiddleware = (middleWare, devServer) => {
  const files = fs.readdirSync(path.join(__dirname, "./"));
  files.forEach((fileName) => {
    if (fileName === "index.js") {
      return;
    }
    require(path.join(__dirname, fileName))(devServer.app);
  });
  return middleWare;
};
module.exports = mockMiddleware;
