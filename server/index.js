const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

app.put('/', function (req, res) {
  res.send('Got a PUT request')
})

app.delete('/', function (req, res) {
  res.send('Got a DELETE request')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})