const express = require('express');
const app = express();  
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname,'../public')));
app.set('view engine','hbs');

app.get('',(req,res,next)=>{
    res.render('index',{
        title: 'Energy Reflux Blog',
        name: 'Nivas'
    })
})

app.listen(PORT,()=>{
    console.log(`Server Listening on port: ${PORT}`);
})