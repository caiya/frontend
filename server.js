const connect = require('connect')
const serveStatic = require('serve-static')
const compression = require('compression')
const fs = require('fs')

const app = connect()
app.use(compression())

app.use(serveStatic('./dist'))

app.use((req, res) => {
  fs.readFile('./dist/index.html', 'utf-8', function (err, data) { // 读取内容
    if (err) throw err
    res.setHeader('content-type', 'text/html;charset=utf-8')
    res.write(data)
    res.end()
  })
})

app.listen(80)
