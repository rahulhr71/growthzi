const express =require('express')
const { default: mongoose } = require('mongoose')
const mongoose=require('mongoose')
const app = express()

app.get('/',(req,res)=>res.send("server started"))
app.listen(3000,()=>console.log("server started at 3000 port "))
mongoose.connect('mongodb+srv://rahulkainswal:1t99cEBnjoCsVeXr@cluster0.bxeffe9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then((r)=>{
    console.log('mongoose connected successfully')
})