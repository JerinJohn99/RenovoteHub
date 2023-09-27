// const http=require('http')
// const fs=require('fs')
// const fileContent=fs.readFileSync('home.html')

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/html'});
//     res.end(fileContent)
// })

// server.listen(8081,()=>{
//     console.log("Listening on port")
// })

var express=require('express');
var app=express();

app.listen(3000);

app.get('/home',(req,res)=>{
    res.sendFile("home.html",{root:__dirname});
})