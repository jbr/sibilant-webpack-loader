var loaderUtils = require("loader-utils"),
    sibilant = require("sibilant");
var sibilantWebpackLoader = (function sibilantWebpackLoader$(source) {
  /* sibilant-webpack-loader index.sibilant:3:0 */

  var loader = this;
  loader.cacheable();
  var sibilantRequest = loaderUtils.getRemainingRequest(loader),
      jsRequest = loaderUtils.getCurrentRequest(loader),
      query = loaderUtils.parseQuery(loader.query),
      result = sibilant({
    file: sibilantRequest,
    map: true
  }),
      js = result.js,
      dependencies = result.dependencies,
      map = result.map;
  console.log(("" + sibilantRequest + ": " + dependencies.join(", ")));
  dependencies.map((function() {
    /* index.sibilant:13:23 */
  
    return loader.addDependency(arguments[0]);
  }));
  return loader.callback(null, js, map);
});
module.exports = sibilantWebpackLoader;