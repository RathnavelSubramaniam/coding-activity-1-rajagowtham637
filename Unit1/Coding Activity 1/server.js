const express = require('express');

const app =express();
const port =6428;

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log('listening on port 6428');
})