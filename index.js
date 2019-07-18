function restifyResPlugin(options) {
  const opt = {
    defaultErrorStatus: 200,
    ...options,
  }

  function plugin(req, res, next) {
    const success = (data, meta) => {
      res.json({
        isSuccess: true,
        data,
        meta,
      })
    }
    const fail = (...args) => {
      if (typeof args[0] === 'number') {
        res.status(args[0])
        res.json({
          isSuccess: false,
          error: args[1],
        })
      } else {
        res.status(opt.defaultErrorStatus)
        res.json({
          isSuccess: false,
          error: args[0],
        })
      }
    }

    res.ok = success
    res.success = success
    res.error = fail
    res.fail = fail

    return next()
  }

  return plugin
}

module.exports = restifyResPlugin
