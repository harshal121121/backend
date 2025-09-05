 console.log("Hello Harshal, welcome to backend!!");
//hello world in express
import express from 'express';
const app = express()
const port = process.env.PORT ||8000;

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
app.get('/jokes', (req,res)=>{
    const joke = [{id:1, title:"this is first joke", content:"this is 1st content"},{ id:2, title:"this is second joke" , content:"this is 2nd content"},{ id:3, title:"this is third joke" , content:"this is 3rd content"}] ;     
    res.send(joke)          //this is basic api 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
