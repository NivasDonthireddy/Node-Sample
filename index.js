const express = require('express');
const path = require('path')
const port = process.env.PORT|| 3000;
const app = express();

app.use(express.static('public'))

app.get('/apis/posts',(req,res)=>{
    res.send("Hi Welcome!");
})

app.listen(port, () => {
    console.log("Server is listening on port "+port);
});