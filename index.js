function restifyResPlugin(options) {
  function plugin(req, res, next) {
    return next()
  }

  return plugin
}

module.exports = restifyResPlugin
