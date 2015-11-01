var express = require('express')
var request = require('request')

var userName = 'test'
var passwd = 'test'

var app = express()

app.use(express.static('webapp'))

app.post('/rpcproxy', function (req, res) {
  var x = request('http://144.168.58.23/miniflux/jsonrpc.php').auth(
    userName, passwd)
  req.pipe(x)
  x.pipe(res)
})

var server = app.listen(9000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('app listening at http://%s:%s', host, port)

})
