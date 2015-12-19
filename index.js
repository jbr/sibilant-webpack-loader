var sibilant = require("sibilant"),
    loaderUtils = require("loader-utils");
var sibilantWebpackLoader = (function sibilantWebpackLoader$(source) {
  /* sibilant-webpack-loader /Users/jbr/code/sibilant-webpack-loader/index.sibilant:3:0 */

  var sibilantRequest = loaderUtils.getRemainingRequest(this),
      jsRequest = loaderUtils.getCurrentRequest(this),
      query = loaderUtils.parseQuery(this.query),
      jsResult = sibilant.sibilizeFile(sibilantRequest),
      map = JSON.parse(sibilant.sourcemapFile(sibilantRequest));
  return this.callback(null, jsResult, map);
});
module.exports = sibilantWebpackLoader;