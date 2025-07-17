const express =require('express')
const Content=require('./models/content')
const mongoose=require('mongoose')
require('dotenv').config();
const cors=require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>res.send("server started"))
app.get('/content',async(req,res)=>{
    const result=await Content.find({})
    console.log(result);
    res.json({result:result})
    

})
app.post('/content',async(req,res)=>{
    const {name}=req.body;
    if(!name){
        return res.status(400).json({error:"name not found"})
    }
    await Content.deleteMany({});
    const newCont=Content({name:name})
    newCont.save();
    res.status(200).json({sucess:true})
})

app.listen(3000,()=>console.log("server started at 3000 port "))
mongoose.connect(process.env.MONGO).then((r)=>{
    console.log('mongoose connected successfully')
}).catch((e)=>{
    console.log(e);
    
})
