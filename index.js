var loaderUtils = require("loader-utils");
var sibilantWebpackLoader = (function sibilantWebpackLoader$(source) {
  /* sibilant-webpack-loader index.sibilant:3:0 */

  delete require.cache[require.resolve("sibilant")];
  var sibilant = require("sibilant");
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
    /* index.sibilant:15:23 */
  
    return loader.addDependency(arguments[0]);
  }));
  return loader.callback(null, js, JSON.parse(map));
});
module.exports = sibilantWebpackLoader;