const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World change codee to Render ECS Task Definition esc-task.json!, fix AmazonECS_FullAccess policy to AmazonECS_FullAccess policy')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})