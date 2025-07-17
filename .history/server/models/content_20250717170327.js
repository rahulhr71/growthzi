const mongoose =require('mongoose')

const contentSchema=mongoose.Schema({
    name:{
        type:String,required:true
    }
})