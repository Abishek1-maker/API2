const express=require('express');
const app=express();
const users=require('./MOCK_DATA.json');
const port=3000;

app.get('/api/users',(req,res)=>{
    res.json({
    users
    });
})
app.get('/users',(req,res)=>{
    const html=`
    <ul>
    ${users.map((users)=>`<li>${users.first_name}</li>`).join('')}
</ul>
    `;
    res.send(html);
})
// app.get('/api/users/:id',(req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find(user=>user.id===id)
//     res.json(user)
// })


//joining them by route
app.route('/api/users/:id').get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find(user=>user.id===id)
    res.json(user);
}).put((req,res)=>{
    
})

app.listen(port,()=>{
    console.log("server is running on 3000");
})
