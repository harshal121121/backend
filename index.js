 console.log("Hello Harshal, welcome to backend!!");
//hello world in express
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/name',(req,res)=>{
    res.send('Hello Harshal, welcome to Backend')
})
app.get('/youtube', (req,res)=>{
    res.send("<h1>Chai aur Code</h1>")
})

app.get('/login', (req,res)=>{
    res.send("<h1>This is login Page</h1>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
