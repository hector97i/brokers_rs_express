const express = require('express')
const cors = require('cors')
const querystring = require("querystring")
const { default: axios } = require('axios')
const app = express()

app.use(cors())
app.use(express.json())

const port = 8000

app.post('/api', async (req, res) => {
  const data = req.body
  console.log(data)
  const config = {
    method: data?.method,
    url: `https://api.easybroker.com/v1${data?.url}`,
    headers: { 
      'X-Authorization': 'bekvudbu32zdl4tsp4l7j6do05w5ft', 
      'Content-Type': 'application/json', 
      'Cookie': 'rp=api.easybroker.com; source=api.easybroker.com'
    }
  };

  let response = await axios(config)
  response = response.data
  res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
