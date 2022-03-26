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
    const svgRule = config.module.rule("svg");
    // 清空默认svg规则
    svgRule.uses.clear();
    //针对svg文件添加svg-sprite-loader规则
    svgRule
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
  },
};
