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
          // modifyVars: {
          //   "primary-color": "#1DA57A",
          //   "link-color": "#1DA57A",
          //   "border-radius-base": "2px",
          // },
          javascriptEnabled: true,
        },
      },
    },
  },
};
