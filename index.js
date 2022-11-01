const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res,next)=>{
    res.status(200).send('Hi , Welcome to Energy Reflux!');
})

app.listen(PORT,()=>{
    console.log(`Server Listening on port: ${PORT}`);
})