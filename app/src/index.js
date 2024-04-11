const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 8888

// create application/json parser
var jsonParser = bodyParser.json()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', jsonParser, (req, res) => {
    var doc = req.body;
    console.log(doc)
    res.send('Accepted')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})