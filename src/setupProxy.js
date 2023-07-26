// @ts-ignore
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/open", {
      target: "http://zr.tocersoft.net:7888/api/open",
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        "^/api/open": "",
      },
    }),
    createProxyMiddleware("/api/weather", {
      target: "http://172.16.1.14:9045/api/weather",
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        "^/api/weather": "",
      },
    })
  );
};
