# Restify Response Plugin

Add methods 'ok' and 'error' to the res object

```js
const restify = require('restify')
const restifyResPlugin = require('./index')

const server = restify.createServer()

server.use(restifyResPlugin())

server.get('/', (req, res) => {
  res.ok('Data')
})

server.get('/with-meta-data', (req, res) => {
  res.ok('Data', { page: 1 })
})

server.get('/error', (req, res) => {
  res.error('Error message')
})

server.get('/error-with-status', (req, res) => {
  res.error(400, 'Error message')
})
```

also you can use res.success and res.fail
