# Restify Response Plugin

```js
res.ok('Data')
```

{
  isSuccess: true,
  data: "Data"
}

```js
res.error('Message')
```

{
  isSuccess: false,
  error: "Message"
}

## Example
```js
const restify = require('restify')
const restifyResPlugin = require('restify-res-plugin')

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

## Options

* defaultErrorStatus _(default 200)_

## Success / Faile

also you can use res.success and res.fail
