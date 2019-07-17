const restify = require('restify')
const restifyResPlugin = require('./index')

const server = restify.createServer()

server.use(restifyResPlugin({
  defaultErrorStatus: 500,
}))

server.get('/', (req, res) => {
  res.ok('Data')
})

server.get('/with-meta-data', (req, res) => {
  res.ok('Data', {page: 1})
})

server.get('/error', (req, res) => {
  res.error('Error message')
})

server.get('/error-with-status', (req, res) => {
  res.error(400, 'Error message')
})

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url) // eslint-disable-line
})
