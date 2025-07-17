const express =require('express')
const Content=require('./models/content')
const mongoose=require('mongoose')
const app = express()
app.use(express.json())
app.get('/',(req,res)=>res.send("server started"))
app.get('/content',async(req,res)=>{
    const result=await Content.find({})
    console.log(result);
    res.json({result:result})
    

})
app.post('/content',async(req,res)=>{
    const {name}=req.body;
    const newCont=Content({name:name})
})

app.listen(3000,()=>console.log("server started at 3000 port "))
mongoose.connect('mongodb+srv://rahulkainswal:1t99cEBnjoCsVeXr@cluster0.bxeffe9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then((r)=>{
    console.log('mongoose connected successfully')
}).catch((e)=>{
    console.log(e);
    
})
