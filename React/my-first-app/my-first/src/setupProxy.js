const proxy = require('http-proxy-middleware');

module.exports = function (app) {
     app.use(proxy("/gdc", {
         "changeOrigin": true,
         "cookieDomainRewrite": "localhost",
         "secure": false,
         "target": "https://reportsimpl.eabanalytics.com",
         "headers": {
             "host": "reportsimpl.eabanalytics.com",
             "origin": null
         }
     }));
     app.use(proxy("/*.html", {
         "changeOrigin": true,
         "secure": false,
         "target": "https://reportsimpl.eabanalytics.com"
     }));
     app.use(proxy("/packages/*.{js,css}", {
         "changeOrigin": true,
         "secure": false,
         "target": "https://reportsimpl.eabanalytics.com"
     }));
 };