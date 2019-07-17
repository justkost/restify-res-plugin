const restify = require('restify')
const server = restify.createServer()

server.get('/', (req, res) => {
  res.send({
    status: 'success',
  })
})

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url) // eslint-disable-line
})
