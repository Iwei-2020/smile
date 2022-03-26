const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}
module.exports = {
  publicPath: "/",
  devServer: {
    host: "localhost",
    port: 3001,
    proxy: {
      "/api": {
        target: "http://localhost:3333/",
        ws: true,
        pathRewrite: {
          "^/api": "", // rewrite path
        },
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("svg")
      .exclude.add(resolve("src/assets/icons")) // 存放 svg 目录的目录
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons")) // 存放 svg 目录的目录
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
};
