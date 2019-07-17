const restify = require('restify')
const restifyResPlugin = require('./index')

const server = restify.createServer()

server.use(restifyResPlugin())

server.get('/', (req, res) => {
  res.send({
    status: 'success',
  })
})

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url) // eslint-disable-line
})
