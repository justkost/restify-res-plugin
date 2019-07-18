const restifyResPlugin = require('./index')
const plugin = restifyResPlugin()
const req = {}
const res = {}
const next = () => {}

test('must return function', () => {
  expect(typeof plugin).toBe('function')
})

test('res must have: ok, error, success, fail', () => {
  plugin(req, res, next)
  expect(typeof res.ok).toBe('function')
  expect(typeof res.error).toBe('function')
  expect(typeof res.success).toBe('function')
  expect(typeof res.fail).toBe('function')
})
