const express = require('express')
const app = express()
app.use(express.static('./dist'))
app.get('/', function (req, res) {
  res.send('Hello Vue-mpa-cli')
})

app.listen(2333)
console.log('server start http://120.0.0.1:2333')
