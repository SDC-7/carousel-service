const express = require('express')
const app = express()
const port = 4000


app.get(`/api/images/:location`, (req, res) => {
  const location = req.params.location;
  res.send(`GET request images for location #${location}`)
})

app.post(`/api/images/:location`, function (req, res) {
  const location = req.params.location;
  res.send(`POST request images for location #${location}`)
})

app.put(`/api/images/:location`, function (req, res) {
  const location = req.params.location;
  res.send(`PUT request images for location #${location}`)
})

app.delete(`/api/images/:location`, function (req, res) {
  const location = req.params.location;
  res.send(`DELETE request images for location #${location}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})