const express = require('express')
const app = express()
const bp = require('body-parser')

app.use(express.static('client'))

app.use(bp.urlencoded())

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/client/index.html')

})
app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/sport',(req,res)=>{
    console.log(req.path)
    res.send('sport2')
})

app.get('/news',(req,res)=>{
    console.log(req.query)
    res.send('news')
})


app.get('/register',(req,res)=>{
    res.sendFile(__dirname + '/client/register.html')
})

app.post('/register',(req,res)=>{
    console.log(req.body.firstName)
    

    res.send('ok')
    
})

app.listen('3000', ()=>{console.log("server is on 3000")})