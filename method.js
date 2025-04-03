const express=require('express');
const app=express();
const users=require('./MOCK_DATA.json');
const port=3000;

app.get('/api/users',(req,res)=>{
    res.json({
    users
    });
})
app.listen(port,()=>{
    console.log("server is running on 3000");
})
