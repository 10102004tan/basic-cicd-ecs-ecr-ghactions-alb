const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('Hello World change codee to Render ECS Task Definition esc-task.json!, fix AmazonECS_FullAccess policy to AmazonECS_FullAccess policy')
  res.json({
    message: 'Hello World',
    version: '2.0.0',
    description: 'This is a sample application running on AWS ECS using Node.js and Express. It demonstrates how to deploy a simple web application on AWS ECS using Fargate launch type.  change codee to Render ECS Task Definition esc-task.json!, fix AmazonECS_FullAccess policy to AmazonECS_FullAccess policy',
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})